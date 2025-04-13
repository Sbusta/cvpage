import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className="text-4xl font-bold">{t("aboutMe.0.title")}</h1>
      <p className="text-lg text-center max-w-2xl">{t("aboutMe.0.description")}</p>
    </section>
  );
}