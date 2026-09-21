import type { Metadata } from "next";
import LookMLAuditorContent from "./LookMLAuditorContent";

export const metadata: Metadata = {
  title: "LookML Auditor — Albert Nadar",
  description:
    "A static analysis tool for LookML projects that evaluates project health and identifies modeling issues with a health score out of 100.",
};

export default function LookMLAuditorPage() {
  return <LookMLAuditorContent />;
}
