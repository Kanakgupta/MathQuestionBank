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

const legacyQuestionSets = {
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

const questionSets = expandQuestionSets(legacyQuestionSets);
const placeValueQuestions = [
  ['In 582,641, what is the value of the 8?', '80,000', '8,000', '800,000', '800'],
  ['Which number has 7 in the ten-thousands place?', '472,315', '427,315', '427,135', '42,731'],
  ['Write “six hundred three thousand, nineteen” in standard form.', '603,019', '630,019', '603,190', '6,030,019'],
  ['What digit is in the hundreds place in 945,382?', '3', '8', '5', '2'],
  ['Which expanded form equals 408,207?', '400,000 + 8,000 + 200 + 7', '400,000 + 80,000 + 200 + 7', '40,000 + 8,000 + 200 + 7', '400,000 + 8,000 + 20 + 7'],
  ['Which number is greatest?', '561,902', '561,290', '516,902', '561,092'],
  ['In 731,458, the 1 has what value?', '1,000', '100', '10,000', '1'],
  ['What number is 9 hundred-thousands, 2 thousands, and 6 ones?', '902,006', '920,006', '902,060', '900,206'],
  ['Which comparison is true?', '498,201 > 489,999', '498,201 < 489,999', '498,201 = 489,999', '498,201 > 498,210'],
  ['A digit moves from the thousands place to the ten-thousands place. Its value becomes how many times greater?', '10 times', '2 times', '100 times', '1/10 as great']
];

let state = { grade: 4, chapter: null, concept: null, question: 0, attempts: 0, answers: {}, sparks: Number(localStorage.getItem('numberQuestSparks') || 0), started: JSON.parse(localStorage.getItem('numberQuestStarted') || '[]'), trophies: JSON.parse(localStorage.getItem('numberQuestTrophies') || '[]') };
const $ = selector => document.querySelector(selector);
function save() { localStorage.setItem('numberQuestSparks', state.sparks); localStorage.setItem('numberQuestStarted', JSON.stringify(state.started)); localStorage.setItem('numberQuestTrophies', JSON.stringify(state.trophies)); }
function currentChapter() { return course[state.grade].chapters[state.chapter]; }
function missionKey() { return `${state.grade}-${state.chapter}-${state.concept}`; }
function genericQuestions() { const items = questionSets[state.grade][state.chapter].filter(item => item.concept === state.concept); const base = items.length ? items : questionSets[state.grade][state.chapter]; return Array.from({ length: 10 }, (_, index) => { const item = base[index % base.length]; return { question: item[0], correct: item[1], options: item.slice(1), id: index }; }); }
function currentQuestions() { return state.grade === 4 && state.chapter === 0 && state.concept === 0 ? placeValueQuestions.map(item => ({ question:item[0], correct:item[1], options:item.slice(1), id:item.id })) : genericQuestions(); }
function currentQuestion() { return currentQuestions()[state.question]; }
function renderChapters() {
  const chapters = course[state.grade].chapters;
  $('#gradeSummary').textContent = 'Choose a chapter, then choose one concept to master.';
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
const conceptLessons = {
  'Place value': ['A digit’s place tells its value. In 582,641, the 8 is in the ten-thousands place, so it means 80,000, not 8.', 'Example: moving a 6 from the hundreds place to the thousands place changes its value from 600 to 6,000.', 'Remember: each step left is 10 times greater; each step right is 10 times smaller.', 'grid'],
  'Rounding': ['Rounding gives a nearby, friendly number for estimating. Find the place you are rounding to, then inspect the digit immediately to its right.', 'Example: 386,749 rounded to the nearest thousand is 387,000 because the hundreds digit is 7.', 'Remember: 5 or more rounds up; 4 or less stays down.', 'grid'],
  'Add & subtract': ['Line up digits by place value so ones are under ones, tens under tens, and so on. Regroup when a column needs more or fewer units.', 'Example: in 4,786 + 2,549, 6 + 9 makes 15 ones. Write 5 ones and regroup 1 ten.', 'Remember: check subtraction by adding the difference and the number taken away.', 'grid'],
  'Arrays': ['An array organizes equal groups into rows and columns. It shows why multiplication is a fast way to count equal groups.', 'Example: 3 rows of 4 dots is 3 x 4 = 12 dots.', 'Remember: rows x columns and columns x rows give the same total.', 'dots'],
  'Area models': ['An area model splits a harder multiplication into smaller rectangles. Break a factor into tens and ones, solve each part, then add.', 'Example: 23 x 4 = (20 x 4) + (3 x 4) = 80 + 12 = 92.', 'Remember: include every partial product before adding.', 'dots'],
  'Multi-digit products': ['For multi-digit multiplication, each digit represents a place value. Multiply one place at a time and regroup when needed.', 'Example: 1,426 x 3 is 4,278. Estimate first: 1,400 x 3 is about 4,200, so the answer is reasonable.', 'Remember: a digit in the tens place represents tens, not ones.', 'dots'],
  'Equal groups': ['Division shares a total into equal groups. The dividend is what is shared, the divisor tells the number of groups, and the quotient tells the amount in each group.', 'Example: 84 divided by 6 = 14 means 84 objects make 6 equal groups of 14.', 'Remember: check with divisor x quotient = dividend.', 'dots'],
  'Long division': ['Long division works one place at a time: divide, multiply, subtract, then bring down the next digit.', 'Example: for 864 divided by 4, divide 8 hundreds, then 6 tens, then 4 ones to get 216.', 'Remember: place every quotient digit directly above the digit you divided.', 'lines'],
  'Remainders': ['A remainder is what is left after making equal groups. The context tells you whether to keep it, round up, or ignore it.', 'Example: 29 students in vans of 6 need 5 vans: 29 divided by 6 is 4 remainder 5, and the five students still need a van.', 'Remember: a remainder must always be smaller than the divisor.', 'lines'],
  'Multi-step plans': ['Multi-step problems need more than one operation. Identify what happens first, solve it, and use that answer in the next step.', 'Example: 6 boxes with 24 pencils each, then 17 given away: multiply 6 x 24, then subtract 17.', 'Remember: write a short equation for each step and label the final answer.', 'grid'],
  'Variables': ['A variable is a letter that stands for an unknown number. An equation says the two sides have the same value.', 'Example: n + 36 = 91. Subtract 36 from both sides, so n = 55.', 'Remember: use the inverse operation to undo what happened to the variable.', 'grid'],
  'Factors': ['Factors are whole numbers that multiply to make a product. Multiples are the products made when you multiply a number by whole numbers.', 'Example: factor pairs of 24 include 1 x 24, 2 x 12, 3 x 8, and 4 x 6.', 'Remember: a prime number has exactly two factors; 1 is neither prime nor composite.', 'grid'],
  'Unit conversions': ['A conversion changes the unit name without changing the amount. Start by writing the fact that connects the units.', 'Example: 4 feet x 12 inches per foot = 48 inches.', 'Remember: changing from a larger unit to a smaller unit makes the number larger.', 'lines'],
  'Time and volume': ['Measurement facts connect time, capacity, mass, and length. Choose the conversion that matches the unit in the question.', 'Example: 3 kilograms equals 3,000 grams because each kilogram has 1,000 grams.', 'Remember: write units beside every number so you know what is being counted.', 'lines'],
  'Area & perimeter': ['Perimeter measures the distance around a shape. Area measures the square units covering the inside.', 'Example: a 7 m by 4 m rectangle has perimeter 7 + 4 + 7 + 4 = 22 m and area 7 x 4 = 28 square m.', 'Remember: perimeter uses regular units; area uses square units.', 'lines'],
  'Equivalent fractions': ['Equivalent fractions name the same amount, even though their numbers look different. Multiply or divide the top and bottom by the same number.', 'Example: 1/2 = 2/4 because both numerator and denominator were multiplied by 2.', 'Remember: whatever happens to the numerator must also happen to the denominator.', 'fraction'],
  'Adding fractions': ['Fractions can be added when the denominators match because the pieces are the same size. Add only the numerators.', 'Example: 3/8 + 2/8 = 5/8.', 'Remember: keep the denominator; it tells the size of each piece.', 'fraction'],
  'Subtracting fractions': ['Fractions with matching denominators can be subtracted by taking away the numerators.', 'Example: 7/10 - 3/10 = 4/10, which simplifies to 2/5.', 'Remember: simplify the final fraction when top and bottom share a factor.', 'fraction'],
  'Fraction groups': ['Multiplying a whole number by a fraction means taking repeated groups of that fraction.', 'Example: 3 x 2/5 = 6/5 = 1 1/5.', 'Remember: multiply the whole number by the numerator, then simplify or make a mixed number.', 'fraction'],
  'Tenths & hundredths': ['Decimals are another way to name parts of one whole. The first place after the decimal is tenths, and the second is hundredths.', 'Example: 0.7 means 7/10, while 0.35 means 35/100.', 'Remember: add zeros when comparing, so 0.7 can be written as 0.70.', 'grid'],
  'Compare decimals': ['Compare decimals from left to right, just as you compare whole numbers. Make both numbers have the same number of decimal places first.', 'Example: 0.75 is greater than 0.70 because 75 hundredths is greater than 70 hundredths.', 'Remember: a zero added to the right of a decimal does not change its value.', 'grid'],
  'Lines': ['A line continues forever in both directions, a segment has two endpoints, and a ray begins at one endpoint and continues forever in one direction.', 'Example: railroad tracks are parallel because they never meet; a corner of paper shows perpendicular lines because they meet at a right angle.', 'Remember: look for endpoints and arrowheads to name the figure.', 'lines'],
  'Angles': ['An angle measures a turn between two rays. Its size depends on the opening, not on how long the rays are.', 'Example: 45 degrees is acute, 90 degrees is right, and 120 degrees is obtuse.', 'Remember: compare the opening with a square corner to recognize a right angle.', 'lines'],
  'Symmetry': ['A line of symmetry splits a shape into two matching mirror-image halves. Folding on that line would make the halves match exactly.', 'Example: a square has four lines of symmetry, while a scalene triangle has none.', 'Remember: both sides of a symmetry line must match in size and shape.', 'lines'],
  'Equal groups': ['Equal groups show multiplication or division clearly. Count how many groups there are and how many items are in each.', 'Example: 4 groups of 7 makes 4 x 7 = 28.', 'Remember: multiplication combines equal groups; division shares into equal groups.', 'dots'],
  'Expressions': ['An expression is a math phrase without an equals sign. Parentheses tell you to calculate the inside part first.', 'Example: (8 + 2) x 5 = 10 x 5 = 50.', 'Remember: solve inside parentheses before multiplying or dividing.', 'grid'],
  'Perimeter': ['Perimeter is the distance around the outside edge of a shape. Add all of its side lengths.', 'Example: a 6 by 4 rectangle has perimeter 6 + 4 + 6 + 4 = 20 units.', 'Remember: walk around the shape once and count every side.', 'lines'],
  'Area': ['Area is the flat space inside a shape, measured in square units. A rectangle’s area is length x width.', 'Example: a 6 by 4 rectangle covers 24 square units.', 'Remember: area tiles cover the inside; perimeter traces the outside.', 'lines'],
  'Whole numbers': ['Whole-number addition and subtraction use place value. Arrange numbers vertically and keep each column lined up.', 'Example: 47,891 + 23,109 = 71,000 because the ones, tens, hundreds, and thousands are added in matching columns.', 'Remember: regroup carefully and estimate to check your answer.', 'grid'],
  'Decimals': ['For decimal operations, line up decimal points first so tenths meet tenths and hundredths meet hundredths.', 'Example: 3.40 + 0.65 = 4.05.', 'Remember: zero is a useful placeholder, but never move the decimal point.', 'grid'],
  'Straight lines': ['A straight angle makes a half-turn and measures 180 degrees. Two angles beside each other on a straight line must add to 180.', 'Example: if one angle is 70 degrees, the other is 110 degrees.', 'Remember: check that the pair totals exactly 180 degrees.', 'lines'],
  'Polygons': ['A polygon is a closed, flat shape made only from straight line segments. Its name often tells how many sides it has.', 'Example: a hexagon has 6 sides and 6 vertices.', 'Remember: curved sides or an open gap mean the shape is not a polygon.', 'lines'],
  'Addition': ['To add fractions, rewrite them with a common denominator so all pieces are the same size.', 'Example: 1/3 + 1/6 becomes 2/6 + 1/6 = 3/6 = 1/2.', 'Remember: add numerators only after the denominators match.', 'fraction'],
  'Subtraction': ['To subtract fractions with unlike denominators, rename them using a common denominator first.', 'Example: 3/4 - 1/4 = 2/4 = 1/2.', 'Remember: subtract numerators only when the pieces are the same size.', 'fraction'],
  'Volume': ['Volume counts the cubic units filling a solid box. A rectangular prism has length, width, and height.', 'Example: 4 x 3 x 2 = 24 cubic units.', 'Remember: volume uses three measurements and cubic units.', 'grid'],
  'Conversions': ['Measurement conversions use known unit relationships. Decide whether you are changing to a bigger or smaller unit.', 'Example: 3 feet = 36 inches because 3 x 12 = 36.', 'Remember: use a conversion fact before calculating.', 'lines'],
  'Layers': ['A rectangular prism is built from equal layers of unit cubes. Find the cubes in one layer, then multiply by the number of layers.', 'Example: 12 cubes in each layer x 3 layers = 36 cubic units.', 'Remember: each layer must contain the same number of cubes.', 'grid'],
  'Integers': ['Integers include positive numbers, negative numbers, and zero. A number line shows their order.', 'Example: -3 is three steps left of zero, while 4 is four steps right of zero.', 'Remember: numbers farther right are greater.', 'lines'],
  'Absolute value': ['Absolute value is a number’s distance from zero, so it is never negative.', 'Example: |-5| = 5 because -5 is five steps away from zero.', 'Remember: the bars mean distance, not a negative sign.', 'lines'],
  'Coordinate plane': ['A coordinate plane uses a horizontal x-axis and vertical y-axis. Read an ordered pair x first, then y.', 'Example: to plot (3, -2), move 3 right and then 2 down.', 'Remember: begin every point at the origin, (0, 0).', 'lines'],
  'Fraction multiplication': ['Multiplying a fraction by a whole number is repeated groups of that fraction.', 'Example: 3/4 x 4 = 12/4 = 3.', 'Remember: simplify after multiplying and change improper fractions to mixed numbers when helpful.', 'fraction'],
  'Decimal operations': ['Decimal multiplication and division use place value. Estimate first, then place the decimal so the result makes sense.', 'Example: 2.4 divided by 0.3 = 8 because 24 tenths divided by 3 tenths equals 8.', 'Remember: an estimate catches a misplaced decimal point.', 'grid']
};
function lessonForConcept(concept, chapterLesson) { const lesson = conceptLessons[concept]; return lesson ? `<p class="lesson-copy"><strong>What it means:</strong> ${lesson[0]}</p><p class="lesson-copy"><strong>${lesson[1]}</strong></p><p class="lesson-copy"><strong>Remember:</strong> ${lesson[2].replace(/^Remember:\s*/, '')}</p>` : `<p class="lesson-copy"><strong>${concept}:</strong> ${chapterLesson}</p>`; }
function visualForConcept(concept, fallback) { return conceptLessons[concept]?.[3] || fallback; }
function startChapter(index) { state.chapter = index; state.concept = null; state.question = 0; state.attempts = 0; $('#emptyState').hidden = true; $('#lessonView').hidden = false; renderConceptPicker(); $('#playground').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function renderConceptPicker() { const chapter = currentChapter(); $('#lessonView').innerHTML = `<section class="lesson-panel concept-picker"><p class="chapter-label">Chapter ${state.chapter + 1}</p><h2>${chapter[0]}</h2><p class="lesson-copy">Pick one skill. Every skill mission has 10 questions and earns its own trophy.</p><div class="concept-choice-grid">${chapter[1].map((concept,index) => `<button class="concept-choice" data-start-concept="${index}"><span>${index + 1}</span><strong>${concept}</strong><small>10-question mission</small></button>`).join('')}</div></section>`; document.querySelectorAll('[data-start-concept]').forEach(button => button.addEventListener('click', () => { state.concept=Number(button.dataset.startConcept); state.question=0; state.attempts=0; state.answers={}; renderLesson(); })); }
function placeValueVisual() { return `<div class="place-chart"><div class="chart-number">582,641</div><div class="chart-row"><b>Hundred-thousands</b><b>Ten-thousands</b><b>Thousands</b><b>Hundreds</b><b>Tens</b><b>Ones</b></div><div class="chart-row chart-values"><span>5<br><small>500,000</small></span><span class="focus">8<br><small>80,000</small></span><span>2<br><small>2,000</small></span><span>6<br><small>600</small></span><span>4<br><small>40</small></span><span>1<br><small>1</small></span></div></div>`; }
function renderLesson() {
  const chapter = currentChapter(), question = currentQuestion(), concept = chapter[1][state.concept], complete = state.answers[state.question];
  const lesson = state.grade === 4 && state.chapter === 0 && state.concept === 0 ? '<p class="lesson-copy"><strong>Place value tells us what a digit is worth because of where it sits.</strong> The digit 8 in 582,641 is not worth eight. It is in the ten-thousands place, so it is worth 80,000. Each step left is 10 times greater; each step right is 10 times smaller.</p>' + placeValueVisual() + '<p class="lesson-copy"><strong>Read it in chunks:</strong> 582,641 is five hundred eighty-two thousand, six hundred forty-one. Use the chart to name a digit, write a number, compare numbers, or build expanded form.</p>' : `${lessonForConcept(concept, chapter[2])}${visualMarkup(visualForConcept(concept, chapter[3]))}`;
  $('#lessonView').innerHTML = `<div class="lesson-layout"><section class="lesson-panel"><p class="chapter-label">Chapter ${state.chapter + 1} · Concept mission</p><h2>${concept}</h2>${lesson}<p class="lesson-copy"><strong>Mission tip:</strong> Use the model, then explain to yourself why the answer makes sense.</p></section><section class="question-panel"><div class="question-meta"><span>Question ${state.question + 1} of 10</span><span class="attempt-dots">${[0, 1, 2].map(index => `<i class="${index < state.attempts ? 'used' : ''}"></i>`).join('')}</span></div><div class="question-nav">${currentQuestions().map((_,index) => `<button data-go="${index}" class="nav-dot ${index===state.question?'active':''} ${state.answers[index]?'done':''}" title="Question ${index + 1}">${index + 1}</button>`).join('')}</div><h2>${question.question}</h2><div class="answer-list">${question.options.sort(() => Math.random() - .5).map(answer => `<button class="answer-button" data-answer="${answer}" ${complete?'disabled':''}>${answer}</button>`).join('')}</div><p class="feedback" id="feedback">${complete ? 'Completed! Nice persistence. Use the arrows or number buttons to visit another question.' : 'Choose the answer that makes the math story true.'}</p><div class="question-arrows"><button class="icon-button" id="previousQuestion" ${state.question===0?'disabled':''} title="Previous question">←</button><button class="icon-button" id="nextQuestion" ${state.question===9?'disabled':''} title="Next question">→</button></div></section></div>`;
  document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => { state.question=Number(button.dataset.go); state.attempts=0; renderLesson(); }));
  $('#previousQuestion').addEventListener('click', () => { state.question--; state.attempts=0; renderLesson(); }); $('#nextQuestion').addEventListener('click', () => { state.question++; state.attempts=0; renderLesson(); });
  document.querySelectorAll('[data-answer]').forEach(button => button.addEventListener('click', () => checkAnswer(button, question)));
}
function checkAnswer(button, question) {
  const right = question.correct;
  if (button.dataset.answer === right) {
    button.classList.add('correct'); document.querySelectorAll('[data-answer]').forEach(answer => answer.disabled = true); state.sparks += 1; state.answers[state.question]=true; save(); $('#sparkCount').textContent = `${state.sparks} sparks`; $('#feedback').innerHTML = '<strong>Completed!</strong> Your brain just grew a little stronger.'; if (Object.keys(state.answers).length === 10) setTimeout(showResults, 700); return;
  }
  button.classList.add('wrong'); state.attempts += 1;
  if (state.attempts < 3) { $('#reteachModal').hidden = false; $('#reteachContent').innerHTML = `<p>${currentChapter()[2]}</p>${visualMarkup(currentChapter()[3])}<p><strong>Try a fresh approach:</strong> Identify what the question is asking, then use the matching model.</p>`; }
  else { document.querySelectorAll('[data-answer]').forEach(answer => answer.disabled = true); $('#feedback').innerHTML = `<strong>The answer is ${right}.</strong><div class="solution-box">${explain(question)}</div><button class="primary-button" id="continueButton">Continue to the next challenge</button>`; $('#continueButton').addEventListener('click', nextQuestion); }
}
function explain(question) { return `Use the concept model step by step. The answer that fits the question is <strong>${question.correct}</strong>.`; }
function showResults() { const misses = Math.max(0, 10 - state.sparks % 10); const tier = misses <= 1 ? ['Diamond','◆','Outstanding precision. You are ready for a tougher mission.'] : misses <= 4 ? ['Gold','★','Excellent work. Your practice is paying off.'] : misses <= 7 ? ['Silver','●','Strong persistence. Keep building this skill.'] : ['Bronze','▲','You stayed with it. Practice turns effort into power.']; state.trophies.push({ tier:tier[0], symbol:tier[1], concept:currentChapter()[1][state.concept] }); save(); $('#lessonView').innerHTML=`<section class="lesson-panel success-card"><div class="trophy ${tier[0].toLowerCase()}">${tier[1]}</div><p class="eyebrow">Mission complete</p><h2>${tier[0]} trophy earned</h2><p class="lesson-copy">${tier[2]}</p><p class="lesson-copy">You completed all 10 <strong>${currentChapter()[1][state.concept]}</strong> questions. Visit your trophy cabinet to see your growing collection.</p><button class="primary-button" id="backToConcepts">Choose another concept</button></section>`; $('#backToConcepts').addEventListener('click',renderConceptPicker); }
function renderRewards() { const counts = ['Diamond','Gold','Silver','Bronze'].map(tier => [tier, state.trophies.filter(item => item.tier === tier).length]); $('#rewardsContent').innerHTML = `<div class="reward-totals">${counts.map(([tier,count]) => `<div class="reward-total ${tier.toLowerCase()}"><b>${tier}</b><strong>${count}</strong></div>`).join('')}</div>${state.trophies.length ? `<div class="trophy-list">${state.trophies.slice().reverse().map(item => `<div class="trophy-item ${item.tier.toLowerCase()}"><span>${item.symbol}</span><div><b>${item.tier} trophy</b><small>${item.concept}</small></div></div>`).join('')}</div>` : '<p class="lesson-copy">Your cabinet is waiting. Complete a 10-question concept mission to earn your first trophy.</p>'}`; }
document.querySelectorAll('.grade-button').forEach(button => button.addEventListener('click', () => { state.grade = Number(button.dataset.grade); state.chapter = null; state.concept = null; $('#emptyState').hidden = false; $('#lessonView').hidden = true; document.querySelectorAll('.grade-button').forEach(item => item.classList.toggle('active', item === button)); renderChapters(); }));
$('#tryAgain').addEventListener('click', () => { $('#reteachModal').hidden = true; renderLesson(); });
$('#openRewards').addEventListener('click', () => { renderRewards(); $('#rewardsModal').hidden = false; });
$('#closeRewards').addEventListener('click', () => { $('#rewardsModal').hidden = true; });
$('#resetProgress').addEventListener('click', () => { state.sparks = 0; state.started = []; state.trophies = []; save(); $('#sparkCount').textContent = '0 sparks'; renderChapters(); });
$('#sparkCount').textContent = `${state.sparks} sparks`; renderChapters();