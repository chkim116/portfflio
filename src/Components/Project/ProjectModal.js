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
  z-index: 5;

  .wrap__project {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: ${(props) => (!props.show ? "none" : "block")};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
  }

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
    z-index: 55;
    transform: translate(-50%, -50%);

    @media all and (max-width: 768px) {
      width: 80%;
      height: 50%;
    }

    .project__modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      min-height: 100%;
      text-align: center;
      background: #fdfdfd;
      border-radius: 12px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      z-index: 55;
      overflow: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      .project__close {
        cursor: pointer;
        top: 0.7em;
        right: 5%;
        position: fixed;
        line-height: 40px;
        font-size: 2rem;
        width: 40px;
        height: 40px;

        &:hover {
          background: rgba(0, 0, 0, 0.3);
          transition: 500ms;
          border-radius: 33px;
        }
      }
    }
  }

  .project__link {
    padding: 1em;

    .project__link-btn {
      padding: 0.5em 1em;
      transition: 500ms;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }

  .project__modal-imgbox {
    position: relative;
    padding-bottom: 35%;
    width: 70%;
    top: 2em;
    margin: 0 auto 1.5em auto;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
  }

  .project__desc {
    width: 50%;
    z-index: 56;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 1em;
    aling-items: center;
  }
`;

export const ProjectModal = ({ show, onClick, project }) => {
  return (
    <>
      <ProjectModalBlock show={show}>
        <div className='wrap__project' onClick={onClick}></div>
        <div className='project__modal-box'>
          <div className='project__modal'>
            <span className='project__close' onClick={onClick}>
              X
            </span>
            <div className='project__modal-imgbox'>
              <img
                className='project__modal-img'
                src={project.img}
                alt='프로젝트상세이미지'
              />
            </div>
            <div className='project__link'>
              <a href={project.pageLink} className='project__link-btn'>
                Go Page
              </a>
              <a href={project.gitLink} className='project__link-btn'>
                Go Github
              </a>
            </div>
            <div className='project__stack'>
              <div className='project__stack-title'>STACK</div>
              <div className='project__stack-icons'>{project.stack}</div>
            </div>
            <div className='project__desc'>
              <div className='project__desc-text'>{project.desc}</div>
            </div>
          </div>
        </div>
      </ProjectModalBlock>
    </>
  );
};
