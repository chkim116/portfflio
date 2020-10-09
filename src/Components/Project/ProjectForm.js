import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";

const ProjectBlock = styled.div`
  max-width: 1440px;
  margin: 3em auto;
  text-align: center;
  position: relative;
  .project__menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5em;
    @media all and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media all and (max-width: 540px) {
      grid-template-columns: repeat(1, 0.8fr);
      justify-content: center;
    }
  }
`;

export const ProjectForm = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(false);

  const [project, setProject] = useState({
    pageLink: "",
    gitLink: "",
    imgUrl: "",
    stack: "",
    desc: "",
  });

  const onClick = useCallback((e) => {
    !show ? setShow(true) : setShow(false);
    const title = e.target.dataset.title;
    setTitle(title);
  }, []);

  const onClose = useCallback(() => {
    setTitle("");
    setShow(false);
  }, []);

  useEffect(() => {
    if (!title) {
      return setProject("");
    }
    console.log(title === "프로젝트3");
    setProject({
      ...project,
      desc: title,
      stack:
        (title === "프로젝트" && "HTML, CSS") ||
        (title === "프로젝트2" && "리액트, NODEJS") ||
        (title === "프로젝트3" && "NEXTJS") ||
        (title === "프로젝트4" && "VUEJS"),
    });
  }, [title]);

  return (
    <ProjectBlock className="Project">
      <div className="project__menu">
        <ProjectGrid show={show} onClick={onClick} />
      </div>
      <ProjectModal show={show} onClick={onClose} project={project} />
    </ProjectBlock>
  );
};
