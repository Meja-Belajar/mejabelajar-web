export class NumberUtil {
  static formatToRupiah(amount: number): string {
    if (isNaN(amount)) {
      return "Rp. 0";
    }

    return `Rp. ${amount.toFixed(1)}`;
  }

  static priceOnDuration(minute: number, rate: number): number {
    return (minute / 60) * rate;
  }
}
