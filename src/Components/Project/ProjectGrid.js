import React from "react";
import styled from "styled-components";
import blogImg from "../../assets/images/마이블로그메인.png";
import jeogiImg from "../../assets/images/저기어때.png";
import startImg from "../../assets/images/스타트페이지.png";
import nwitImg from "../../assets/images/느위터1.png";

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
            object-fit: cover;
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
        background: rgba(0, 0, 0, 0.6);
        transition: 500ms;
        cursor: pointer;
        overflow: hidden;
        color: #fdfdfd;
        .project__more-title {
            font-size: 1.2rem;
            transition: 500ms;
            transform: translateY(-1000%);
        }

        &:hover {
            opacity: 1;

            .project__more-title {
                transform: translateY(80%);
            }
        }
    }
`;

export const ProjectGrid = ({ onClick }) => {
    const project = [
        {
            title: "Nwitter",
            img: nwitImg,
            num: 0,
        },

        {
            title: "My Blog",
            img: blogImg,
            num: 1,
        },
        {
            title: "스타트페이지",
            img: startImg,
            num: 2,
        },
        {
            title: "저기어때",
            img: jeogiImg,
            num: 3,
        },
    ];

    return (
        <>
            {project.map((pj, index) => (
                <ProjectGridBlock key={index}>
                    <div className="project__imgbox">
                        <img
                            className="project__img"
                            src={pj.img}
                            alt="프로젝트이미지"
                        />
                        <div
                            className="project__more"
                            data-title={pj.title}
                            onClick={onClick}>
                            <div className="project__more-title">
                                {pj.title}
                            </div>
                        </div>
                    </div>
                </ProjectGridBlock>
            ))}
        </>
    );
};
