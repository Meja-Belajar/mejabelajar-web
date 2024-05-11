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

    console.log(date1Obj.getTime(), date2Obj.getTime());

    return date1Obj.getTime() > date2Obj.getTime();
  }
}
