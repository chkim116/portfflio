import React from "react";
import styled from "styled-components";

const ProjectBlock = styled.div`
  max-width: 1440px;
  margin: 3em auto;
  text-align: center;

  .project__menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectGrid = () => {
  return (
    <div className="project__wrap">
      <h3 className="project__title">프로젝트</h3>
      <div className="project__imgbox">
        <img className="project__img" src="/" alt="프로젝트이미지" />
      </div>
      <div className="project__more">
        <button type="button">자세히 보기</button>
      </div>
    </div>
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
