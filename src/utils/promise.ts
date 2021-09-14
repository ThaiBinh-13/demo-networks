export const assertFullfilled = <T>(
  item: PromiseSettledResult<T>,
): item is PromiseFulfilledResult<T> => {
  return item.status === 'fulfilled';
};
