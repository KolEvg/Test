const positiveSum = require('./task/task_01');

// test(
//   'Проверка изи',
//   () => {
//     expect(positiveSum([1,2,3,4,5])).toEqual(15);
//   } 
// );


describe("Фильтруем массив на положительные числа", 
      () => {
    const testCases = [
            {
              in: [1, 2, 3, 4, 5],
              res: 15
            },
            {
              in: [1, -2, 3, -4, 5],
              res: 9
            },
            {
              in: [-1, -2, -3, -4, -5],
              res: 0
            },
            {
              in: [],
              res: 0
            },
          ];
      testCases.forEach(test => {
          it(
            `in: ${test.in} res: ${test.res}`,
            () => {
              const result = positiveSum(test.in);
              expect(result).toEqual(test.res);
            }
          );
      });
});

