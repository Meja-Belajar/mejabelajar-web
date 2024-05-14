export class AppUtil {
  static toWhatsappMe(phone: string) {
    return `https://wa.me/${phone}`;
  }

  static toMailTo(email: string) {
    return `mailto:${email}`;
  }
}
