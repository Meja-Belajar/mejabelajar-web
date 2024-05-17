export class DateUtil extends Date {
  static minAge() {
    const today = new Date();

    const minDate = new Date(
      today.getFullYear() - 15,
      today.getMonth(),
      today.getDate(),
    );

    const minDateString = minDate.toISOString().split("T")[0];

    return minDateString;
  }

  static diff(date1: string, date2: string) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    const diffTime = Math.abs(date2Obj.getTime() - date1Obj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const days = Math.floor(diffDays / 1);
    const hours = Math.floor((diffDays % 1) * 24);

    return `${days}d ${hours}h`;
  }

  static format(date: string) {
    const dateObj = new Date(date);

    // return to format 01 January 2023, 00:00 AM
    return dateObj.toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  static compare(date1: string, date2: string) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    return date1Obj.getTime() > date2Obj.getTime();
  }

  static getAgeToToday(): string {
    const today = this.getToday();

    return this.toISODate(
      new Date(today.getFullYear() - 15, today.getMonth(), today.getDate()),
    );
  }
  // ========================
  // date validation
  static isPast(date: Date): boolean {
    const today = this.getToday();

    return date.getTime() < today.getTime();
  }

  static isAgeValid(date: Date): boolean {
    const today = this.getToday();

    return today.getFullYear() - date.getFullYear() >= 15;
  }

  // date difference
  static getMinutesDifference(from: Date, to: Date): number {
    return Math.abs(to.getTime() - from.getTime()) / 60000;
  }

  static getDifference(date1: Date, date2: Date): string {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const days = Math.floor(diffDays / 1);
    const hours = Math.floor((diffDays % 1) * 24);

    return `${days}d ${hours}h`;
  }

  // return to format 01 January 2023, 00:00 AM
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

  static toBOD(date: Date): string {
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  // compare date
  static compareDate(date1: Date, date2: Date): boolean {
    return date1.getTime() > date2.getTime();
  }

  // today date
  static getToday(): Date {
    return new Date();
  }

  static getCurrentDay(): number {
    return new Date().getDate();
  }

  static getCurrentMonth(): number {
    return new Date().getMonth();
  }

  static getCurrentYear(): number {
    return new Date().getFullYear();
  }

  // ISO date
  static fromISO(date: string): Date {
    return new Date(date);
  }

  static toISODate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  // Universal date
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
    hour: number;
    minute: number;
  }): Date {
    return new Date(year, month, day, hour, minute);
  }

  static toUniversalDate(date: Date): {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  } {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  }
}
