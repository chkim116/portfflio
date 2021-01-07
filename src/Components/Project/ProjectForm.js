import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectModal } from "./ProjectModal";
import blogImg from "../../assets/images/blog1.png";
import blogImg2 from "../../assets/images/blog2.png";
import blogImg3 from "../../assets/images/blog3.png";
import blogImg4 from "../../assets/images/blog4.png";
import blogImg5 from "../../assets/images/blog5.png";
import nwitImg from "../../assets/images/nwitter1.png";
import nwitImg2 from "../../assets/images/nwitter2.png";
import nwitImg3 from "../../assets/images/nwitter3.png";
import nwitImg4 from "../../assets/images/nwitter4.png";
import bookImg from "../../assets/images/bookdb1.png";
import bookImg2 from "../../assets/images/bookdb2.png";
import bookImg3 from "../../assets/images/bookdb3.png";
import bookImg4 from "../../assets/images/bookdb4.png";
import bookImg5 from "../../assets/images/bookdb5.png";
import bookImg6 from "../../assets/images/bookdb6.png";
import startImg from "../../assets/images/start.png";
import startImg2 from "../../assets/images/start2.png";
import startImg3 from "../../assets/images/start3.png";
import corona from "../../assets/images/stat.png";
import jeogi from "../../assets/images/저기어때.png";
import jeogi2 from "../../assets/images/저기어때2.png";
import jeogi3 from "../../assets/images/저기어때3.png";
import gte from "../../assets/images/gte1.png";
import gte2 from "../../assets/images/gte2.png";
import jaswiki1 from "../../assets/images/jaswiki1.png";
import jaswiki2 from "../../assets/images/jaswiki2.png";
import jaswiki3 from "../../assets/images/jaswiki3.png";
import jaswiki4 from "../../assets/images/jaswiki4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectBlock = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 3em;
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
        title === "Jaswiki" &&
            setProject({
                img: [jaswiki1, jaswiki2, jaswiki3, jaswiki4],
                stack:
                    "Next, Typescript, Redux/Saga, Express, Emotion, EC2, MongoDB",
                desc: [
                    "Jaswiki는 자바스크립트 위키피디아로, 자바스크립트를 사용하는 개발자들이 코드와 예제들을 마음껏 문서화시키고",
                    "허락된 게시물에 대해 자유롭게 편집할 수 있도록 지원하는 사이트입니다.",
                    "상세한 예제들로 가이드함으로써 이전에 해보지 못한 기능을 추가하려는 개발자들이 영어 검색이 아닌 한글 검색으로도 최신의 정보를 얻을 수 있고,",
                    "손쉬운 접근이 가능하도록 만들고자 했습니다.",
                ],
                pageLink: "https://www.jaswiki.com/",
                gitLink: "https://www.github.com/chkim116/jaswiki",
            });
        title === "GTE" &&
            setProject({
                img: [gte, gte2],
                stack: "Next, Emotion, Vercel",
                desc: [
                    "Get To Emoji는 이모지를 손쉽게 검색하고, 빠르게 사용하기 위해 만든 웹사이트입니다.",
                    "이전엔 이모지를 쓰려고 구글에 검색해 가져오는 방식을 취했지만, 이 사이트를 사용하며 효율적인 측면이 향상됐습니다.",
                    "검색된 이모지를 클릭하면 자동으로 클립보드에 복사 됩니다.",
                ],
                pageLink: "https://gte.vercel.app/",
                gitLink: "https://www.github.com/chkim116/gte",
            });

        title === "BookDB" &&
            setProject({
                img: [
                    bookImg,
                    bookImg2,
                    bookImg3,
                    bookImg4,
                    bookImg5,
                    bookImg6,
                ],
                stack:
                    "Next, Typescript, Redux/Saga, Express, Emotion, Heroku&Netlify, MongoDB",

                desc: [
                    "북디비의 시작은 다양한 책들을 간단하게 리뷰할 수 있는 사이트가 있었으면 좋겠다는 생각에서부터 시작됐습니다.",
                    "북디비는 실제 교보문고에 있는 베스트셀러들을 손쉽게 조회할 수 있고, 네이버 검색을 활용해 원하는 책들을 검색할 수 있습니다.",
                    "또한 본인이 읽었던 책을 골라 평점을 매기고, 블로그와 같은 형식으로 리뷰할 수 있습니다.",
                    "서버사이드렌더링을 지원하는 Next를 이용해 검색 엔진 최적화를 위해 노력하였습니다.",
                ],
                pageLink: "https://bookdb.cf/",
                gitLink: "https://www.github.com/chkim116/bookdb",
            });
        title === "Nwitter" &&
            setProject({
                img: [nwitImg, nwitImg2, nwitImg3, nwitImg4],
                stack:
                    "React, Redux/Saga, Styled-Components, Firebase, Netlify",
                desc: [
                    "리덕스와 리덕스 사가, 파이어베이스를 배워 익힌 지식을 응용하고자 시작된 트위터 클론 코딩입니다.",
                    "느위터는 간단한 트윗 작성 및 게시 기능, 그리고 좋아요와 댓글 작성이 가능합니다.",
                ],
                pageLink: "https://nwitterclone.netlify.app/",
                gitLink: "https://www.github.com/chkim116/nwitter",
            });
        title === "My Blog" &&
            setProject({
                img: [blogImg, blogImg2, blogImg3, blogImg4, blogImg5],
                stack: "React, Redux, Express, Scss, Heroku&Netlify, MongoDB",
                desc: [
                    "마이블로그 프로젝트의 동기는 현재 운영 중인 네이버 블로그와는 별개로,",
                    "직접 블로그를 개발해 운영하고 싶은 욕구에서부터 출발하였습니다.",
                    "이 블로그는 블로그에 있는 다양한 기능들을 대부분 지원합니다.",
                    "포스팅을 해시태그와 함께 작성하고 게시된 포스트를 검색할 수 있으며 블로그 방문자 수가 집계됩니다.",
                    "카테고리를 임의대로 생성하고 수정하고 삭제할 수 있으며, 카테고리 별로 게시글을 볼 수 있습니다.",
                ],
                pageLink: "https://www.kormelon.cf",
                gitLink: "https://www.github.com/chkim116/myblog",
            });
        title === "Starter Page" &&
            setProject({
                img: [startImg, startImg2, startImg3],
                stack: "Next, Redux, Styled-Components, Netlify, MongoDB",
                desc: [
                    "검색을 위해 네이버나 구글에 접근하는 중간 과정을 없애고",
                    "북마크 추가 및 투두리스트 작성까지 할 수 있는 복합적인 페이지를 만들고자 했습니다.",
                    "스타터 페이지는 기본적으로 Naver, Daum, Google 검색이 가능하며. 왼쪽 todolist 버튼을 클릭해 투두리스트 작성할 수 있습니다.",
                    "또한 자주 사용하는 페이지를 북마크로 추가할 수 있어 접근이 용이하며, 로컬스토리지로 관리하였기 때문에 모든 데이터는 항상 유지가 됩니다.",
                ],
                pageLink: "https://starte.netlify.app/",
                gitLink: "https://github.com/chkim116/start_page",
            });
        title === "Corona Data" &&
            setProject({
                img: [corona],
                stack: "HTML, CSS, JS",
                desc: [
                    "Corona data 페이지는 오픈되어있는 코로나 질병 현황 API를 활용해 현재 환자 수, 신규 환자 수 등의 데이터들을 눈으로도 쉽게 확인합니다.",
                    "오픈 API를 활용한 전세계 코로나 현황 데이터 표를 보여줍니다.",
                ],
                pageLink: "https://chkim116.github.io/corona_data/",
                gitLink: "https://github.com/chkim116/corona_data",
            });
        title === "저기 어때" &&
            setProject({
                img: [jeogi, jeogi2, jeogi3],
                stack: "HTML, CSS, JS",
                desc: [
                    "HTML, CSS, JS를 배우며 익힌 지식들을 응용하고자 여기어때 사이트를 클론 코딩 하였습니다.",
                    "바닐라 자바스크립트를 주축으로 라이브러리 없는 순수한 슬라이더를 구현했고",
                    "HTML과 CSS를 활용해 메뉴의 후버 애니메이션 등을 구현해 보다 동적인 사이트를 만들고자 노력했습니다.",
                ],
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
