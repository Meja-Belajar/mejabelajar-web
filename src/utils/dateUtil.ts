/**
 * @class DateUtil
 * @description Date utility class for date validation, date difference, date comparison, and date conversion.
 * @extends Date
 * @exports isPast
 * @exports isAgeValid
 * @exports getMinutesDifference
 * @exports getDifference
 * @exports toLocalString
 * @exports toBOD
 * @exports compareDate
 * @exports getToday
 * @exports getCurrentDay
 * @exports getCurrentMonth
 * @exports getCurrentYear
 * @exports fromISO
 * @exports toISODate
 * @exports fromUniversalDate
 * @exports toUniversalDate
 */
export class DateUtil extends Date {
  /**
   * @method isPast
   * @description Checks if a date is in the past.
   * @param date The date to check.
   * @returns A boolean indicating if the date is in the past.
   */
  static isPast(date: Date): boolean {
    const today = this.getToday();

    return date.getTime() < today.getTime();
  }

  /**
   * @method isAgeValid
   * @description Checks if a date is at least 16 years ago.
   * @param date The date to check.
   * @returns A boolean indicating if the date is at least 16 years ago.
   */
  static isAgeValid(date: Date): boolean {
    const today = this.getToday();

    return today.getFullYear() - date.getFullYear() > 16;
  }

  /**
   * @method getMinutesDifference
   * @description Gets the difference in minutes between two dates.
   * @param from The first date.
   * @param to The second date.
   * @returns The difference in minutes between the two dates.
   */
  static getMinutesDifference(from: Date, to: Date): number {
    return Math.abs(to.getTime() - from.getTime()) / 60000;
  }

  /**
   * @method getDifference
   * @description Gets the difference in days and hours between two dates.
   * @param date1 The first date.
   * @param date2 The second date.
   * @returns The difference in days and hours between the two dates.
   */
  static getDifference(date1: Date, date2: Date): string {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const days = Math.floor(diffDays / 1);
    const hours = Math.floor((diffDays % 1) * 24);

    return `${days}d ${hours}h`;
  }

  /**
   * @method toLocalString
   * @description Converts a date to a local string format.
   * @param date The date to convert.
   * @returns The date in a local string format (e.g. 01 January 2022, 12:00 PM).
   */
  static toLocalString(date: Date): string {
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  /**
   * @method toBOD
   * @description Converts a date to a BOD string format.
   * @param date The date to convert.
   * @returns The date in a BOD string format (e.g. 01 January 2022).
   */
  static toBOD(date: Date): string {
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  /**
   * @method compareDate
   * @description Compares two dates.
   * @param date1 The first date.
   * @param date2 The second date.
   * @returns A boolean indicating if the first date is greater than the second date.
   */
  static compareDate(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
  }

  /**
   * @method getToday
   * @description Gets the current date.
   * @returns The current date.
   */
  static getToday(): Date {
    return new Date();
  }

  /**
   * @method getCurrentDay
   * @description Gets the current day.
   * @returns The current day (e.g. 1 for the first day of the month).
   */
  static getCurrentDay(): number {
    return new Date().getDate();
  }

  /**
   * @method getCurrentMonth
   * @description Gets the current month.
   * @returns The current month (e.g. 1 for January).
   */
  static getCurrentMonth(): number {
    return new Date().getMonth();
  }

  /**
   * @method getCurrentYear
   * @description Gets the current year.
   * @returns The current year (e.g. 2022).
   */
  static getCurrentYear(): number {
    return new Date().getFullYear();
  }

  /**
   * @method fromISO
   * @description Converts an ISO date string to a date object.
   * @param date The ISO date string.
   * @returns The date object.
   */
  static fromISO(date: string): Date {
    return new Date(date);
  }

  /**
   * @method toISODate
   * @description Converts a date object to an ISO date string.
   * @param date The date object.
   * @returns The ISO date string format (e.g. 2022-01-01)
   */
  static toISODate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  /**
   * @method toISOString
   * @description Converts a date object to an ISO string.
   * @param date The date object.
   * @returns The ISO string format (e.g. 2022-01-01T12:00:00.000Z)
   */
  static toISOString(date: Date): string {
    return date.toISOString();
  }

  /**
   * @method fromUniversalDate
   * @description Converts a universal date object to a date object.
   * @param year The year.
   * @param month The month.
   * @param day The day.
   * @param hour The hour.
   * @param minute The minute.
   * @returns The date object.
   */
  static fromUniversalDate({
    year,
    month,
    day,
    hour,
    minute,
  }: {
    year: number;
    month: number;
    day: number;
    hour?: number;
    minute?: number;
  }): Date {
    return new Date(year, month - 1, day, hour, minute);
  }

  /**
   * @method toUniversalDate
   * @description Converts a date object to a universal date object.
   * @param date The date object.
   * @returns The universal date object (e.g. { year: 2022, month: 1, day: 1, hour: 12, minute: 0 }).
   */
  static toUniversalDate(date: Date): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  } {
    return {
      year: date.getFullYear(),
      month: date.getMonth() - 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  }
}
