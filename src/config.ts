export const SITE_URL = "https://edithsi.com";
export const REFERRAL_CODE = "02e0c12a-d634-4738-9686-04f28f31f52b";
export const GENERAL_REFERRAL_URL = "https://t.mercor.com/Pq3VD";
export const CHECKED_ON = "2026-11-05";

export const OPERATOR = {
  name: "Anso Chacko",
  city: "Helsinki",
  email: "hello@edithsi.com",
  businessId: "",
} as const;

export const SITE_NAME = "Edithsi";
export const INDEXNOW_KEY = "7f9b2c4e8a1d6f3b5e0c9a8d2f4b7e1c";

export const ORGANIZATION_DESCRIPTION =
  "Edithsi is an independent, six-language guide and pay index for credentialed professionals in Finland and Europe comparing remote AI-training work across Mercor, micro1, Outlier, Alignerr, Handshake AI, and Mindrift.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/ansochacko/";
export const GITHUB_URL = "https://github.com/Ansochacko";
export const SAME_AS_URLS = [
  "https://www.linkedin.com/in/ansochacko/",
  "https://github.com/Ansochacko",
  "https://github.com/Ansochacko/edithsi",
] as const;

export function buildReferralUrl(listingUrl: string): string {
  return `${listingUrl}?referralCode=${REFERRAL_CODE}`;
}

export function buildGoUrl(roleSlug: string, src: string): string {
  return `/go/${roleSlug}/?src=${encodeURIComponent(src)}&referralCode=${REFERRAL_CODE}`;
}
