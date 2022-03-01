const repeatStr = require('./task/task_04')

describe(
  "Проверка на повтор",
    () => {
        test('Повтор строки', ()=> {
          expect(repeatStr(3, 'B')).toBe('BBB')
          expect(repeatStr(4, '*')).toBe('****')
        });
      }
)

// describe("Проверка на повтор",
//   () => {
//     const testCases = [
//       {
//         in:(3, '*'),
//         out:('***')
//       },
//       {
//         in:(2, 'he'),
//         out:('hehe')
//       }
//     ];
//     testCases.forEach(test => {
//       it(
//       `in: ${test.in} out: ${test.out}`,
//       () => {
//         const res = repeatStr(test.in);
//         expect(res).toBe(test.out);
//       }
//       )
//     })
//   }
// )
