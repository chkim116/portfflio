import React from "react";
import styled from "styled-components";

const ProjectModalBlock = styled.div`
  position: fixed;
  display: ${(props) => (!props.show ? "none" : "block")};
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;

  .project__modal-box {
    position: relative;
    padding-bottom: 56.25%;
    max-width: 1440px;
    max-height: 900px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .project__modal {
      position: absolute;
      max-width: 1440px;
      max-height: 800px;
      min-height: 400px;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .project__close {
        cursor: pointer;
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
      height: 50%;
      width: 50%;
      min-width: 280px;
      min-height: 170px;

      .project__modal-img {
        width: 100%;
        height: 100%;
      }
    }
    .project__stack {
      display: flex;
      .project__stack-title {
        margin-right: 0.8em;
      }
    }
    .project__desc {
      width: 250px;
      flex-direction: column;
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
            </div>
          </div>
        </div>
      </ProjectModalBlock>
    </>
  );
};
