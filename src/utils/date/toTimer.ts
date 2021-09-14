import durationPlg from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import type { millisecond, second } from '@/typings';

dayjs.extend(durationPlg);
dayjs.extend(relativeTime);

export const toTimer = (duration: millisecond) =>
  dayjs.duration(duration).format('DD:HH:mm:ss');

export const humanizeDuration = (duration: second) =>
  dayjs.duration(duration, 's').humanize();
