export const range = (start: number = 0, end?: number, step: number = 1, isRight: boolean = false): number[] => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  const result: number[] = [];

  if (step === 0) {
    // Если шаг равен 0, возвращаем массив, состоящий из start, повторенного end - start раз
    return Array(end - start).fill(start);
  }

  if ((end > start && step < 0) || (end < start && step > 0)) {
    // Изменение направления для избежания бесконечного цикла
    step = -step;
  }

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }

  return isRight ? result.reverse() : result;
};

export const rangeRight = (start: number, end?: number, step: number = 1): number[] => {
  return range(start, end, step, true);
};
