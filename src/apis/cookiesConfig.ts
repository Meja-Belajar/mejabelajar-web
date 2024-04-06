import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookie = (key: string): string => {
  return cookies.get(key);
};

export const setCookie = (key: string, value: string, options?: any): void => {
  cookies.set(key, value, options);
};

export const removeCookie = (key: string): void => {
  cookies.remove(key);
};

export const removeAllCookies = (): void => {
  cookies.remove("access_token");
  cookies.remove("refresh_token");
};

export const isLoggedService = () => {
  return cookies.get("access_token");
};

export const logoutService = () => {
  removeAllCookies();
  return null;
};

