import React from "react";
import styled from "styled-components";
import blogImg from "../../assets/images/마이블로그메인.png";
import jeogiImg from "../../assets/images/저기어때.png";
import nwitImg from "../../assets/images/느위터1.png";

const ProjectGridBlock = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
`;

const ProjectImgBox = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    margin-top: 1em;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 0.3em;
        object-fit: cover;
    }
`;

const ProjectMore = styled.div`
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
    & > div {
        font-size: 1.2rem;
        transition: 500ms;
        transform: translateY(-1000%);
    }

    &:hover {
        opacity: 1;

        & > div {
            transform: translateY(80%);
        }
    }
`;

export const ProjectGrid = ({ onClick }) => {
    const project = [
        {
            title: "Nwitter",
            img: nwitImg,
        },

        {
            title: "My Blog",
            img: blogImg,
        },

        {
            title: "저기어때",
            img: jeogiImg,
        },
    ];

    return (
        <>
            {project.map((pj, index) => (
                <ProjectGridBlock key={index}>
                    <ProjectImgBox>
                        <img src={pj.img} alt="프로젝트이미지" />
                        <ProjectMore data-title={pj.title} onClick={onClick}>
                            <div>{pj.title}</div>
                        </ProjectMore>
                    </ProjectImgBox>
                </ProjectGridBlock>
            ))}
        </>
    );
};
