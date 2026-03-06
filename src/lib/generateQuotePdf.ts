import type { Translation } from "./translations/types";

export type QuoteData = {
  ref: string;
  date: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  city: string;
  preferredDate: string;
  message: string;
};

// Teal brand color
const TEAL = { r: 13, g: 148, b: 136 };
const TEAL_LIGHT = { r: 204, g: 251, b: 241 };
const SLATE = { r: 30, g: 41, b: 59 };
const SLATE_MID = { r: 100, g: 116, b: 139 };

export async function generateQuotePdf(data: QuoteData, t: Translation["contact"]["pdf"]) {
  // Dynamically import jsPDF (avoids SSR issues)
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const W = 210; // A4 width mm
  const M = 16;  // margin

  // ── HEADER BACKGROUND ─────────────────────────────────────────────────────
  doc.setFillColor(TEAL.r, TEAL.g, TEAL.b);
  doc.rect(0, 0, W, 52, "F");

  // Decorative circle top-right
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(255, 255, 255);
  doc.circle(W - 10, -5, 28, "F");
  doc.setFillColor(TEAL.r, TEAL.g, TEAL.b);
  doc.circle(W - 10, -5, 22, "F");

  // Business name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text(t.title, M, 22);

  // Subtitle
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(204, 251, 241);
  doc.text(t.subtitle, M, 30);

  // Tagline badges
  const badges = ["✓ Insured & Bonded", "✓ 20 Yrs Experience", "✓ Bilingual", "✓ Boise, Idaho"];
  let bx = M;
  doc.setFontSize(7);
  badges.forEach((b) => {
    doc.setFillColor(255, 255, 255);
    doc.setTextColor(TEAL.r, TEAL.g, TEAL.b);
    const bw = doc.getTextWidth(b) + 6;
    doc.roundedRect(bx, 37, bw, 7, 2, 2, "F");
    doc.text(b, bx + 3, 42.5);
    bx += bw + 4;
  });

  // ── QUOTE HEADER BAR ──────────────────────────────────────────────────────
  doc.setFillColor(TEAL_LIGHT.r, TEAL_LIGHT.g, TEAL_LIGHT.b);
  doc.rect(0, 52, W, 18, "F");

  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text(t.quoteRequest, M, 63.5);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(SLATE_MID.r, SLATE_MID.g, SLATE_MID.b);
  doc.text(`${t.ref}: ${data.ref}`, W - M, 60, { align: "right" });
  doc.text(`${t.date}: ${data.date}`, W - M, 66, { align: "right" });

  // ── TWO-COLUMN INFO ───────────────────────────────────────────────────────
  const colL = M;
  const colR = W / 2 + 4;
  const colW = W / 2 - M - 4;
  let y = 82;

  function sectionHeader(label: string, x: number) {
    doc.setFillColor(TEAL.r, TEAL.g, TEAL.b);
    doc.rect(x, y - 5, colW, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.text(label, x + 3, y);
  }

  function infoRow(label: string, value: string, x: number, rowY: number) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(SLATE_MID.r, SLATE_MID.g, SLATE_MID.b);
    doc.text(label, x, rowY);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);
    doc.setFontSize(8.5);
    const lines = doc.splitTextToSize(value || "—", colW - 22);
    doc.text(lines, x + 22, rowY);
    return rowY + (lines.length > 1 ? lines.length * 5.5 : 6.5);
  }

  // Left column — client info
  sectionHeader(t.clientInfo, colL);
  let ly = y + 10;
  ly = infoRow(`${t.labelName}:`, data.name, colL, ly);
  ly = infoRow(`${t.labelPhone}:`, data.phone, colL, ly);
  ly = infoRow(`${t.labelEmail}:`, data.email, colL, ly);

  // Right column — service details
  sectionHeader(t.serviceDetails, colR);
  let ry = y + 10;
  ry = infoRow(`${t.labelService}:`, data.serviceType, colR, ry);
  ry = infoRow(`${t.labelCity}:`, data.city, colR, ry);
  ry = infoRow(`${t.labelDate}:`, data.preferredDate, colR, ry);

  // ── NOTES SECTION ─────────────────────────────────────────────────────────
  const notesY = Math.max(ly, ry) + 10;

  doc.setFillColor(TEAL.r, TEAL.g, TEAL.b);
  doc.rect(M, notesY - 5, W - M * 2, 8, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text(t.labelNotes, M + 3, notesY);

  const notesText = data.message?.trim() || t.noNotes;
  const noteLines = doc.splitTextToSize(notesText, W - M * 2 - 6);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(SLATE.r, SLATE.g, SLATE.b);

  // Notes box background
  const notesBoxH = noteLines.length * 5.5 + 10;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(M, notesY + 5, W - M * 2, notesBoxH, 2, 2, "FD");
  doc.text(noteLines, M + 4, notesY + 12);

  // ── VALIDITY LINE ──────────────────────────────────────────────────────────
  const validY = notesY + notesBoxH + 14;
  doc.setFontSize(7.5);
  doc.setTextColor(SLATE_MID.r, SLATE_MID.g, SLATE_MID.b);
  doc.setFont("helvetica", "italic");
  doc.text(`* ${t.validDays}`, M, validY);

  // ── FOOTER ────────────────────────────────────────────────────────────────
  const footerY = 270;
  doc.setFillColor(TEAL.r, TEAL.g, TEAL.b);
  doc.rect(0, footerY, W, 27, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text(t.footer, W / 2, footerY + 9, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(204, 251, 241);
  doc.text(t.guarantee, W / 2, footerY + 17, { align: "center" });

  // Page number
  doc.setFontSize(7);
  doc.setTextColor(204, 251, 241);
  doc.text(`${data.ref}`, W / 2, footerY + 24, { align: "center" });

  return doc;
}
