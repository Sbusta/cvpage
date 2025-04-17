import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";
import { MdOutlineWorkHistory } from "react-icons/md";
import { TbWorldShare } from "react-icons/tb";
import { Divider } from "../divider";
import { GlassBox } from "../glassbox/glassbox";

export const WorkExperience = () => {
  const t = useTranslations();
  return (
    <GlassBox blur="3" className="flex flex-col justify-evenly p-8 md:p-16 mt-8">
      <h2 className="text-2xl font-bold"> {t("workExperience")} </h2>
      <Divider className="opacity-30 mb-8"/>
      
      <ol className="relative border-s border-black dark:border-primary-900 ">                  
        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.5.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.5.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.5.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.5.location")}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-sm">{t("workExperienceList.5.description-1")}</p>
            </div>
          </div>
        </li>

        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.4.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.4.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.4.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.4.location")}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-sm mb-4">{t("workExperienceList.4.description-1")}</p>
              <p className="text-sm mb-4">{t("workExperienceList.4.description-2")}</p>
              <p className="text-sm">{t("workExperienceList.4.description-3")}</p>
            </div>
          </div>
        </li>

        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.3.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.3.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.3.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.3.location")}</p>
            </div>
            <div className="md:w-2/3 ">
              <p className="text-sm mb-4">{t("workExperienceList.3.description-1")}</p>
              <Button
                isExternal
                as={Link}
                isIconOnly 
                href={siteConfig.links.work.convexo}
                color="primary"
                variant="ghost"
                className="w-10 h-10"
                >
                  <TbWorldShare size={25} />
              </Button>
            </div>
          </div>
        </li>

        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.2.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.2.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.2.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.2.location")}</p>
            </div>
            <div className="md:w-2/3 ">
              <p className="text-sm mb-4">{t("workExperienceList.2.description-1")}</p>
              <Button
                isExternal
                as={Link}
                isIconOnly 
                href={siteConfig.links.work.astrolab}
                color="primary"
                variant="ghost"
                >
                  <TbWorldShare size={25} />
              </Button>
            </div>
          </div>
        </li>

        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.1.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.1.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.1.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.1.location")}</p>
            </div>
            <div className="md:w-2/3 ">
              <p className="text-sm mb-4">{t("workExperienceList.1.description-1")}</p>
              <Button
                isExternal
                as={Link}
                isIconOnly 
                href={siteConfig.links.work.corales}
                color="primary"
                variant="ghost"
                >
                  <TbWorldShare size={25} />
              </Button>
            </div>
          </div>
        </li>

        <li className="mb-10 ms-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-4 ring-primary-600 ring-opacity-30 bg-primary dark:bg-primary-400">
            <MdOutlineWorkHistory/>
          </span>
          <div className="flex flex-col sm:flex-row items-baseline">
            <div className="min-w-60">
              <p className="text-sm opacity-60">{t("workExperienceList.0.date")}</p>
              <h3 className="text-xl font-bold text-primary-300 dark:text-primary">{t("workExperienceList.0.company")}</h3>
              <p className="text-sm font-semibold">{t("workExperienceList.0.position")}</p>
              <p className="text-xs mb-4 opacity-75">{t("workExperienceList.0.location")}</p>
            </div>
            <div className="md:w-2/3 ">
              <p className="text-sm mb-4">{t("workExperienceList.0.description-1")}</p>
              <p className="text-sm mb-4">{t("workExperienceList.0.description-2")}</p>
            </div>
          </div>
        </li>
      </ol>
    </GlassBox>
  )
}