"use client";

import { usePathname, useRouter } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split("/")[1];
  const newLang = currentLang === "es" ? "en" : "es";
  const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);

  return (
    <button
      onClick={() => router.push(newPath)}
      className="text-sm text-cyan-400 underline"
    >
      {currentLang === "es" ? "English" : "Español"}
    </button>
  );
}