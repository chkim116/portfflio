import React from "react";
import styled from "styled-components";
import ProjectImg from "../../assets/images/sample.jpg";

const ProjectGridBlock = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  .project__imgbox {
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    margin-top: 1em;

    .project__img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 0 0.3em;
    }
  }

  .project__more {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
    background: rgba(253, 253, 253, 0.6);
    transition: 500ms;
    cursor: pointer;
    overflow: hidden;
    h3 {
      transition: 500ms;
      transform: translateY(-1000%);
    }
    h4 {
      transition: 700ms;
      transform: translateY(1000%);
    }
    &:hover {
      opacity: 1;
      h3 {
        transform: translateY(460%);
      }
      h4 {
        transform: translateY(540%);
      }
    }
  }
`;

export const ProjectGrid = ({ onClick }) => {
  const project = [
    { title: "프로젝트", img: ProjectImg },
    { title: "프로젝트2", img: ProjectImg },
    { title: "프로젝트3", img: ProjectImg },
    { title: "프로젝트4", img: ProjectImg },
  ];

  return (
    <>
      {project.map((pj, index) => (
        <ProjectGridBlock key={index}>
          <div className='project__imgbox'>
            <img className='project__img' src={pj.img} alt='프로젝트이미지' />
            <div
              className='project__more'
              data-title={pj.title}
              onClick={onClick}>
              <h3>블로그 제작</h3>
              <h4>oh yes</h4>
            </div>
          </div>
        </ProjectGridBlock>
      ))}
    </>
  );
};
