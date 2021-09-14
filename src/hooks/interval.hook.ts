import { computed, reactive, readonly } from 'vue';
import { millisecond } from '@/typings';

export const intervalMap = reactive(new Map<number, number>());

export const counterMap = reactive(new Map<number, number>());

export const createInterval = (interval: millisecond) => {
  return setInterval(() => {
    if (counterMap.has(interval)) {
      const currentValue = counterMap.get(interval);
      counterMap.set(interval, (currentValue as number) + 1);
    } else {
      counterMap.set(interval, 0);
    }
  }, interval);
};

export const usePooling = (interval: millisecond) => {
  if (!intervalMap.has(interval)) {
    const pooling = createInterval(interval);
    intervalMap.set(interval, pooling as unknown as number);
  }
  const counter = computed(() => {
    return counterMap.get(interval);
  });

  return {
    counter: readonly(counter),
  };
};
