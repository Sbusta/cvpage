"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import Cookies from "js-cookie";
import { Button } from "@heroui/button";
import { LuLanguages } from "react-icons/lu";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
    const t = useTranslations("languageSwitcher");
    
    const router = useRouter();
    const pathname = usePathname();

    const currentLocale = pathname.split("/")[1] || "es";    
    const newLocale = currentLocale === "es" ? "en" : "es";
    const [, startTransition] = useTransition();
    
    const handleLocaleChange  = () => {
        let newPath;
        if (pathname === "/") {
            newPath = `/${newLocale}`;
        } else if (pathname.startsWith("/es") || pathname.startsWith("/en")) {
            newPath = pathname.replace(/^\/(es|en)/, `/${newLocale}`);
        } else {
            newPath = `/${newLocale}${pathname}`;
        }
        
        Cookies.set("locale", newLocale);
        router.push(newPath);
        startTransition(() => {
        router.refresh();
        });
    };    

    return (
    <Button
      onPress={handleLocaleChange }
      className="text-sm"
      variant="light"
      startContent={<LuLanguages size={16} />}
    >
      {t("label")}
    </Button>
  );
}