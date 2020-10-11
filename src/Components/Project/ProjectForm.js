import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import ProjectImg from "../../assets/images/sample.jpg";

const ProjectBlock = styled.div`
  max-width: 1440px;
  margin: 0 auto;
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
  const [project, setProject] = useState({});

  const onClick = useCallback(
    (e) => {
      const title = e.target.dataset.title;
      if (!title) {
        return;
      }
      title === "project1" &&
        setProject({
          img: ProjectImg,
          stack: "react",
          desc:
            "const title = e.target.dataset.title;const title = e.target.dataset.title;const title = e.target.dataset.title;const title = e.target.dataset.title;const title = e.target.dataset.title;",
        });
      title === "project2" &&
        setProject({ img: ProjectImg, stack: "reactss", desc: "d" });
      title === "project3" &&
        setProject({ img: ProjectImg, stack: "project33", desc: "d" });
      title === "project4" &&
        setProject({ img: ProjectImg, stack: "project34", desc: "d" });
      title === "project5" &&
        setProject({ img: ProjectImg, stack: "project35", desc: "d" });
      title === "project6" &&
        setProject({ img: ProjectImg, stack: "project36", desc: "d" });
      setShow(true);
    },
    [show]
  );

  const onClose = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [show]);

  return (
    <>
      <ProjectBlock>
        <h1 className='portfoilo__title Project'>My Project</h1>
        <div className='project__menu'>
          <ProjectGrid show={show} onClick={onClick} />
        </div>
      </ProjectBlock>
      <ProjectModal show={show} onClick={onClose} project={project} />
    </>
  );
};
