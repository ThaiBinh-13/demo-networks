import dayjs from 'dayjs';
import { ref } from 'vue';

export const chainOffsetTime = ref(null as null | number);
export const setOffsetTime = (offset: number) => {
  chainOffsetTime.value = offset;
};

export const getCurrentTime = () =>
  dayjs().add(Number(chainOffsetTime.value), 's');
