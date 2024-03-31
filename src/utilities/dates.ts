import moment, { Moment } from 'moment';

export const formatEarnings = 'MMM DD';
export const formatDayName = 'dddd';
export const formatMockDate = 'DD MMM YYYY - h:MM A';
export const formatServer = 'YYYY-MM-DDThh:mm:ss[Z]';
export const formatShift = 'hh:mm A';
export const formatSpaced = 'D MMM YYYY';

export const startOfThisWeek = (): Moment => {
  return moment().subtract(0, 'weeks').startOf('week');
};

export const endOfThisWeek = (): Moment => {
  return moment().subtract(0, 'weeks').endOf('week');
};

export const startOfWeek = (weeksFromThisWeek: number): Moment => {
  return moment().subtract(weeksFromThisWeek, 'weeks').startOf('week');
};

export const endOfWeek = (weeksFromThisWeek: number): Moment => {
  return moment().subtract(weeksFromThisWeek, 'weeks').endOf('week');
};

export const nameOfDay = (date: Moment): string => {
  return date.format(formatDayName);
};

export const shortDate = (date: Moment): string => {
  return date.format(formatEarnings);
};

export const formatTime = (time: string) =>
  new Date(time).toLocaleTimeString('en-US', { timeStyle: 'short' });

export function secondsToMinutes(seconds: number): number {
  return Math.ceil(Math.ceil(seconds) / 60);
}