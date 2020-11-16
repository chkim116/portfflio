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
`;

const WrapProject = styled.div`
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    display: ${(props) => (!props.show ? "none" : "block")};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
`;

const ProjectModalBox = styled.div`
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
`;

const ProjectModalForm = styled.div`
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

    & > span {
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
`;

const ProjectModalImgBox = styled.div`
    position: relative;
    width: 80%;
    top: 2em;
    margin: 0 auto 1.5em auto;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ProjectLink = styled.div`
    padding: 1em;
    font-size: 14px;

    & > a {
        padding: 0.5em 1em;
        transition: 500ms;
        cursor: pointer;

        &:hover {
            border-bottom: 1px solid black;
        }
    }
`;

const ProjectStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
`;

const ProjectDesc = styled.div`
    width: 80%;
    z-index: 56;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 1em;
    align-items: center;
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
                <WrapProject show={show} onClick={onClick}></WrapProject>
                <ProjectModalBox>
                    <ProjectModalForm>
                        <span className="project__close" onClick={onClick}>
                            X
                        </span>
                        {project.img && (
                            <Slider {...settings}>
                                {project.img.map((img, index) => (
                                    <ProjectModalImgBox key={index}>
                                        <img
                                            src={img}
                                            alt="프로젝트상세이미지"
                                        />
                                    </ProjectModalImgBox>
                                ))}
                            </Slider>
                        )}
                        <ProjectLink>
                            <a href={project.pageLink} target="blank">
                                Go Page
                            </a>
                            <a href={project.gitLink} target="blank">
                                Go Github
                            </a>
                        </ProjectLink>

                        <ProjectStack>
                            <div>STACK: </div>
                            <div>{project.stack}</div>
                        </ProjectStack>
                        <ProjectDesc>
                            <div>
                                {project.desc &&
                                    project.desc.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                            </div>
                        </ProjectDesc>
                    </ProjectModalForm>
                </ProjectModalBox>
            </ProjectModalBlock>
        </>
    );
};
