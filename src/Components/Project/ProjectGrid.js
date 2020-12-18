import React from "react";
import styled from "styled-components";
import blogImg from "../../assets/images/blog1.png";
import nwitImg from "../../assets/images/nwitter1.png";
import bookImg from "../../assets/images/bookdb1.png";
import startImg from "../../assets/images/start.png";
import corona from "../../assets/images/stat.png";
import jeogi from "../../assets/images/저기어때.png";

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
            title: "BookDB",
            img: bookImg,
        },
        {
            title: "Nwitter",
            img: nwitImg,
        },

        {
            title: "My Blog",
            img: blogImg,
        },
        { title: "Starter Page", img: startImg },
        { title: "Corona Data", img: corona },
        { title: "저기 어때", img: jeogi },
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
