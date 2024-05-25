/**
 * @class NumberUtil
 * @description Utility class for number formatting
 * @exports formatToRupiah
 * @exports priceOnDuration
 */
export class NumberUtil {
  /**
   * @method formatToRupiah
   * @description Formats a number to Indonesian Rupiah.
   * @param amount The number to format.
   * @returns The number formatted as Indonesian Rupiah (e.g. Rp. 100.000).
   */
  static formatToRupiah(amount: number): string {
    if (isNaN(amount)) {
      return "Rp. 0";
    }

    return `Rp. ${amount.toFixed(1)}`;
  }

  /**
   * @method priceOnDuration
   * @description Calculates the price based on a duration and a rate.
   * @param minute The duration in minutes.
   * @param rate The rate per hour.
   * @returns The price based on the duration and rate.
   */
  static priceOnDuration(minute: number, rate: number): number {
    return (minute / 60) * rate;
  }
}
