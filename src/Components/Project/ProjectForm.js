import React from "react";
import styled from "styled-components";

const ProjectBlock = styled.div`
  max-width: 1440px;
  margin: 3em auto;
  text-align: center;

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

const ProjectGrid = () => {
  return (
    <ProjectGridBlock>
      <h3 className="project__title">프로젝트</h3>
      <div className="project__imgbox">
        <img className="project__img" src="/" alt="프로젝트이미지" />
      </div>
      <div className="project__more">
        <button className="projec__btn" type="button">
          자세히 보기
        </button>
      </div>
    </ProjectGridBlock>
  );
};

const ProjectModal = () => {
  return (
    <div className="project__modal">
      <div className="project__link">
        <p>링크으응으</p>
        <p>깃허브링크응</p>
      </div>
      <div className="project__modal-imgbox">
        <img className="project__modal-img" src="/" alt="프로젝트상세이미지" />
      </div>
      <div className="project__stack">
        <h4>사용 스택</h4>
        <div>리액트, 노드, js</div>
      </div>
    </div>
  );
};

export const ProjectForm = () => {
  return (
    <ProjectBlock className="Project">
      <div className="project__menu">
        <ProjectGrid />
        <ProjectGrid />
        <ProjectGrid />
        <ProjectGrid />
        <ProjectGrid />
        <ProjectGrid />
      </div>
    </ProjectBlock>
  );
};
