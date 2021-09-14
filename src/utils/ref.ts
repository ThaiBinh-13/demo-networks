import { Ref } from 'vue';

export const refExist = <T = unknown>(refVal: Ref<T> | undefined) =>
  refVal && refVal.value;

export const val = <T = unknown>(refVal: Ref<T> | undefined) => {
  if (!refExist(refVal)) throw new Error('Ref does not have value or exist');
  return (refVal as Ref<T>).value;
};
