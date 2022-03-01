const opposite = require('./task/task_02');

test(
  'Проверяем противоположное значение',
  () => {
      expect(opposite(-5)).toBe(5);
  }
)
