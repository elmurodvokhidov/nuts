export type Locale = (typeof locales)[number];

export const locales = ['en', 'uz'] as const;
export const defaultLocale: Locale = 'en';