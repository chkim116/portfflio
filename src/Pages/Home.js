import React, { useCallback, useEffect, useState } from "react";
import { AboutForm } from "../Components/About/AboutForm";
import { ContactForm } from "../Components/Contact/ContactForm";
import { MainForm } from "../Components/Main/MainForm";
import { ProjectForm } from "../Components/Project/ProjectForm";
import { SkillsForm } from "../Components/Skills/SkillsForm";

export const Home = () => {
    const [opacity, setOpacity] = useState(0.3);
    const [textOpacity, setTextOpacity] = useState(0);

    const scrollEvent = useCallback(() => {
        const scrollY = window.scrollY;
        const img = document.querySelector(".section__wrap-img");
        const imgHeight = img.getBoundingClientRect().height;
        setOpacity(0.3 + scrollY / imgHeight);
        setTextOpacity(0 + (scrollY / imgHeight) * 1.5);
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", scrollEvent);
        return () => {
            document.removeEventListener();
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <MainForm opacity={opacity} textOpacity={textOpacity} />
            <SkillsForm />
            <ProjectForm />
            <AboutForm />
            <ContactForm />
        </>
    );
};
