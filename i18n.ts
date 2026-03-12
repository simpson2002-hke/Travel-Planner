export type Language = "en" | "zh";
export type TKey = string;

const englishLabels: Record<string, string> = {
  admin: "Admin",
  signIn: "Sign in",
  signUp: "Sign up",
  signOut: "Sign out",
  dashboard: "Dashboard",
  trips: "Trips",
  settings: "Settings",
  save: "Save",
  cancel: "Cancel",
  delete: "Delete",
  add: "Add",
  loading: "Loading...",
};

const makeFallback = (key: string) =>
  englishLabels[key] ?? key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());

export const translations: Record<Language, Record<string, string>> = {
  en: new Proxy(englishLabels, {
    get(target, prop: string) {
      return target[prop] ?? makeFallback(prop);
    },
  }),
  zh: new Proxy({}, {
    get(_, prop: string) {
      return englishLabels[prop] ?? makeFallback(prop);
    },
  }) as Record<string, string>,
};
