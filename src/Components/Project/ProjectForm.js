import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import blogImg from "../../assets/images/마이블로그메인.png";
import blogImg2 from "../../assets/images/마이블로그태그.png";
import jeogiImg from "../../assets/images/저기어때.png";
import jeogiImg2 from "../../assets/images/저기어때2.png";
import jeogiImg3 from "../../assets/images/저기어때3.png";
import nwitImg from "../../assets/images/느위터1.png";
import nwitImg2 from "../../assets/images/느위터2.png";
import nwitImg3 from "../../assets/images/느위터3.png";
import nwitImg4 from "../../assets/images/느위터4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBlock = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    position: relative;
`;

const ProjectMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;

    @media all and (max-width: 768px) {
        grid-template-columns: repeat(1, 0.8fr);
        justify-content: center;
    }
`;

export const ProjectForm = () => {
    const [show, setShow] = useState(false);
    const [project, setProject] = useState({});

    const onClick = useCallback((e) => {
        const title = e.target.dataset.title;
        if (!title) {
            return;
        }
        title === "Nwitter" &&
            setProject({
                img: [nwitImg, nwitImg2, nwitImg3, nwitImg4],
                stack: "React, Redux, Redux-Saga, Firebase",
                desc: [
                    "회원가입/로그인",
                    "트윗등록",
                    "이미지업로드",
                    "좋아요/댓글",
                ],
                pageLink: "https://nwitterclone.netlify.app/",
                gitLink: "https://www.github.com/chkim116/nwitter",
            });
        title === "My Blog" &&
            setProject({
                img: [blogImg, blogImg2],
                stack: "React, NodeJS, MongoDB",
                desc: [
                    "실제 운영 中",
                    "MVC Patten",
                    "Passport&Jwt Token",
                    "React-quill / Pagination",
                    "CRUD",
                    "조회수 집계와 다양한 검색 기능",
                ],
                pageLink: "https://www.kormelon.cf",
                gitLink: "https://www.github.com/chkim116/myblog",
            });
        title === "저기어때" &&
            setProject({
                img: [jeogiImg, jeogiImg2, jeogiImg3],
                stack: "Html, Css, Javascript",
                desc: ["이미지 슬라이더", "실제로 여기어때 검색이 가능합니다."],
                pageLink: "https://chkim116.github.io/jeogi/",
                gitLink: "https://github.com/chkim116/jeogi",
            });

        setShow(true);
    }, []);

    const onClose = useCallback(() => {
        setShow(false);
    }, []);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [show]);

    return (
        <>
            <ProjectBlock className="Project">
                <h1>My Project</h1>
                <ProjectMenu>
                    <ProjectGrid show={show} onClick={onClick} />
                </ProjectMenu>
            </ProjectBlock>
            <ProjectModal show={show} onClick={onClose} project={project} />
        </>
    );
};
