import React from "react";
import { AboutForm } from "../Components/About/AboutForm";
import { ContactForm } from "../Components/Contact/ContactForm";
import { MainForm } from "../Components/Main/MainForm";
import { ProjectForm } from "../Components/Project/ProjectForm";
import { SkillsForm } from "../Components/Skills/SkillsForm";

export const Home = () => {
  return (
    <>
      <MainForm />
      <AboutForm />
      <SkillsForm />
      <ProjectForm />
      <ContactForm />
    </>
  );
};
