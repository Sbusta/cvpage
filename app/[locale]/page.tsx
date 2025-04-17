// This is the main entry point for the application
import { GlassBox } from "@/components/glassbox/glassbox";
import { AboutMe } from "@/components/seccions/aboutMe";
import { Skills } from "@/components/seccions/skills";
import { WorkExperience } from "@/components/seccions/workExperience";


export default async function Home() {

  return (
  <>
    <AboutMe/>
    <WorkExperience/>
    <Skills/>
  </>
  );
}