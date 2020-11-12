import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import blogImg from "../../assets/images/마이블로그메인.png";
import blogImg2 from "../../assets/images/마이블로그태그.png";
import jeogiImg from "../../assets/images/저기어때.png";
import jeogiImg2 from "../../assets/images/저기어때2.png";
import jeogiImg3 from "../../assets/images/저기어때3.png";
import startImg from "../../assets/images/스타트페이지.png";
import startImg2 from "../../assets/images/스타트페이지2.png";
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

    .project__menu {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5em;

        @media all and (max-width: 768px) {
            grid-template-columns: repeat(1, 0.8fr);
            justify-content: center;
        }
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
                    "리액트와 파이어베이스로 구성된 트위터 클론, 느위터입니다.",
                    "리덕스와 리덕스 사가를 이용해 상태관리를 했으며",
                    "리덕스 사가를 이용한 비동기 처리에 대한 이해도 및",
                    "파이어베이스에 대한 이해도를 높일 수 있었습니다.",
                    "트윗등록/좋아요/댓글/이미지업로드가 구현되어있습니다.",
                ],
                pageLink: "https://nwitterclone.netlify.app/",
                gitLink: "https://www.github.com/chkim116/nwitter",
            });
        title === "My Blog" &&
            setProject({
                img: [blogImg, blogImg2],
                stack: "React, NodeJS",
                desc: [
                    "리액트와 노드JS를 활용해 만든 블로그로써 실제로 운영 중인 블로그입니다.",
                    "DB의 설계부터 프론트 분야, 배포에 이르기까지 모든 단계를 도맡아 함으로써",
                    "프론트-백 간의 관계를 한층 깊게 생각할 수 있었으며",
                    "더 나아가 백지장도 맞들면 낫다고, 협업의 중요성 및",
                    "아키텍처의 필요성, 간략한 상태관리(ex 리덕스)의 필요성들이 느껴졌던 프로젝트였습니다.",
                    "Jwt 토큰을 활용한 로그인 인증과 리액트 훅과 리덕스를 이용해",
                    "게시물의 등록, 수정, 삭제 등을 구현해냈고",
                    "React-quill 텍스트 에디터, 게시글 Pagination을 구현했습니다.",
                    "또한 조회수 기록과 검색 기능, 게시글마다의 카테고리를 갖췄습니다.",
                ],
                pageLink: "https://www.kormelon.cf",
                gitLink: "https://www.github.com/chkim116/myblog",
            });
        title === "저기어때" &&
            setProject({
                img: [jeogiImg, jeogiImg2, jeogiImg3],
                stack: "Html, Css, Javascript",
                desc: [
                    "HTML, CSS, Vanila JS를 활용한 여기어때 클론코딩입니다.",
                    "바닐라 자바스크립트를 활용해 이미지 슬라이더를 구현했습니다.",
                    "실제로 여기어때 검색이 가능합니다.",
                ],
                pageLink: "https://chkim116.github.io/jeogi/",
                gitLink: "https://github.com/chkim116/jeogi",
            });
        title === "스타트페이지" &&
            setProject({
                img: [startImg, startImg2],
                stack: "Next JS",
                desc: [
                    "Next JS를 이용해 만든 브라우저의 스타트 페이지입니다.",
                    "리액트에서의 로컬스토리지의 활용 방법과 Next JS안에서 리덕스를 사용하는 방법을 알 수 있었습니다.",
                    "DEL버튼을 클릭하면 북마크를 삭제할 수 있고 '새 창으로 열기'를 눌러 새 창으로 열 수 있습니다.",
                    "검색 바에서 네이버/다음/구글 옵션을 선택하여 사이트를 바꿔 검색합니다.",
                    "사용자의 위치를 가져와 날씨 API를 보여주고 로컬 스토리지에 북마크 URL를 저장하여 항상 유지합니다.",
                ],
                pageLink: "https://starte.netlify.app/",
                gitLink: "https://github.com/chkim116/start_page",
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
            <ProjectBlock>
                <h1 className="portfoilo__title Project">My Project</h1>
                <div className="project__menu">
                    <ProjectGrid show={show} onClick={onClick} />
                </div>
            </ProjectBlock>
            <ProjectModal show={show} onClick={onClose} project={project} />
        </>
    );
};
