import PrivacyTemplate from "@/components/templates/PrivacyTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Hope Benk",
  description:
    "Esta Política de Privacidade detalha como o Hope Benk coleta, utiliza e protege seus dados pessoais e empresariais em conformidade estrita com a LGPD.",
};

export default function PrivacyPage() {
  return <PrivacyTemplate />;
}
