'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Image } from "@heroui/image";

export const Navbar = () => {
  const t = useTranslations("personalInfo");
    return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image
            isBlurred
            alt="Sebastian Bustamante photo"
            className="bg-sebasdark-black"
            src="/images/favicon.webp"
            radius="full"
            width={50}
          />
          <p> sebasbustacar </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            isIconOnly 
            href={siteConfig.links.github}
            variant="light"
            className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
            >
            <FaGithub  className="size-7"/>
          </Button>
          <Button
            isExternal
            as={Link}
            isIconOnly 
            href={siteConfig.links.linkedin}
            variant="light"
            className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
          >
            <FaLinkedin  className="size-7"/>
          </Button>
          <Button
            isExternal
            as={Link}
            isIconOnly 
            href={siteConfig.links.email}
            variant="light"
            className="hover:text-[#009c73] dark:hover:text-[#44b59b]"
          >
            <MdEmail  className="size-7"/>
          </Button>
        </NavbarItem>
      </NavbarContent>
      
  {/* Mobile Navbar */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <LanguageSwitcher />
      </NavbarContent>
    </HeroUINavbar>
  );
};
