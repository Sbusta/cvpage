"use client"

import { useTranslations } from "next-intl";
import { Image } from "@heroui/image";
import { GlassBox } from "../glassbox";
import { Divider } from "../divider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NeumBox } from "../neumbox";

export const AboutMe = () => {
  const t = useTranslations();

    return (
        <NeumBox style="hover" className="flex flex-col sm:flex-row items-center justify-evenly gap-2 mb-5 p-6">
            <div className="flex flex-col items-center justify-center ">
                <div className="mb-5 p-2 rounded-2xl bg-gray-200 dark:bg-gray-700 shadow-lg">
                    <Image
                        alt="Sebastian Bustamante photo"
                        className=""
                        src="/images/photo.webp"
                        radius="lg"
                        width={175}
                    />
                </div>
                <h1 className="text-3xl text-center text-primary-400 font-bold">{t("personalInfo.0.name")}</h1>
                <p className="text-xl max-w-2xl">{t("personalInfo.0.workTitle")}</p>
                <p className="text-sm max-w-2xl opacity-75">{t("personalInfo.0.location")}</p>
                <div className="flex gap-2 mt-4">
                    <Button
                        isExternal
                        as={Link}
                        isIconOnly 
                        href={siteConfig.links.github}
                        variant="light"
                        className="hover:text-primary-400"
                    >
                        <FaGithub  className="size-7"/>
                    </Button>
                    <Button
                        isExternal
                        as={Link}
                        isIconOnly 
                        href={siteConfig.links.linkedin}
                        variant="light"
                        className="hover:text-primary-400"
                    >
                        <FaLinkedin  className="size-7"/>
                    </Button>
                    <Button
                        isExternal
                        as={Link}
                        isIconOnly 
                        href={siteConfig.links.email}
                        variant="light"
                        className="hover:text-primary-400"
                    >
                        <MdEmail  className="size-7"/>
                    </Button>
                    <Button
                        isExternal
                        as={Link}
                        isIconOnly 
                        href={siteConfig.links.whatsapp}
                        variant="light"
                        className="hover:text-primary-400"
                    >
                        <FaWhatsapp className="size-7"/>
                    </Button>
                </div>
            </div>

            <div className="flex flex-col ">
                <h2 className="text-2xl font-bold ">{t("aboutMe.0.title")}</h2>
                <Divider className="opacity-30 max-w-screen-sm"/>
                <p className="text-md text-primary-500 dark:text-primary-700 max-w-2xl mb-4 font-semibold">{t("aboutMe.0.experience")}</p>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <p className="text-md  max-w-2xl">{t("aboutMe.0.description")}</p>
                    <p className="text-md max-w-2xl">{t("aboutMe.0.description2")}</p>
                </div>
            </div>
        </NeumBox>
    )
    
}