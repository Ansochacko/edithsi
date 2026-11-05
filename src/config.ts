export const SITE_URL = "https://edithsi.com";
export const REFERRAL_CODE = "02e0c12a-d634-4738-9686-04f28f31f52b";
export const GENERAL_REFERRAL_URL = "https://t.mercor.com/Pq3VD";
export const CHECKED_ON = "2026-11-05";

export const OPERATOR = {
  name: "[Your name]",
  city: "Helsinki",
  email: "hello@edithsi.com",
  businessId: "[Y-tunnus or empty]",
} as const;

export const SITE_NAME = "Edithsi";
export const INDEXNOW_KEY = "7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c";

export function buildReferralUrl(listingUrl: string): string {
  return `${listingUrl}?referralCode=${REFERRAL_CODE}`;
}

export function buildGoUrl(roleSlug: string, src: string): string {
  return `/go/${roleSlug}/?src=${encodeURIComponent(src)}&referralCode=${REFERRAL_CODE}`;
}
