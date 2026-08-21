const course = {
  4: {
    summary: 'Two volumes, eight chapters, and a path built for Grade 4.',
    chapters: [
      ['Place Value & Addition', ['Place value', 'Rounding', 'Add & subtract'], 'Use a place-value chart to see what every digit is worth. When rounding, look at the digit immediately to the right of the place you are rounding to.', 'grid'],
      ['Whole-Number Multiplication', ['Arrays', 'Area models', 'Multi-digit products'], 'An array makes equal groups visible. Split a number into tens and ones, multiply each part, then put the pieces back together.', 'dots'],
      ['Whole-Number Division', ['Equal groups', 'Long division', 'Remainders'], 'Division shares an amount into equal groups. A remainder is what is left after sharing as equally as possible.', 'lines'],
      ['Equations & Word Problems', ['Multi-step plans', 'Variables', 'Factors'], 'A variable is a letter standing in for an unknown number. Use an inverse operation to uncover the missing value.', 'grid'],
      ['Measurement', ['Unit conversions', 'Time and volume', 'Area & perimeter'], 'A conversion changes the unit name but not the amount. Area fills a shape; perimeter travels around its edge.', 'lines'],
      ['Fraction Concepts', ['Equivalent fractions', 'Adding fractions', 'Subtracting fractions'], 'Equivalent fractions name the same amount. When denominators match, the fraction pieces are the same size.', 'fraction'],
      ['Fractions & Decimals', ['Fraction groups', 'Tenths & hundredths', 'Compare decimals'], 'Decimals are another way to show parts of one whole. The first place right of the decimal is tenths; the second is hundredths.', 'fraction'],
      ['Geometry', ['Lines', 'Angles', 'Symmetry'], 'Geometry describes shapes and space. Angles measure turns; a symmetry line creates matching mirror-image halves.', 'lines']
    ]
  },
  5: {
    summary: 'Two volumes, eight chapters, and a path built for Grade 5.',
    chapters: [
      ['Multiplication & Division Problems', ['Equal groups', 'Expressions', 'Factors'], 'Use multiplication for equal groups and comparisons. Parentheses tell you which part to solve first.', 'dots'],
      ['Perimeter & Area', ['Perimeter', 'Area', 'Area models'], 'Perimeter is distance around a shape. Area is the number of square units covering the inside.', 'lines'],
      ['Addition & Subtraction', ['Whole numbers', 'Decimals', 'Place value'], 'Line up digits by their place values. With decimals, the decimal points must line up.', 'grid'],
      ['Angles & Polygons', ['Angles', 'Straight lines', 'Polygons'], 'An angle measures a turn. Polygons are closed shapes made from straight line segments.', 'lines'],
      ['Fraction Addition & Subtraction', ['Equivalent fractions', 'Addition', 'Subtraction'], 'Before adding unlike fractions, rewrite them with equal-size pieces using a common denominator.', 'fraction'],
      ['Volume & Measurement', ['Volume', 'Conversions', 'Layers'], 'Volume is the number of cubic units inside a solid. A rectangular prism has equal layers of cubes.', 'grid'],
      ['Integers & Coordinates', ['Integers', 'Absolute value', 'Coordinate plane'], 'Integers include positive numbers, negative numbers, and zero. Ordered pairs move across, then up or down.', 'lines'],
      ['Advanced Operations', ['Fraction multiplication', 'Long division', 'Decimal operations'], 'Multiply fractions by whole numbers as repeated groups. Check division with multiplication and the remainder.', 'fraction']
    ]
  }
};

const seedQuestionSets = {
  4: [
    [['Round 386,749 to the nearest thousand.', '387,000', '386,000', '390,000', '380,000'], ['Find 48,376 + 25,849.', '74,225', '73,225', '74,215', '75,225'], ['Find 82,503 - 37,628.', '44,875', '45,875', '44,985', '45,985']],
    [['Use an area model: 23 × 4 = ?', '92', '72', '84', '96'], ['Find 1,426 × 3.', '4,278', '4,238', '4,168', '3,278'], ['Find 24 × 13.', '312', '272', '302', '322']],
    [['What is 864 ÷ 4?', '216', '206', '226', '196'], ['What is the remainder in 29 ÷ 6?', '5', '4', '6', '3'], ['How many vans of 6 seats are needed for 29 students?', '5', '4', '6', '29']],
    [['Solve n + 36 = 91.', '55', '127', '65', '45'], ['A shop has 6 boxes of 24 pencils and gives away 17. How many remain?', '127', '137', '117', '121'], ['Which number is prime?', '29', '21', '27', '33']],
    [['Convert 4 feet to inches.', '48', '16', '40', '400'], ['A 7 m by 4 m garden has what area?', '28 square m', '22 m', '11 square m', '56 square m'], ['Convert 3 kilograms to grams.', '3,000', '300', '30', '30,000']],
    [['Which fraction is equivalent to 1/2?', '2/4', '1/4', '3/4', '2/3'], ['What is 3/8 + 2/8?', '5/8', '5/16', '1/8', '6/8'], ['What is 7/10 - 3/10?', '4/10', '4/20', '10/10', '3/7']],
    [['What is 3 × 2/5?', '6/5', '6/10', '5/6', '2/15'], ['Write 7/10 as a decimal.', '0.7', '0.07', '7.0', '0.70'], ['Which is greater?', '0.75', '0.7', 'They are equal', 'Cannot tell']],
    [['Which has exactly one endpoint?', 'Ray', 'Line', 'Line segment', 'Parallel lines'], ['Classify a 120° angle.', 'Obtuse', 'Acute', 'Right', 'Straight'], ['How many lines of symmetry does a square have?', '4', '1', '2', '0']]
  ],
  5: [
    [['Four boxes have 7 books each. How many books?', '28', '11', '24', '35'], ['Evaluate (8 + 2) × 5.', '50', '18', '20', '40'], ['Which is a factor of 24?', '6', '5', '7', '11']],
    [['A 6 by 4 rectangle has what perimeter?', '20', '24', '10', '48'], ['A 6 by 4 rectangle has what area?', '24 square units', '20 units', '10 square units', '48 square units'], ['Area is 35 square units and width is 5. Length?', '7', '30', '40', '175']],
    [['Find 47,891 + 23,109.', '71,000', '70,000', '71,100', '70,100'], ['Find 90,000 - 31,000.', '59,000', '61,000', '69,000', '49,000'], ['Find 3.40 + 0.65.', '4.05', '3.105', '3.95', '4.50']],
    [['What type is a 45° angle?', 'Acute', 'Right', 'Obtuse', 'Straight'], ['A straight line totals how many degrees?', '180', '90', '360', '100'], ['How many sides does a hexagon have?', '6', '5', '7', '8']],
    [['Which is equivalent to 1/3?', '2/6', '2/3', '3/6', '1/6'], ['Find 1/3 + 1/6.', '1/2', '2/9', '2/6', '1/9'], ['Find 3/4 - 1/4.', '1/2', '2/4', '3/8', '1/4']],
    [['What is the volume of 4 × 3 × 2 prism?', '24 cubic units', '9 square units', '12 units', '24 square units'], ['Convert 3 feet to inches.', '36', '9', '30', '300'], ['12 cubes per layer × 3 layers = ?', '36 cubic units', '15 cubic units', '9 cubic units', '24 cubic units']],
    [['What is |-5|?', '5', '-5', '0', '10'], ['Which quadrant contains (3, -2)?', 'IV', 'I', 'II', 'III'], ['What is the x-coordinate in (3, -2)?', '3', '-2', '1', '5']],
    [['Find 3/4 × 4.', '3', '3/16', '7/4', '1'], ['Find 864 ÷ 7.', '123 R 3', '124 R 2', '123 R 1', '122 R 4'], ['Find 2.4 ÷ 0.3.', '8', '0.8', '80', '0.08']]
  ]
};

function strategyQuestion(concept, chapterName, number) {
  const prompts = [
    [`Which idea is most useful for a ${concept.toLowerCase()} challenge in ${chapterName}?`, 'Use the model and match each number to its place or part.', 'Guess before reading the question.', 'Change every number to zero.', 'Use a different operation without checking.'],
    [`Before solving a ${concept.toLowerCase()} problem, what should you do first?`, 'Read what the problem is asking and identify the important numbers.', 'Choose the longest answer.', 'Skip the model.', 'Start with the final answer.'],
    [`Which habit helps you check work on ${concept.toLowerCase()}?`, 'Use an estimate or a related operation to see whether the answer makes sense.', 'Always pick the largest number.', 'Erase the equation.', 'Ignore units and labels.'],
    [`A classmate is stuck on ${concept.toLowerCase()}. What is the best next step?`, 'Draw or use the chapter model to organize the math idea.', 'Give up after one try.', 'Pick an answer at random.', 'Write a new unrelated question.'],
    [`Which statement about ${concept.toLowerCase()} is true?`, 'A clear model can show how the numbers and operations are connected.', 'The answer never needs checking.', 'All problems use the same operation.', 'Units are never important.'],
    [`What should a strong math explanation include for ${concept.toLowerCase()}?`, 'The operation or model used and why it gives the answer.', 'Only the answer with no work.', 'A different topic.', 'A list of random numbers.'],
    [`After you solve a ${concept.toLowerCase()} problem, what is a smart final check?`, 'Ask whether the result is reasonable for the situation.', 'Make the answer much larger.', 'Delete the units.', 'Never look at the question again.']
  ];
  const item = prompts[number];
  item.concept = number % 3;
  return item;
}

const seedConceptMaps = {
  4: [[1, 2, 2], [0, 1, 2], [0, 1, 2], [1, 0, 2], [0, 2, 1], [0, 1, 2], [0, 1, 2], [0, 1, 2]],
  5: [[0, 1, 2], [0, 1, 1], [0, 0, 1], [0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 1, 1], [0, 1, 2]]
};

function expandQuestionSets(seeds) {
  const expanded = {};
  for (const [grade, chapters] of Object.entries(seeds)) {
    expanded[grade] = chapters.map((questions, chapterIndex) => {
      const chapter = course[grade].chapters[chapterIndex];
      const calculationQuestions = questions.map((question, index) => {
        const copy = [...question];
        copy.concept = seedConceptMaps[grade][chapterIndex][index];
        return copy;
      });
      const strategyQuestions = Array.from({ length: 7 }, (_, index) => strategyQuestion(chapter[1][index % 3], chapter[0], index));
      return [...calculationQuestions, ...strategyQuestions];
    });
  }
  return expanded;
}

const questionSets = expandQuestionSets(seedQuestionSets);

let state = { grade: 4, chapter: null, concept: 0, question: 0, attempts: 0, sparks: Number(localStorage.getItem('numberQuestSparks') || 0), started: JSON.parse(localStorage.getItem('numberQuestStarted') || '[]') };
const $ = selector => document.querySelector(selector);
function save() { localStorage.setItem('numberQuestSparks', state.sparks); localStorage.setItem('numberQuestStarted', JSON.stringify(state.started)); }
function currentChapter() { return course[state.grade].chapters[state.chapter]; }
function currentQuestion() { return questionSets[state.grade][state.chapter][state.question]; }
function renderChapters() {
  const chapters = course[state.grade].chapters;
  $('#gradeSummary').textContent = course[state.grade].summary;
  $('#chapterGrid').innerHTML = chapters.map((chapter, index) => `<button class="chapter-card ${state.started.includes(`${state.grade}-${index}`) ? 'started' : ''}" data-chapter="${index}"><span class="chapter-number">${index + 1}</span><h3>${chapter[0]}</h3><p>${chapter[1].join(' · ')}</p></button>`).join('');
  $('#chapterProgress').textContent = `${state.started.filter(item => item.startsWith(`${state.grade}-`)).length} of 8 chapters started`;
  document.querySelectorAll('[data-chapter]').forEach(button => button.addEventListener('click', () => startChapter(Number(button.dataset.chapter))));
}
function visualMarkup(type) {
  if (type === 'fraction') return '<div class="mini-visual"><div class="fraction-bar"><i></i><i></i><i></i><i></i></div><span class="visual-label">equal-size parts</span></div>';
  if (type === 'dots') return '<div class="mini-visual"><div class="dots">' + '<i></i>'.repeat(12) + '</div><span class="visual-label">equal groups</span></div>';
  if (type === 'lines') return '<div class="mini-visual"><div class="line-visual"></div><span class="visual-label">shape and space</span></div>';
  return '<div class="mini-visual"><div class="grid-visual">' + '<i></i>'.repeat(20) + '</div><span class="visual-label">place-value pattern</span></div>';
}
function lessonForConcept(concept, chapterLesson) {
  const lessons = {
    'Place value': 'Each digit has a value based on its position. Build or read a place-value chart before you calculate.',
    'Rounding': 'Find the place you are rounding to, then look one place to the right. Digits 5 or more round up; digits 4 or less stay down.',
    'Add & subtract': 'Line up digits by place value. Add or subtract one column at a time, regrouping when a column needs more or fewer units.',
    'Arrays': 'Arrays show equal groups in rows and columns. Count by rows, columns, or use multiplication to find the total.',
    'Long division': 'Repeat the same cycle: divide, multiply, subtract, and bring down. Keep each quotient digit above the correct place.',
    'Remainders': 'A remainder is what cannot be shared equally. Read the story to decide whether to keep it, round up, or use it another way.',
    'Variables': 'A variable stands for an unknown number. Use an inverse operation to undo what is happening to the variable.',
    'Equivalent fractions': 'Equivalent fractions name the same amount. Multiply or divide the numerator and denominator by the same number.',
    'Adding fractions': 'When denominators match, the pieces are the same size. Add the numerators and keep the denominator.',
    'Subtracting fractions': 'When denominators match, subtract the numerators and keep the denominator. Simplify the answer when possible.',
    'Tenths & hundredths': 'A decimal is another name for part of a whole. The first place after the decimal is tenths; the second is hundredths.',
    'Angles': 'An angle measures a turn. Compare its opening with a right angle to decide whether it is acute, right, or obtuse.',
    'Volume': 'Volume counts cubic units inside a solid. Multiply the number of units in one layer by the number of equal layers.'
  };
  return lessons[concept] || `<strong>${concept}:</strong> ${chapterLesson}`;
}
function startChapter(index) { state.chapter = index; state.concept = 0; state.question = 0; state.attempts = 0; const key = `${state.grade}-${index}`; if (!state.started.includes(key)) state.started.push(key); save(); $('#emptyState').hidden = true; $('#lessonView').hidden = false; renderLesson(); renderChapters(); $('#playground').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function renderLesson() {
  const chapter = currentChapter(), question = currentQuestion();
  const concept = chapter[1][question.concept];
  $('#lessonView').innerHTML = `<div class="lesson-layout"><section class="lesson-panel"><p class="chapter-label">Chapter ${state.chapter + 1} · ${chapter[0]}</p><h2>${concept}</h2><div class="concept-tabs">${chapter[1].map((item, index) => `<button class="concept-tab ${question.concept === index ? 'active' : ''}" data-concept="${index}">${index + 1}. ${item}</button>`).join('')}</div><p class="lesson-copy">${lessonForConcept(concept, chapter[2])}</p>${visualMarkup(chapter[3])}<p class="lesson-copy"><strong>Mission tip:</strong> Read the model first. Then solve the challenge using the same big idea.</p></section><section class="question-panel"><div class="question-meta"><span>Challenge ${state.question + 1} of ${questionSets[state.grade][state.chapter].length}</span><span class="attempt-dots">${[0, 1, 2].map(index => `<i class="${index < state.attempts ? 'used' : ''}"></i>`).join('')}</span></div><h2>${question[0]}</h2><div class="answer-list">${question.slice(1).sort(() => Math.random() - .5).map(answer => `<button class="answer-button" data-answer="${answer}">${answer}</button>`).join('')}</div><p class="feedback" id="feedback">Choose the answer that makes the math story true.</p></section></div>`;
  document.querySelectorAll('[data-concept]').forEach(button => button.addEventListener('click', () => { state.question = questionSets[state.grade][state.chapter].findIndex(item => item.concept === Number(button.dataset.concept)); state.attempts = 0; renderLesson(); }));
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => checkAnswer(button, question)));
}
function checkAnswer(button, question) {
  const right = question[1];
  if (button.dataset.answer === right) {
    button.classList.add('correct'); state.sparks += 1; save(); $('#sparkCount').textContent = `${state.sparks} sparks`;
    $('#feedback').innerHTML = '<strong>Great thinking.</strong> You earned a spark!';
    setTimeout(nextQuestion, 650); return;
  }
  button.classList.add('wrong'); state.attempts += 1;
  if (state.attempts < 3) { $('#reteachModal').hidden = false; $('#reteachContent').innerHTML = `<p>${currentChapter()[2]}</p>${visualMarkup(currentChapter()[3])}<p><strong>Try a fresh approach:</strong> Identify what the question is asking, then use the matching model.</p>`; }
  else { document.querySelectorAll('[data-answer]').forEach(answer => answer.disabled = true); $('#feedback').innerHTML = `<strong>The answer is ${right}.</strong><div class="solution-box">${explain(question)}</div><button class="primary-button" id="continueButton">Continue to the next challenge</button>`; $('#continueButton').addEventListener('click', nextQuestion); }
}
function explain(question) { return `Read the question carefully and use the chapter concept: ${currentChapter()[2]} The value that satisfies this challenge is <strong>${question[1]}</strong>.`; }
function nextQuestion() { state.attempts = 0; if (state.question < questionSets[state.grade][state.chapter].length - 1) state.question += 1; else { $('#lessonView').innerHTML = `<div class="lesson-panel success-card"><div class="success-token">★</div><p class="eyebrow">Chapter complete</p><h2>You cleared this mission.</h2><p class="lesson-copy">You practiced all three concepts in ${currentChapter()[0]}. Choose another chapter from the map to keep growing your skills.</p></div>`; return; } renderLesson(); }
document.querySelectorAll('.grade-button').forEach(button => button.addEventListener('click', () => { state.grade = Number(button.dataset.grade); state.chapter = null; $('#emptyState').hidden = false; $('#lessonView').hidden = true; document.querySelectorAll('.grade-button').forEach(item => item.classList.toggle('active', item === button)); renderChapters(); }));
$('#tryAgain').addEventListener('click', () => { $('#reteachModal').hidden = true; renderLesson(); });
$('#resetProgress').addEventListener('click', () => { state.sparks = 0; state.started = []; save(); $('#sparkCount').textContent = '0 sparks'; renderChapters(); });
$('#sparkCount').textContent = `${state.sparks} sparks`; renderChapters();