(() => {
  const normalize = value => String(value).trim().replace(/\s+/g, ' ').toLowerCase();

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  function validateMission(api, grade, chapterIndex, conceptIndex, concept) {
    const questions = api.missionQuestionsFor(Number(grade), chapterIndex, conceptIndex);
    const missionName = `Grade ${grade}, chapter ${chapterIndex + 1}, ${concept}`;

    assert(questions.length === 10, `${missionName}: expected 10 questions, found ${questions.length}`);
    assert(new Set(questions.map(question => normalize(question.question))).size === 10, `${missionName}: repeated question text found`);

    for (const [questionIndex, question] of questions.entries()) {
      assert(question.question && question.correct, `${missionName}, question ${questionIndex + 1}: missing question or answer`);
      assert(Array.isArray(question.options) && question.options.length === 4, `${missionName}, question ${questionIndex + 1}: expected four choices`);
      assert(new Set(question.options.map(normalize)).size === 4, `${missionName}, question ${questionIndex + 1}: duplicate answer choices found`);
      assert(question.options.filter(option => normalize(option) === normalize(question.correct)).length === 1, `${missionName}, question ${questionIndex + 1}: correct answer must appear exactly once`);
    }
  }

  window.runNumberQuestTests = api => {
    const results = [];
    const grades = Object.entries(api.course);

    for (const [grade, gradeContent] of grades) {
      for (const [chapterIndex, chapter] of gradeContent.chapters.entries()) {
        for (const [conceptIndex, concept] of chapter[1].entries()) {
          assert(api.conceptLessons[concept], `Grade ${grade}, chapter ${chapterIndex + 1}: missing lesson for ${concept}`);
          assert(api.conceptCases[concept], `Grade ${grade}, chapter ${chapterIndex + 1}: missing cases for ${concept}`);
          assert(api.conceptCases[concept].length >= 2, `Grade ${grade}, chapter ${chapterIndex + 1}: ${concept} needs at least two cases`);
          const hasVisual = concept === 'Place value' || api.conceptVisualMap[concept];
          assert(hasVisual, `Grade ${grade}, chapter ${chapterIndex + 1}: missing visual for ${concept}`);
          validateMission(api, grade, chapterIndex, conceptIndex, concept);
          results.push(`PASS Grade ${grade} / Chapter ${chapterIndex + 1} / ${concept}`);
        }
      }
    }

    return { passed: results.length, results };
  };

  window.runNumberQuestUiFlowTest = async frame => {
    const document = frame.contentDocument;
    const api = frame.contentWindow.NumberQuestTestAPI;
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const clickAnswer = answer => {
      const button = [...document.querySelectorAll('[data-answer]')].find(item => normalize(item.textContent) === normalize(answer));
      assert(button, `UI flow: answer choice ${answer} was not rendered`);
      button.click();
    };
    const unlockAnswers = () => {
      const strategy = document.querySelector('[data-strategy]');
      const note = document.querySelector('#workNote');
      assert(strategy && note, 'UI flow: Paper First checkpoint was not rendered');
      strategy.click();
      note.value = 'I wrote an equation and checked the place values.';
      note.dispatchEvent(new Event('input', { bubbles: true }));
      assert(!document.querySelector('#unlockAnswers').disabled, 'UI flow: valid work did not unlock the submit button');
      document.querySelector('#unlockAnswers').click();
    };

    document.querySelector('[data-chapter="0"]').click();
    document.querySelector('[data-start-concept="0"]').click();
    const mission = api.missionQuestionsFor(4, 0, 0);

    assert(!document.querySelector('[data-answer]'), 'UI flow: answers appeared before Paper First was complete');
    unlockAnswers();
    clickAnswer(mission[0].options.find(option => normalize(option) !== normalize(mission[0].correct)));
    assert(!document.querySelector('#reteachModal').hidden, 'UI flow: rapid guess did not trigger a Paper First reset');
    assert(document.querySelector('#reteachTitle').textContent.includes('Pause'), 'UI flow: rapid guess did not explain the pause');
    document.querySelector('#tryAgain').click();
    assert(document.querySelector('#workNote'), 'UI flow: rapid guess did not return to the work checkpoint');

    unlockAnswers();
    await wait(2050);
    clickAnswer(mission[0].correct);
    await wait(20);
    assert(document.querySelector('.cheer'), 'UI flow: correct answer did not show a celebration');
    assert([...document.querySelectorAll('[data-answer]')].every(button => button.disabled), 'UI flow: answer buttons were not locked after a correct answer');
    return 'PASS shared UI flow: Paper First gate, rapid-guess reset, and celebration';
  };
})();
