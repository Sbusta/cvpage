import es from "@/messages/es.json";
import en from "@/messages/en.json";
import { usePathname } from "next/navigation";

export function useTranslation() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const messages = lang === "en" ? en : es;

  const t = (key: keyof typeof messages) => messages[key] || key;

  return { t, lang };
}