/**
 * @class AppUtil
 * @description Utility class for generating URLs for common actions such as opening WhatsApp and sending emails.
 * @exports toWhatsappMe
 * @exports toMailTo
 */
export class AppUtil {
  /**
   * @method toWhatsappMe
   * @description Generates a WhatsApp URL to open a chat with a specific phone number.
   * @param phone The phone number to open a chat with.
   * @returns A URL to open a chat with the specified phone number.
   */
  static toWhatsappMe(phone: string) {
    return `https://wa.me/${phone}`;
  }

  /**
   * @method toMailTo
   * @description Generates a mailto URL to open the default email client with a specific email address.
   * @param email The email address to open the email client with.
   * @returns A URL to open the email client with the specified email address.
   */
  static toMailTo(email: string) {
    return `mailto:${email}`;
  }
}
