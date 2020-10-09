import React from "react";
import styled from "styled-components";

const ProjectGridBlock = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  .project__imgbox {
    width: 100%;
    position: relative;
    padding: 50%;
    .project__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .project__more {
    margin: 1em auto;
    .projec__btn {
      background: #30a9de;
      cursor: pointer;
      color: white;
      font-weight: bold;
      padding: 0.5em 1em;
      border-radius: 12px;
    }
  }
`;

export const ProjectGrid = ({ onClick }) => {
  const project = [
    { title: "프로젝트", img: "/" },
    { title: "프로젝트2", img: "/" },
    { title: "프로젝트3", img: "/" },
    { title: "프로젝트4", img: "/" },
  ];

  return (
    <>
      {project.map((pj, index) => (
        <ProjectGridBlock key={index}>
          <h3 className="project__title">{pj.title}</h3>
          <div className="project__imgbox">
            <img className="project__img" src={pj.img} alt="프로젝트이미지" />
          </div>
          <div className="project__more">
            <button
              className="projec__btn"
              data-title={pj.title}
              type="button"
              onClick={onClick}
            >
              자세히 보기
            </button>
          </div>
        </ProjectGridBlock>
      ))}
    </>
  );
};
