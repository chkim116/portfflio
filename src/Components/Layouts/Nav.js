import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/images/증명사진.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavList } from "./NavList";

const NavBlock = styled.nav`
    width: 100%;
    display: flex;
    position: fixed;
    height: 54px;
    z-index: 55;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.bgColor};
    transition: background 500ms;

    @media all and (max-width: 768px) {
        justify-content: space-between;
        padding: 0 1em;
    }

    .media__nav {
        display: none;
        @media all and (max-width: 768px) {
            display: block;
            cursor: pointer;
        }
    }
`;

const WrapImg = styled.div`
    display: flex;
    height: 54px;
    align-items: center;

    div {
        font-size: 20px;
        margin-left: 0.6em;
    }
    img {
        width: 35px;
        height: 35px;
        margin: 0 1em;
        object-fit: cover;
        border-radius: 50%;
        @media all and (max-width: 768px) {
            margin: 0;
        }
    }
`;

export const Nav = () => {
    const navList = ["Home", "Skills", "Project", "About", "Contact"];
    const [bgColor, setBgColor] = useState("");
    const [show, setShow] = useState(false);

    const onClick = useCallback((e) => {
        const ref = e.target.dataset.ref;
        const width = window.innerWidth;

        document.querySelector(`.${ref}`).scrollIntoView({
            behavior: "smooth",
            block: ref === "Project" || width < 769 ? "start" : "center",
        });
    }, []);

    const handleScrollIntoView = useCallback(() => {
        const scrollY = window.scrollY;
        scrollY > 54 ? setBgColor("#aad4da") : setBgColor("");
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", handleScrollIntoView);
        return () => {
            document.removeEventListener("scroll", handleScrollIntoView);
        };
        // eslint-disable-next-line
    }, []);

    const onNav = () => {
        setShow((prev) => !prev);
    };

    const onClose = () => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <NavBlock bgColor={bgColor} show={show} onClick={onClose}>
            <WrapImg>
                <img src={profile} alt="로고이미지" />
                <div>Portfolio</div>
            </WrapImg>
            <NavList show={show} navList={navList} onClick={onClick} />
            <GiHamburgerMenu className="media__nav" onClick={onNav} size={24} />
        </NavBlock>
    );
};
