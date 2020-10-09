import React from "react";
import styled from "styled-components";

const ProjectModalBlock = styled.div`
  position: fixed;
  display: ${(props) => (!props.show ? "none" : "block")};
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 555;

  .project__modal-box {
    position: relative;
    top: 50%;
    left: 50%;
    max-width: 1920px;
    height: auto;
    max-height: 1024px;
    display: flex;
    width: 75%;
    height: 75%;
    transform: translate(-50%, -50%);
    @media all and (max-width: 768px) {
      width: 80%;
      height: 80%;
    }

    .project__modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      min-height: 100%;
      text-align: center;
      background: #ffffff;
      z-index: 556;
      overflow: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      @media all and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .project__close {
        cursor: pointer;
        top: 0.7em;
        right: 10%;
        position: absolute;
        line-height: 25px;
        font-size: 1rem;
        width: 25px;
        height: 25px;
        &:hover {
          background: rgba(0, 0, 0, 0.3);
          transition: 500ms;
          border-radius: 33px;
        }
      }
    }

    .project__link {
      padding: 1em;

      .project__link-btn {
        margin: 1em 0.4em;
        padding: 0.5em 1em;
        transition: 500ms;
        cursor: pointer;

        &:hover {
          background: rgba(0, 0, 0, 0.3);
          opacity: 0.8;
          border-radius: 33px;
          color: white;
        }
      }
    }

    .project__modal-imgbox {
      position: relative;
      border: 1px solid black;
      padding-bottom: 35%;
      width: 70%;
      margin: 0 auto;

      .project__modal-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .project__stack {
      display: flex;
      justify-content: center;

      .project__stack-title {
        margin-right: 0.8em;
      }
    }
    .project__desc {
      width: 250px;
      flex-direction: column;
      margin: 0 auto;
    }
  }
`;

export const ProjectModal = ({ show, onClick, project }) => {
  return (
    <>
      <ProjectModalBlock show={show}>
        <div className="project__modal-box">
          <div className="project__modal">
            <span className="project__close" onClick={onClick}>
              X
            </span>
            <div className="project__link">
              <a href={project.pageLink} className="project__link-btn">
                Go Page
              </a>
              <a href={project.gitLink} className="project__link-btn">
                Go Github
              </a>
            </div>
            <div className="project__modal-imgbox">
              <img
                className="project__modal-img"
                src={project.imgUrl}
                alt="프로젝트상세이미지"
              />
            </div>
            <br></br>

            <div className="project__stack">
              <h4 className="project__stack-title">사용 스택</h4>
              <p>{project.stack}</p>
            </div>
            <br></br>
            <h4>주요 기능</h4>
            <div className="project__desc">
              <li>{project.desc}</li>
              <li>{project.desc}</li>
              <li>{project.desc}</li>
            </div>
          </div>
        </div>
      </ProjectModalBlock>
    </>
  );
};
