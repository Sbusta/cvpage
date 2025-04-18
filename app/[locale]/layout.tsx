
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";
import CookiesConsent from "@/components/CookiesConsent";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
        <footer className="w-full flex items-center justify-center pt-3 pb-6 gap-2 mt-5">
            <Button
              isExternal
              as={Link}
              isIconOnly 
              href={siteConfig.links.github}
              variant="light"
              className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
              >
              <FaGithub className="size-7"/>
            </Button>
            <Button
              isExternal
              as={Link}
              isIconOnly 
              href={siteConfig.links.linkedin}
              variant="light"
              className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
            >
              <FaLinkedin className="size-7"/>
            </Button>
            <Button
              isExternal
              as={Link}
              isIconOnly 
              href={siteConfig.links.email}
              variant="light"
              className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
            >
              <MdEmail className="size-7"/>
            </Button>
        </footer>
      </div>
    </NextIntlClientProvider>
  );
}