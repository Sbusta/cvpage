"use client"

import { useTranslations } from "next-intl";
import { GlassBox } from "../glassbox/glassbox";
import { Divider } from "../divider";

import { FaAws, FaCss3Alt, FaFigma, FaGitAlt, FaGithubSquare, FaHtml5, FaInfinity, FaNodeJs, FaNpm, FaPython, FaReact, FaRegUserCircle, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript, IoTerminal } from "react-icons/io5";
import { SiBun, SiCplusplus, SiJest, SiMongodb, SiPostman, SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFirebase } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";


export const Skills = () => {
  const t = useTranslations();
  return(
    <GlassBox className="mt-6 p-5 md:p-10" blur="3" opacity="1" bgcolor="3">
        <h2 className="text-2xl font-bold">{t("skills.title")}</h2>
        <Divider className="mb-7 opacity-30" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassBox className="gap-5 p-5 md:p-10" blur="0" opacity="0" bgcolor="0">
                <h3 className="text-xl font-bold">{t("skills.sectionTitle-1")}</h3>
                <Divider className="my-5 opacity-30" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaHtml5 size={35} />
                        <p className="text-sm">{t("skills.skillsList.Html")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaCss3Alt size={35} />
                        <p className="text-sm">{t("skills.skillsList.Css")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <IoLogoJavascript size={35} />
                        <p className="text-sm">{t("skills.skillsList.JavaScript")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiTypescript size={35} />
                        <p className="text-sm">{t("skills.skillsList.Typescript")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <RiTailwindCssFill size={35} />
                        <p className="text-sm">{t("skills.skillsList.Tailwind")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaReact size={35} />
                        <p className="text-sm">{t("skills.skillsList.React")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <RiNextjsFill size={35} />
                        <p className="text-sm">{t("skills.skillsList.Nextjs")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaFigma size={35} />
                        <p className="text-sm">{t("skills.skillsList.Figma")}</p>
                    </div>
                </div>
            </GlassBox>

            <GlassBox className="gap-5 p-5 md:p-10" blur="0" opacity="0" bgcolor="0">
                <h3 className="text-xl font-bold">{t("skills.sectionTitle-2")}</h3>
                <Divider className="my-5 opacity-30" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaNodeJs size={35} />
                        <p className="text-sm">{t("skills.skillsList.Nodejs")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaPython size={35} />
                        <p className="text-sm">{t("skills.skillsList.Python")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiCplusplus size={35} />
                        <p className="text-sm">{t("skills.skillsList.C++")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaWordpress size={35} />
                        <p className="text-sm">{t("skills.skillsList.WordPress")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaAws size={35} />
                        <p className="text-sm">{t("skills.skillsList.AWS")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <BiLogoFirebase size={35} />
                        <p className="text-sm">{t("skills.skillsList.Firebase")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiMongodb size={35} />
                        <p className="text-sm">{t("skills.skillsList.MongoDB")}</p>
                    </div>
                </div>
            </GlassBox>

            <GlassBox className="gap-5 p-5 md:p-10" blur="0" opacity="0" bgcolor="0">
                <h3 className="text-xl font-bold">{t("skills.sectionTitle-3")}</h3>
                <Divider className="my-5 opacity-30" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaGitAlt size={35} />
                        <p className="text-sm">{t("skills.skillsList.Git")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaGithubSquare size={35} />
                        <p className="text-sm">{t("skills.skillsList.GitHub")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <IoTerminal size={35} />
                        <p className="text-sm">{t("skills.skillsList.Terminal")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiPostman size={35} />
                        <p className="text-sm">{t("skills.skillsList.Postman")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiBun size={35} />
                        <p className="text-sm">{t("skills.skillsList.Bun")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaNpm size={35} />
                        <p className="text-sm">{t("skills.skillsList.Npm")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <VscVscode size={35} />
                        <p className="text-sm">{t("skills.skillsList.Vscode")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <SiJest size={35} />
                        <p className="text-sm">{t("skills.skillsList.Jest")}</p>
                    </div>
                </div>
            </GlassBox>

            <GlassBox className="gap-5 p-5 md:p-10" blur="0" opacity="0" bgcolor="0">
                <h3 className="text-xl font-bold">{t("skills.sectionTitle-4")}</h3>
                <Divider className="my-5 opacity-30" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaRegUserCircle size={35} />
                        <p className="text-sm">{t("skills.skillsList.UX/UI")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <DiScrum size={35} />
                        <p className="text-sm">{t("skills.skillsList.Scrum")}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <FaInfinity size={35} />
                        <p className="text-sm">{t("skills.skillsList.DevOps")}</p>
                    </div>
                </div>
            </GlassBox>
        </div>
    </GlassBox>
  )
}