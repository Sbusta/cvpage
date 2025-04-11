"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Cookies from "js-cookie";
import { Button } from "@heroui/button";
import { LuLanguages } from "react-icons/lu";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const currentLocale = pathname.split("/")[1] || "es";

  const newLocale = currentLocale === "es" ? "en" : "es";
  const [, startTransition] = useTransition();

  const switchLanguage = () => {
    let newPath;
    if (pathname === "/") {
      newPath = `/${newLocale}`;
    } else if (pathname.startsWith("/es") || pathname.startsWith("/en")) {
      newPath = pathname.replace(/^\/(es|en)/, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname}`;
    }
    
    Cookies.set("locale", newLocale);
    startTransition(() => {
      router.push(newPath);
      router.refresh();
    });
  };

  return (
    <Button
      onPress={switchLanguage}
      className="text-sm"
      variant="light"
      startContent={<LuLanguages size={16} />}
    >
      {currentLocale === "es" ? t("languageSwitcher") : t("languageSwitcher")}
    </Button>
  );
}
