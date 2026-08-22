(() => {
  const normalize = value => String(value).trim().replace(/\s+/g, ' ').toLowerCase();

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }

  const MISSION_LENGTH = 20;

  function validateMission(api, grade, chapterIndex, conceptIndex, concept) {
    const questions = api.missionQuestionsFor(Number(grade), chapterIndex, conceptIndex);
    const missionName = `Grade ${grade}, chapter ${chapterIndex + 1}, ${concept}`;

    assert(questions.length === MISSION_LENGTH, `${missionName}: expected ${MISSION_LENGTH} questions, found ${questions.length}`);
    assert(new Set(questions.map(question => normalize(question.question))).size === MISSION_LENGTH, `${missionName}: repeated question text found`);

    const repeatCall = api.missionQuestionsFor(Number(grade), chapterIndex, conceptIndex);
    assert(JSON.stringify(repeatCall.map(q => q.question)) === JSON.stringify(questions.map(q => q.question)), `${missionName}: mission is not deterministic across repeated generation calls`);

    const levelCounts = { Easy: 0, Medium: 0, Hard: 0, Expert: 0 };
    for (const [questionIndex, question] of questions.entries()) {
      assert(question.question && question.correct, `${missionName}, question ${questionIndex + 1}: missing question or answer`);
      assert(Array.isArray(question.options) && question.options.length === 4, `${missionName}, question ${questionIndex + 1}: expected four choices`);
      assert(new Set(question.options.map(normalize)).size === 4, `${missionName}, question ${questionIndex + 1}: duplicate answer choices found`);
      assert(question.options.filter(option => normalize(option) === normalize(question.correct)).length === 1, `${missionName}, question ${questionIndex + 1}: correct answer must appear exactly once`);
      assert(['Easy', 'Medium', 'Hard', 'Expert'].includes(question.level), `${missionName}, question ${questionIndex + 1}: missing or invalid difficulty level`);
      levelCounts[question.level]++;
    }
    assert(Object.values(levelCounts).every(count => count === 5), `${missionName}: expected 5 questions per difficulty level, found ${JSON.stringify(levelCounts)}`);
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

    const rounding = api.missionQuestionsFor(4, 0, 1);
    assert(rounding.every(question => /^Round |^Which number rounds/.test(question.question)), 'Rounding mission contains non-rounding prompts');

    const allQuestionTexts = [];
    for (const [grade, gradeContent] of grades) {
      for (const [chapterIndex, chapter] of gradeContent.chapters.entries()) {
        for (const conceptIndex of chapter[1].keys()) {
          const questions = api.missionQuestionsFor(Number(grade), chapterIndex, conceptIndex);
          allQuestionTexts.push(...questions.map(q => `${grade}-${chapterIndex}-${conceptIndex}-${normalize(q.question)}`));
        }
      }
    }
    assert(new Set(allQuestionTexts).size === allQuestionTexts.length, 'Duplicate question text found within a single mission across the full content set');

    return { passed: results.length, results };
  };

  window.runNumberQuestUiFlowTest = async frame => {
    const document = frame.contentDocument;
    const api = frame.contentWindow.NumberQuestTestAPI;
    const clickAnswer = answer => {
      const button = [...document.querySelectorAll('[data-answer]')].find(item => normalize(item.textContent) === normalize(answer));
      assert(button, `UI flow: answer choice ${answer} was not rendered`);
      button.click();
    };
    document.querySelector('[data-chapter="0"]').click();
    document.querySelector('[data-start-concept="0"]').click();
    const mission = api.missionQuestionsFor(4, 0, 0);
    assert(document.querySelector('[data-answer]'), 'UI flow: direct answer choices were not rendered');
    clickAnswer(mission[0].correct);
    assert(document.querySelector('.cheer'), 'UI flow: correct answer did not show a celebration');
    assert([...document.querySelectorAll('[data-answer]')].every(button => button.disabled), 'UI flow: answer buttons were not locked after a correct answer');

    document.querySelector('#backToConcepts').click();
    document.querySelector('[data-start-concept="1"]').click();
    const rounding = api.missionQuestionsFor(4, 0, 1);
    for (let index = 0; index < rounding.length; index++) {
      clickAnswer(rounding[index].correct);
      if (index < rounding.length - 1) document.querySelector('#nextQuestion').click();
    }
    await new Promise(resolve => setTimeout(resolve, 750));
    assert(document.querySelector('.marks-card')?.textContent.includes('20 / 20'), 'UI flow: completed section did not show a 20 / 20 mark');
    assert(document.querySelector('#nextSection')?.textContent.includes('Add & subtract'), 'UI flow: completed section did not offer the next section');
    document.querySelector('#backToConcepts').click();
    assert(document.querySelector('[data-start-concept="1"]').textContent.includes('Completed'), 'UI flow: completed section was not marked in the concept picker');
    return 'PASS shared UI flow: direct choices, celebration, marks, next section, and completion checkmark';
  };
})();
