// This is the main entry point for the application
import { AboutMe } from "@/components/seccions/aboutMe";
import { ProjectsAndResearch } from "@/components/seccions/projectsAndResearch";
import { Skills } from "@/components/seccions/skills";
import { WorkExperience } from "@/components/seccions/workExperience";


export default async function Home() {

  return (
  <>
    <AboutMe/>
    <WorkExperience/>
    <Skills/>
    <ProjectsAndResearch/> 
  </>
  );
}