"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Plus, Trash2, Download, ArrowLeft, FileText, Sparkles, Copy, Check } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

interface InvoiceData {
  invoiceNumber: string;
  issueDate: string;
  dueDate: string;
  currency: string;
  fromName: string;
  fromEmail: string;
  fromAddress: string;
  fromPhone: string;
  toName: string;
  toEmail: string;
  toAddress: string;
  toPhone: string;
  items: LineItem[];
  taxRate: number;
  discount: number;
  notes: string;
  paymentTerms: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;
}

const CURRENCIES = [
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
];

const uid = () => Math.random().toString(36).slice(2, 9);

const today = new Date();
const fmtISO = (d: Date) => d.toISOString().split("T")[0];
const due30 = new Date(today);
due30.setDate(due30.getDate() + 30);

const defaultData: InvoiceData = {
  invoiceNumber: `INV-${today.getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`,
  issueDate: fmtISO(today),
  dueDate: fmtISO(due30),
  currency: "INR",
  fromName: "Appziio Technologies",
  fromEmail: "hello@appziio.com",
  fromAddress: "Vellore, Tamil Nadu, India — 632 001",
  fromPhone: "+91 XXXXX XXXXX",
  toName: "",
  toEmail: "",
  toAddress: "",
  toPhone: "",
  items: [
    { id: uid(), description: "Web Development — Custom Next.js Application", quantity: 1, rate: 150000 },
    { id: uid(), description: "UI/UX Design & Prototyping", quantity: 1, rate: 45000 },
  ],
  taxRate: 18,
  discount: 0,
  notes: "Payment due within 30 days of invoice date. Thank you for choosing Appziio Technologies!",
  paymentTerms: "Net 30",
  bankName: "HDFC Bank",
  accountNumber: "XXXX XXXX XXXX",
  ifscCode: "HDFC0000000",
  upiId: "appziio@hdfc",
};

// ─── Main Component ───────────────────────────────────────────────────────────

export function InvoiceClient() {
  const [data, setData] = useState<InvoiceData>(defaultData);
  const [copied, setCopied] = useState(false);

  const currency = CURRENCIES.find((c) => c.code === data.currency) ?? CURRENCIES[0];

  const update = useCallback(<K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const updateItem = useCallback((id: string, field: keyof LineItem, value: string | number) => {
    setData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  }, []);

  const addItem = () =>
    setData((prev) => ({
      ...prev,
      items: [...prev.items, { id: uid(), description: "", quantity: 1, rate: 0 }],
    }));

  const removeItem = (id: string) =>
    setData((prev) => ({ ...prev, items: prev.items.filter((i) => i.id !== id) }));

  // ─── Calculations ─────────────────────────────────────────────────────────

  const subtotal = data.items.reduce((s, i) => s + i.quantity * i.rate, 0);
  const discountAmt = (subtotal * data.discount) / 100;
  const taxable = subtotal - discountAmt;
  const taxAmt = (taxable * data.taxRate) / 100;
  const total = taxable + taxAmt;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: data.currency,
      maximumFractionDigits: 2,
    }).format(n);

  const displayDate = (iso: string) => {
    if (!iso) return "—";
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handlePrint = () => window.print();

  const handleCopy = () => {
    navigator.clipboard.writeText(data.invoiceNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // shared props
  const docProps = { data, currency, subtotal, discountAmt, taxable, taxAmt, total, fmt, displayDate, update, updateItem, addItem, removeItem };

  return (
    <>
      {/* ── Global print styles ─────────────────────────────────────────── */}
      <style>{`
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          @page { size: A4 portrait; margin: 10mm 12mm; }
          body, html { background: #fff !important; margin: 0 !important; padding: 0 !important; }
        }
        @media screen {
          .print-only { display: none !important; }
        }
      `}</style>

      {/* ── Screen: top bar ────────────────────────────────────────────── */}
      <div className="no-print min-h-screen bg-background">
        <div className="sticky top-0 z-50 border-b border-foreground/8 bg-background/90 backdrop-blur-xl">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                <span className="text-sm font-medium">Appziio</span>
              </a>
              <span className="text-foreground/20">/</span>
              <div className="flex items-center gap-2 text-foreground">
                <FileText className="w-4 h-4 text-foreground/50" />
                <span className="text-sm font-medium">Invoice Generator</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-foreground/35 font-mono">
                <Sparkles className="w-3 h-3" />
                Click any field to edit
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 h-8 rounded-full border border-foreground/10 hover:border-foreground/30 text-xs font-mono text-foreground/55 hover:text-foreground transition-all"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                {data.invoiceNumber}
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-5 h-9 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/85 active:scale-95 transition-all group"
                style={{ fontFamily: "inherit" }}
              >
                <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
                Download PDF
              </button>
            </div>
          </div>
        </div>

        {/* ── Screen: editor layout ──────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_460px] gap-8 items-start">
            {/* Invoice card */}
            <div className="bg-white rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.07)] border border-black/5 overflow-hidden">
              <InvoiceDocument {...docProps} />
            </div>
            {/* Settings panel */}
            <div className="space-y-4">
              <SettingsPanel data={data} update={update} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Print-only: full page invoice ──────────────────────────────── */}
      <div className="print-only" style={{ background: "#fff", width: "100%", minHeight: "100vh" }}>
        <InvoiceDocument {...docProps} printMode />
      </div>
    </>
  );
}

// ─── Invoice Document ─────────────────────────────────────────────────────────

interface DocProps {
  data: InvoiceData;
  currency: { code: string; symbol: string; name: string };
  subtotal: number;
  discountAmt: number;
  taxable: number;
  taxAmt: number;
  total: number;
  fmt: (n: number) => string;
  displayDate: (iso: string) => string;
  update: <K extends keyof InvoiceData>(key: K, val: InvoiceData[K]) => void;
  updateItem: (id: string, field: keyof LineItem, val: string | number) => void;
  addItem: () => void;
  removeItem: (id: string) => void;
  printMode?: boolean;
}

function InvoiceDocument({
  data, currency, subtotal, discountAmt, taxAmt, total, fmt, displayDate,
  update, updateItem, addItem, removeItem, printMode = false,
}: DocProps) {

  const field = (
    val: string | number,
    onChange: (v: string) => void,
    opts: { placeholder?: string; cls?: string; type?: string } = {}
  ) => {
    if (printMode) {
      return (
        <span className={opts.cls ?? ""} style={{ display: "inline-block" }}>
          {val || "—"}
        </span>
      );
    }
    return (
      <input
        type={opts.type ?? "text"}
        value={val}
        onChange={(e) => onChange(e.target.value)}
        placeholder={opts.placeholder}
        className={`bg-transparent border-b border-dashed border-[#ddd] hover:border-[#999] focus:border-[#111] focus:outline-none transition-colors placeholder:text-[#ccc] w-full ${opts.cls ?? ""}`}
      />
    );
  };

  return (
    <div
      className="text-[#111] p-10 lg:p-14"
      style={{
        fontFamily: "'Instrument Sans', 'Inter', system-ui, sans-serif",
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#111",
        background: "#fff",
      }}
    >
      {/* ── Header: Logo + Invoice title ─────────────────────────────── */}
      <div className="flex items-start justify-between mb-12">
        {/* Real logo */}
        <div className="flex items-center">
          {/* Use next/image on screen, plain img for print reliability */}
          {printMode ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/appziio-logo.png"
              alt="Appziio Technologies"
              style={{ height: "52px", width: "auto", objectFit: "contain", display: "block" }}
            />
          ) : (
            <Image
              src="/appziio-logo.png"
              alt="Appziio Technologies"
              width={220}
              height={56}
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
              priority
            />
          )}
        </div>

        {/* Invoice meta */}
        <div className="text-right">
          <h1 style={{ fontSize: "36px", fontWeight: 300, letterSpacing: "-0.02em", color: "#111", marginBottom: "12px", fontFamily: "'Instrument Serif', Georgia, serif" }}>
            Invoice
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#999", textTransform: "uppercase", letterSpacing: "0.08em" }}>Number</span>
              {field(data.invoiceNumber, (v) => update("invoiceNumber", v), { placeholder: "INV-001", cls: "text-sm font-mono font-semibold text-right" })}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#999", textTransform: "uppercase", letterSpacing: "0.08em" }}>Issue Date</span>
              {printMode
                ? <span className="text-sm">{displayDate(data.issueDate)}</span>
                : <input type="date" value={data.issueDate} onChange={(e) => update("issueDate", e.target.value)}
                    className="bg-transparent border-b border-dashed border-[#ddd] hover:border-[#999] focus:border-[#111] focus:outline-none transition-colors text-sm text-right w-36" />
              }
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "flex-end" }}>
              <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#999", textTransform: "uppercase", letterSpacing: "0.08em" }}>Due Date</span>
              {printMode
                ? <span className="text-sm">{displayDate(data.dueDate)}</span>
                : <input type="date" value={data.dueDate} onChange={(e) => update("dueDate", e.target.value)}
                    className="bg-transparent border-b border-dashed border-[#ddd] hover:border-[#999] focus:border-[#111] focus:outline-none transition-colors text-sm text-right w-36" />
              }
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <div style={{ height: "1px", background: "linear-gradient(to right, #111 0%, rgba(17,17,17,0.15) 60%, transparent 100%)", marginBottom: "32px" }} />

      {/* ── From / Bill To ───────────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "36px" }}>
        <div>
          <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: "14px" }}>From</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {field(data.fromName, (v) => update("fromName", v), { placeholder: "Your Company", cls: "font-semibold text-base" })}
            {field(data.fromEmail, (v) => update("fromEmail", v), { placeholder: "email@example.com", cls: "text-sm text-[#666]" })}
            {field(data.fromPhone, (v) => update("fromPhone", v), { placeholder: "+91 XXXXX XXXXX", cls: "text-sm text-[#666]" })}
            {field(data.fromAddress, (v) => update("fromAddress", v), { placeholder: "Address, City, State", cls: "text-sm text-[#666]" })}
          </div>
        </div>
        <div>
          <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: "14px" }}>Bill To</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {field(data.toName, (v) => update("toName", v), { placeholder: "Client Company Name", cls: "font-semibold text-base" })}
            {field(data.toEmail, (v) => update("toEmail", v), { placeholder: "client@example.com", cls: "text-sm text-[#666]" })}
            {field(data.toPhone, (v) => update("toPhone", v), { placeholder: "+91 XXXXX XXXXX", cls: "text-sm text-[#666]" })}
            {field(data.toAddress, (v) => update("toAddress", v), { placeholder: "Client Address", cls: "text-sm text-[#666]" })}
          </div>
        </div>
      </div>

      {/* ── Line Items ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: "32px" }}>
        {/* Table header */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 72px 120px 120px 28px",
          gap: "12px",
          paddingBottom: "10px",
          borderBottom: "2px solid #111",
          marginBottom: "2px",
        }}>
          {["Description", "Qty", "Rate", "Amount", ""].map((h, i) => (
            <p key={i} style={{
              fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#111", fontWeight: 600,
              textAlign: i >= 2 ? "right" : i === 1 ? "center" : "left",
            }}>{h}</p>
          ))}
        </div>

        {/* Rows */}
        {data.items.map((item, idx) => (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 72px 120px 120px 28px",
              gap: "12px",
              padding: "12px 0",
              borderBottom: "1px solid #f2f2f2",
              alignItems: "center",
            }}
            className="group"
          >
            {printMode ? (
              <span style={{ fontSize: "13px" }}>{item.description || `Item ${idx + 1}`}</span>
            ) : (
              <input
                type="text"
                value={item.description}
                onChange={(e) => updateItem(item.id, "description", e.target.value)}
                placeholder={`Service or product ${idx + 1}`}
                className="bg-transparent border-b border-dashed border-[#e8e8e8] hover:border-[#aaa] focus:border-[#111] focus:outline-none transition-colors text-sm placeholder:text-[#ccc] w-full"
              />
            )}

            <div style={{ textAlign: "center" }}>
              {printMode ? (
                <span style={{ fontSize: "13px" }}>{item.quantity}</span>
              ) : (
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value) || 0)}
                  className="bg-transparent border-b border-dashed border-[#e8e8e8] hover:border-[#aaa] focus:border-[#111] focus:outline-none transition-colors text-sm text-center w-full"
                />
              )}
            </div>

            <div style={{ textAlign: "right" }}>
              {printMode ? (
                <span style={{ fontSize: "13px" }}>{fmt(item.rate)}</span>
              ) : (
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, "rate", Number(e.target.value) || 0)}
                  className="bg-transparent border-b border-dashed border-[#e8e8e8] hover:border-[#aaa] focus:border-[#111] focus:outline-none transition-colors text-sm text-right w-full"
                />
              )}
            </div>

            <p style={{ fontSize: "13px", fontWeight: 600, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
              {fmt(item.quantity * item.rate)}
            </p>

            {printMode ? (
              <div />
            ) : (
              <button
                onClick={() => removeItem(item.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ddd] hover:text-red-400"
              >
                <Trash2 style={{ width: "14px", height: "14px" }} />
              </button>
            )}
          </div>
        ))}

        {/* Add item */}
        {!printMode && (
          <button
            onClick={addItem}
            className="mt-3 flex items-center gap-2 text-xs font-mono text-[#bbb] hover:text-[#111] transition-colors group py-2"
          >
            <Plus style={{ width: "13px", height: "13px", transition: "transform 0.2s" }} className="group-hover:rotate-90" />
            Add line item
          </button>
        )}
      </div>

      {/* ── Payment Info + Totals ─────────────────────────────────────── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "8px" }}>
        {/* Payment details */}
        <div>
          <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: "14px" }}>
            Payment Details
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { label: "Bank", key: "bankName", ph: "Bank Name" },
              { label: "Account", key: "accountNumber", ph: "Account Number" },
              { label: "IFSC", key: "ifscCode", ph: "IFSC Code" },
              { label: "UPI", key: "upiId", ph: "upi@bank" },
            ].map(({ label, key, ph }) => (
              <div key={key} style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#aaa", minWidth: "56px" }}>{label}</span>
                {field(data[key as keyof InvoiceData] as string, (v) => update(key as keyof InvoiceData, v as never), {
                  placeholder: ph,
                  cls: "text-sm font-mono",
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
            <span style={{ color: "#888" }}>Subtotal</span>
            <span style={{ fontWeight: 500 }}>{fmt(subtotal)}</span>
          </div>
          {data.discount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ color: "#888" }}>Discount ({data.discount}%)</span>
              <span style={{ color: "#16a34a" }}>−{fmt(discountAmt)}</span>
            </div>
          )}
          {data.taxRate > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
              <span style={{ color: "#888" }}>GST ({data.taxRate}%)</span>
              <span>{fmt(taxAmt)}</span>
            </div>
          )}
          <div style={{ height: "1px", background: "#111", margin: "4px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontWeight: 600, fontSize: "15px" }}>Total Due</span>
            <span style={{ fontSize: "26px", fontWeight: 600, fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em" }}>
              {fmt(total)}
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#bbb" }}>
            <span>Currency</span>
            <span style={{ fontFamily: "monospace" }}>{currency.code} — {currency.name}</span>
          </div>
        </div>
      </div>

      {/* ── Notes ────────────────────────────────────────────────────── */}
      {(data.notes || !printMode) && (
        <div style={{ marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #ececec" }}>
          <p style={{ fontSize: "10px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", color: "#999", marginBottom: "10px" }}>Notes</p>
          {printMode ? (
            <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.6" }}>{data.notes}</p>
          ) : (
            <textarea
              value={data.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Add payment terms, late fee policy, or a thank-you note…"
              rows={3}
              className="w-full text-sm text-[#666] leading-relaxed bg-transparent border-b border-dashed border-[#e0e0e0] hover:border-[#aaa] focus:border-[#111] focus:outline-none transition-colors resize-none placeholder:text-[#ccc]"
            />
          )}
        </div>
      )}

      {/* ── Footer strip ──────────────────────────────────────────────── */}
      <div style={{
        marginTop: "40px",
        paddingTop: "20px",
        borderTop: "1px solid #ececec",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <p style={{ fontSize: "11px", fontFamily: "monospace", color: "#ccc" }}>appziio.com</p>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
          <p style={{ fontSize: "11px", fontFamily: "monospace", color: "#ccc" }}>Generated by Appziio Invoice</p>
        </div>
      </div>
    </div>
  );
}

// ─── Settings Panel ───────────────────────────────────────────────────────────

function SettingsPanel({
  data,
  update,
}: {
  data: InvoiceData;
  update: <K extends keyof InvoiceData>(key: K, value: InvoiceData[K]) => void;
}) {
  const card = "bg-white border border-foreground/8 rounded-xl p-6 shadow-[0_1px_12px_rgba(0,0,0,0.04)]";
  const lbl = "text-[10px] font-mono uppercase tracking-widest text-foreground/40 mb-1.5 block";
  const inp = "w-full h-9 px-3 rounded-lg border border-foreground/10 bg-background/50 text-sm font-medium focus:border-foreground/40 focus:outline-none transition-colors placeholder:text-foreground/25";

  return (
    <>
      {/* Finance */}
      <div className={card}>
        <h3 className="text-sm font-semibold mb-5 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-foreground/6 flex items-center justify-center text-xs">₹</span>
          Finance Settings
        </h3>
        <div className="space-y-4">
          <div>
            <label className={lbl}>Currency</label>
            <select value={data.currency} onChange={(e) => update("currency", e.target.value)} className={`${inp} cursor-pointer`}>
              {CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>{c.symbol} {c.code} — {c.name}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={lbl}>GST / Tax %</label>
              <input type="number" min="0" max="100" value={data.taxRate}
                onChange={(e) => update("taxRate", Number(e.target.value))} className={inp} />
            </div>
            <div>
              <label className={lbl}>Discount %</label>
              <input type="number" min="0" max="100" value={data.discount}
                onChange={(e) => update("discount", Number(e.target.value))} className={inp} />
            </div>
          </div>
          <div>
            <label className={lbl}>Payment Terms</label>
            <select value={data.paymentTerms} onChange={(e) => update("paymentTerms", e.target.value)} className={`${inp} cursor-pointer`}>
              {["Net 15", "Net 30", "Net 45", "Net 60", "Due on Receipt", "50% Upfront"].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className={card}>
        <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-foreground/6 flex items-center justify-center text-xs">⚡</span>
          Quick Actions
        </h3>
        <div className="space-y-2">
          {[
            {
              label: "🔄 Generate new invoice number",
              action: () => update("invoiceNumber", `INV-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 900) + 100)}`),
            },
            {
              label: "📅 Reset to today + 30 days",
              action: () => {
                const t = new Date(); const d = new Date(t); d.setDate(d.getDate() + 30);
                update("issueDate", t.toISOString().split("T")[0]);
                update("dueDate", d.toISOString().split("T")[0]);
              },
            },
            {
              label: "🧹 Clear client info",
              action: () => { update("toName", ""); update("toEmail", ""); update("toAddress", ""); update("toPhone", ""); },
            },
          ].map((btn) => (
            <button key={btn.label} onClick={btn.action}
              className="w-full h-9 rounded-lg border border-foreground/8 bg-background/30 hover:bg-foreground/4 text-sm text-foreground/60 hover:text-foreground transition-all text-left px-3 font-medium">
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* PDF tips */}
      <div className="rounded-xl border border-foreground/6 bg-foreground/[0.02] p-5">
        <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/30 mb-3">PDF Export Tips</p>
        <ul className="space-y-2 text-xs text-foreground/50 leading-relaxed">
          <li>• Click <strong className="text-foreground/70">Download PDF</strong> → choose <em>Save as PDF</em></li>
          <li>• Set margins to <strong className="text-foreground/70">None</strong> for best result</li>
          <li>• Enable <strong className="text-foreground/70">Background graphics</strong> to keep colors</li>
          <li>• All fields on the invoice are clickable to edit</li>
        </ul>
      </div>
    </>
  );
}
