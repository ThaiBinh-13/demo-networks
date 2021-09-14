export const strToNumber = (input: string) =>
  Number(`${input}`.replace(/[^0-9-.]/g, ''));
