import React from "react";
import styled from "styled-components";
import Colors from "../../Style/Color";

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
      background: ${Colors.white};
      min-height: 100%;
      text-align: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      z-index: 55;
      overflow: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      .project__close {
        cursor: pointer;
        top: 0.7em;
        font-weight: bold;
        right: 5%;
        position: absolute;
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
      margin: 1em 0.4em;
      padding: 0.5em 1em;
      transition: 500ms;
      cursor: pointer;
      font-weight: bold;
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
    justify-content: center;
    .project__stack-title {
      margin-right: 0.8em;
    }
  }

  .project__desc {
    width: 50%;
    z-index: 56;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 1em;
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
                src={project.imgUrl}
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
              <h4 className='project__stack-title'>STACK:</h4>
              <h4>{project.stack}</h4>
            </div>
            <br></br>
            <h4>주요 기능</h4>
            <div className='project__desc'>
              <p>{project.desc}</p>
            </div>
          </div>
        </div>
      </ProjectModalBlock>
    </>
  );
};
