const removeChar = require('./task/task_03');

// describe("Проверка на длину",
//   () => {
//     const testCases = [
//       {
//         string: 'hello',
//         expected: 'ell'
//       },
//       {
//         string: 'mama myla ramu',
//         expected: 'ama myla ram'
//       },
//       {
//         string: 'derevolaz',
//         expected: 'erevola'
//       },
//       {
//         string: 'Richard Phillips Feynman',
//         expected: 'ichard Phillips Feynma'
//       },
//       {
//         string: 'ssstarrrr',
//         expected: 'sstarrr'
//       }
//     ];
//     testCases.forEach(test => {
//       () => {
//         it(
//           `Входящая строка: ${test.string} итоговая строка: ${test.expected}`,
//           () => {
//             const result = removeChar(test.string); 
//             expect(result).toBe(test.expected);
//           }
//         );
//       }
//     });
//   }
// );


test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('hello world')).toBe('ello worl');
  }
);
test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('Richard Phillips Feynman')).toBe('ichard Phillips Feynma');
  }
);
test(
  'Проверям слайс строки',
  () => {
    expect(removeChar('ssstarrRr')).toBe('sstarrR');
  }
);
