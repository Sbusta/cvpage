"use client"

import { useTranslations } from "next-intl";
import { Divider } from "../divider";

import { Button } from "@heroui/button";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { NeumBox } from "../neumbox";


export const ProjectsAndResearch = () => {
  const t = useTranslations();
  return(
    <NeumBox className="mt-6 p-5 md:p-10" style="hover">
        <h2 className="text-2xl font-bold">{t("projectsAndResearch.title")}</h2>
        <Divider className="mb-2 opacity-30" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NeumBox className="gap-5 p-5 md:p-10" style="card">
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.0.type")}</p>
                <h3 className="text-lg font-bold">{t("projectsAndResearch.projectsAndResearchList.0.title")}</h3>
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.0.info")}</p>
                <p className="text-sm mt-5">{t("projectsAndResearch.projectsAndResearchList.0.description")}</p>
                <Button
                isExternal
                className="mt-5"
                as={Link}
                isIconOnly 
                href={siteConfig.links.projects.pokemon}
                color="primary"
                variant="ghost"
                >
                  <FaGithub size={25} />
              </Button>
            </NeumBox>
            <NeumBox className="gap-5 p-5 md:p-10" style="card" >
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.1.type")}</p>
                <h3 className="text-lg font-bold">{t("projectsAndResearch.projectsAndResearchList.1.title")}</h3>
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.1.info")}</p>
                <p className="text-sm mt-5">{t("projectsAndResearch.projectsAndResearchList.1.description")}</p>
                <Button
                isExternal
                className="mt-5"
                as={Link}
                isIconOnly 
                href={siteConfig.links.projects.Gamification}
                color="primary"
                variant="ghost"
                >
                  <FaGithub size={25} />
              </Button>
            </NeumBox>
            <NeumBox className="gap-5 p-5 md:p-10" style="card">
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.2.type")}</p>
                <h3 className="text-lg font-bold">{t("projectsAndResearch.projectsAndResearchList.2.title")}</h3>
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.2.info")}</p>
                <p className="text-sm mt-5">{t("projectsAndResearch.projectsAndResearchList.2.description")}</p>
                <Button
                isExternal
                className="mt-5"
                as={Link}
                isIconOnly 
                href={siteConfig.links.projects.Microtransaction}
                color="primary"
                variant="ghost"
                >
                  <FaGithub size={25} />
              </Button>
            </NeumBox>
            <NeumBox className="gap-5 p-5 md:p-10" style="card">
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.3.type")}</p>
                <h3 className="text-lg font-bold">{t("projectsAndResearch.projectsAndResearchList.3.title")}</h3>
                <p className="text-sm opacity-75">{t("projectsAndResearch.projectsAndResearchList.3.info")}</p>
                <p className="text-sm mt-5">{t("projectsAndResearch.projectsAndResearchList.3.description")}</p>
                <Button
                isExternal
                className="mt-5"
                as={Link}
                isIconOnly 
                href={siteConfig.links.projects.Calculator}
                color="primary"
                variant="ghost"
                >
                  <FaGithub size={25} />
              </Button>
            </NeumBox>
        </div>
    </NeumBox>
  )
}