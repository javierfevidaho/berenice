"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";
import { generateQuotePdf, type QuoteData } from "@/lib/generateQuotePdf";
import {
  buildBereniceMessage,
  buildClientMessage,
  buildWaUrl,
} from "@/lib/buildWhatsAppMessage";

type FormState = {
  name: string; phone: string; email: string;
  serviceType: string; city: string; date: string; message: string;
};

const initial: FormState = {
  name: "", phone: "", email: "", serviceType: "", city: "", date: "", message: "",
};

function makeRef() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const datePart = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `SC-${datePart}-${rand}`;
}

function formatDate(iso: string, lang: string) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(lang === "es" ? "es-US" : "en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

type SuccessInfo = { ref: string; quoteData: QuoteData };

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "generating" | "done">("idle");
  const [success, setSuccess] = useState<SuccessInfo | null>(null);
  const [error, setError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setStatus("generating");

    try {
      const ref = makeRef();
      const dateFormatted = formatDate(form.date, lang);
      const nowFormatted = new Date().toLocaleDateString(lang === "es" ? "es-US" : "en-US", {
        year: "numeric", month: "long", day: "numeric",
      });

      const quoteData: QuoteData = {
        ref,
        date: nowFormatted,
        name: form.name,
        phone: form.phone,
        email: form.email,
        serviceType: form.serviceType,
        city: `${form.city}, ID`,
        preferredDate: dateFormatted,
        message: form.message,
      };

      // Generate & auto-download PDF
      const doc = await generateQuotePdf(quoteData, c.pdf);
      doc.save(`SparkleClean-Quote-${ref}.pdf`);

      setSuccess({ ref, quoteData });
      setStatus("done");
      setForm(initial);
    } catch {
      setError(true);
      setStatus("idle");
    }
  };

  const openBereniceWA = () => {
    if (!success) return;
    const msg = buildBereniceMessage(
      {
        ref: success.ref,
        name: success.quoteData.name,
        phone: success.quoteData.phone,
        email: success.quoteData.email,
        serviceType: success.quoteData.serviceType,
        city: success.quoteData.city,
        preferredDate: success.quoteData.preferredDate,
        message: success.quoteData.message,
      },
      c.wa,
    );
    window.open(buildWaUrl(BUSINESS.whatsapp, msg), "_blank");
  };

  const openClientWA = () => {
    if (!success) return;
    const msg = buildClientMessage(
      {
        ref: success.ref,
        name: success.quoteData.name,
        phone: success.quoteData.phone,
        email: success.quoteData.email,
        serviceType: success.quoteData.serviceType,
        city: success.quoteData.city,
        preferredDate: success.quoteData.preferredDate,
        message: success.quoteData.message,
      },
      c.wa,
      BUSINESS.phone,
    );
    // Opens WhatsApp to the client's own number (they send themselves the copy)
    const clientPhone = success.quoteData.phone.replace(/\D/g, "");
    const target = clientPhone.length >= 10 ? clientPhone : BUSINESS.whatsapp;
    window.open(buildWaUrl(target, msg), "_blank");
  };

  const downloadPdf = async () => {
    if (!success) return;
    const doc = await generateQuotePdf(success.quoteData, c.pdf);
    doc.save(`SparkleClean-Quote-${success.ref}.pdf`);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">{c.h2}</h2>
          <p className="mt-4 text-teal-200">{c.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
              📞 {BUSINESS.phone}
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>

        {/* ── SUCCESS MODAL ───────────────────────────────────────────────── */}
        {status === "done" && success ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
            {/* Checkmark animation */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">{c.successTitle}</h3>
              <p className="text-slate-500 mt-2 text-sm max-w-sm">{c.successSubtitle}</p>
              <div className="mt-3 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-mono font-semibold px-4 py-2 rounded-full">
                {c.refLabel}: #{success.ref}
              </div>
            </div>

            {/* Quote summary card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-sm">
              <div className="grid grid-cols-2 gap-3">
                {[
                  [c.pdf.labelName, success.quoteData.name],
                  [c.pdf.labelPhone, success.quoteData.phone],
                  [c.pdf.labelService, success.quoteData.serviceType],
                  [c.pdf.labelCity, success.quoteData.city],
                  [c.pdf.labelDate, success.quoteData.preferredDate],
                  [c.pdf.labelEmail, success.quoteData.email],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{label}</p>
                    <p className="text-slate-800 font-medium mt-0.5 truncate">{value}</p>
                  </div>
                ))}
              </div>
              {success.quoteData.message && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{c.pdf.labelNotes}</p>
                  <p className="text-slate-700 text-sm mt-1 leading-relaxed">{success.quoteData.message}</p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              {/* Send to Berenice */}
              <button
                onClick={openBereniceWA}
                className="w-full flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-200"
              >
                {c.sendToBerenice}
              </button>

              {/* Send copy to client */}
              <button
                onClick={openClientWA}
                className="w-full flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 rounded-xl text-sm transition-all hover:scale-[1.01]"
              >
                {c.sendCopy}
              </button>

              {/* Download PDF */}
              <button
                onClick={downloadPdf}
                className="w-full flex items-center justify-center gap-3 border-2 border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-700 font-semibold py-3.5 rounded-xl text-sm transition-all"
              >
                {c.downloadPdf}
              </button>

              {/* New quote */}
              <button
                onClick={() => { setStatus("idle"); setSuccess(null); }}
                className="w-full text-center text-slate-400 hover:text-teal-600 text-sm py-2 transition-colors underline underline-offset-4"
              >
                {c.newQuote}
              </button>
            </div>
          </div>

        ) : (
        /* ── FORM ──────────────────────────────────────────────────────────── */
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6"
            aria-label="Contact form"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.name}</label>
                <input id="name" name="name" required value={form.name} onChange={onChange}
                  placeholder={c.placeholders.name}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.phone}</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={onChange}
                  placeholder={c.placeholders.phone}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.email}</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange}
                placeholder={c.placeholders.email}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.serviceType}</label>
                <select id="serviceType" name="serviceType" required value={form.serviceType} onChange={onChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm">
                  <option value="">{c.placeholders.serviceType}</option>
                  {c.serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.city}</label>
                <select id="city" name="city" required value={form.city} onChange={onChange}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm">
                  <option value="">{c.placeholders.city}</option>
                  {c.cityOptions.map((city) => <option key={city} value={city}>{city}, ID</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.date}</label>
              <input id="date" name="date" type="date" required value={form.date} onChange={onChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.message}</label>
              <textarea id="message" name="message" value={form.message} onChange={onChange} rows={4}
                placeholder={c.placeholders.message}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm resize-none" />
            </div>

            <button type="submit" disabled={status === "generating"}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 flex items-center justify-center gap-3">
              {status === "generating" ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {c.generating}
                </>
              ) : c.submit}
            </button>

            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-center text-sm font-medium">
                {lang === "es"
                  ? "Algo salió mal. Por favor llámanos directamente al "
                  : "Something went wrong. Please call us at "}
                <a href={`tel:${BUSINESS.phone}`} className="underline font-bold">{BUSINESS.phone}</a>
              </div>
            )}

            <p className="text-center text-xs text-slate-400">{c.privacy}</p>
          </form>
        )}
      </div>
    </section>
  );
}
