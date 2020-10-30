import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

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
    max-width: 1000px;
    height: auto;
    display: flex;
    width: 75%;
    height: 75%;
    z-index: 55;
    transform: translate(-50%, -50%);

    @media all and (max-width: 768px) {
      width: 80%;
      height: 55%;
    }

    .project__modal {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 14px;
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

      .slick-prev {
        left: 5px;
        top: 50%;
        z-index: 10;

        &::before {
          color: #dbdbdb;
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
      .slick-next {
        right: 15px;
        top: 50%;
        z-index: 10;
        &::before {
          color: #dbdbdb;
          font-size: 1.8rem;
          font-weight: bold;
        }
      }

      @media all and (max-width: 480px) {
        font-size: 12px;
      }

      .project__close {
        cursor: pointer;
        top: 3px;
        right: 2%;
        position: fixed;
        z-index: 33;
        line-height: 30px;
        width: 30px;
        height: 30px;

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
    font-size: 14px;

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
    width: 80%;
    top: 2em;
    margin: 0 auto 1.5em auto;

    .project__modal-img {
      width: 100%;
      height: 100%;
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
    width: 80%;
    z-index: 56;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 1em;
    aling-items: center;
  }
`;

export const ProjectModal = ({ show, onClick, project }) => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <ProjectModalBlock show={show}>
        <div className='wrap__project' onClick={onClick}></div>
        <div className='project__modal-box'>
          <div className='project__modal'>
            <span className='project__close' onClick={onClick}>
              X
            </span>
            {project.img && (
              <Slider {...settings}>
                {project.img.map((img, index) => (
                  <div key={index} className='project__modal-imgbox'>
                    <img
                      className='project__modal-img'
                      src={img}
                      alt='프로젝트상세이미지'
                    />
                  </div>
                ))}
              </Slider>
            )}
            <div className='project__link'>
              <a
                href={project.pageLink}
                target='blank'
                className='project__link-btn'>
                Go Page
              </a>
              <a
                href={project.gitLink}
                target='blank'
                className='project__link-btn'>
                Go Github
              </a>
            </div>
            <div className='project__stack'>
              <div className='project__stack-title'>STACK: </div>
              <div className='project__stack-icons'>{project.stack}</div>
            </div>
            <div className='project__desc'>
              <div className='project__desc-text'>
                {project.desc &&
                  project.desc.map((text, index) => (
                    <li key={index}>{text}</li>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </ProjectModalBlock>
    </>
  );
};
