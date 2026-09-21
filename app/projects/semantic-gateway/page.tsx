import type { Metadata } from "next";
import SemanticGatewayContent from "./SemanticGatewayContent";

export const metadata: Metadata = {
  title: "SemanticGateway — Albert Nadar",
  description:
    "An end-to-end analytics platform combining streaming ingestion, semantic modeling, and LLM-powered natural language analytics.",
};

export default function SemanticGatewayPage() {
  return <SemanticGatewayContent />;
}
