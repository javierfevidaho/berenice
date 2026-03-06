import type { Translation } from "./translations/types";

type QuoteFields = {
  ref: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  city: string;
  preferredDate: string;
  message: string;
};

const SEP = "━━━━━━━━━━━━━━━━━━━━━━";

/** Message sent TO Berenice */
export function buildBereniceMessage(d: QuoteFields, wa: Translation["contact"]["wa"]): string {
  const lines = [
    wa.bereniceHeader,
    `_Ref: #${d.ref}_`,
    SEP,
    wa.clientSection,
    `• Nombre / Name: ${d.name}`,
    `• Teléfono / Phone: ${d.phone}`,
    `• Email: ${d.email}`,
    "",
    wa.serviceSection,
    `• ${d.serviceType}`,
    `• 📍 ${d.city}, Idaho`,
    `• 📅 ${d.preferredDate}`,
  ];

  if (d.message?.trim()) {
    lines.push("", wa.notesSection, d.message.trim());
  }

  lines.push(SEP);
  return lines.join("\n");
}

/** Confirmation copy sent TO the CLIENT (they send it to themselves) */
export function buildClientMessage(d: QuoteFields, wa: Translation["contact"]["wa"], phone: string): string {
  const lines = [
    wa.clientHeader,
    `_Ref: #${d.ref}_`,
    SEP,
    wa.clientGreeting,
    "",
    wa.clientSummary,
    `• ${d.serviceType}`,
    `• 📍 ${d.city}, Idaho`,
    `• 📅 ${d.preferredDate}`,
    "",
    `${wa.questions} ${phone}`,
    SEP,
    "_Berenice's Sparkle Clean — Boise, Idaho_",
  ];
  return lines.join("\n");
}

/** Strip non-digits from a phone string for wa.me URL */
export function toWaNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  // If already has country code (11 digits starting with 1), keep as is
  if (digits.length === 11 && digits.startsWith("1")) return digits;
  // If 10 digits (US number without country code), add 1
  if (digits.length === 10) return `1${digits}`;
  return digits;
}

export function buildWaUrl(number: string, message: string): string {
  return `https://wa.me/${toWaNumber(number)}?text=${encodeURIComponent(message)}`;
}
