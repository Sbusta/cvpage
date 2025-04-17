
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import CookiesConsent from "@/components/CookiesConsent";
import { Link } from "@heroui/link";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative md:bg-[url('@/public/blobWhite.webp')] dark:md:bg-[url('@/public/blobDark.webp')] bg-[url('@/public/blobWhiteM.webp')] dark:bg-[url('@/public/blobDarkM.webp')] bg-cover bg-repeat-y bg-top min-h-screen w-full flex flex-col items-center justify-center">
        <Navbar />
        <main className="sebaslight dark:sebasdark container mx-auto max-w-7xl pt-4 px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3 gap-2">
          <p className="text-default-600">Powered by</p>
          <p className="">HeroUI,</p>
          <p className="">Next.js &</p>
          <p className="">Tailwind</p>
        </footer>
        <CookiesConsent />
      </div>
    </NextIntlClientProvider>
  );
}