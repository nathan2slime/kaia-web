export const keys = {
  auth: process.env.NEXT_PUBLIC_STORAGE_KEY_AUTH || '@kaia/auth',
};

export const saveStorage = <T = {}>(key: string, data: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {}
};

export const getStorage = <T>(key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '') as T;
  } catch (error) {
    return;
  }
};
