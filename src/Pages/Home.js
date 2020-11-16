import React, { useCallback, useEffect, useRef, useState } from "react";
import { AboutForm } from "../Components/About/AboutForm";
import { ContactForm } from "../Components/Contact/ContactForm";
import { MainForm } from "../Components/Main/MainForm";
import { ProjectForm } from "../Components/Project/ProjectForm";
import { SkillsForm } from "../Components/Skills/SkillsForm";

export const Home = () => {
    const [opacity, setOpacity] = useState(1);
    const [textOpacity, setTextOpacity] = useState(0);
    const img = useRef();

    const scrollEvent = useCallback(() => {
        const scrollY = window.scrollY;
        const imgHeight = img.current.getBoundingClientRect().height;
        setOpacity(1 - scrollY / imgHeight);
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
            <MainForm img={img} opacity={opacity} textOpacity={textOpacity} />
            <SkillsForm />
            <ProjectForm />
            <AboutForm />
            <ContactForm />
        </>
    );
};
