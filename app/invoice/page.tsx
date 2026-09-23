import type { Metadata } from "next";
import { InvoiceClient } from "./invoice-client";

export const metadata: Metadata = {
  title: "Invoice Generator",
  description: "Generate professional invoices with Appziio Technologies. Create, customize and download PDF invoices instantly.",
  robots: { index: false, follow: false },
};

export default function InvoicePage() {
  return <InvoiceClient />;
}
