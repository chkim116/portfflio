import React, { useCallback, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/images/증명사진.jpg";

const NavBlock = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  height: 54px;
  z-index: 55;
  align-items: center;
  justify-content: space-around;
  background: ${(props) => props.bgColor};
  font-weight: bold;

  .nav__items {
    display: flex;

    .nav__items-list {
      padding: 1em;
      cursor: pointer;
      @media all and (max-width: 768px) {
        padding: 1em 0.5em;
      }
      &:hover {
        background: #b9dedf;
        border-radius: 12px;
      }
    }
  }

  .wrap__img {
    display: flex;
    height: 54px;
    align-items: center;
    @media all and (max-width: 768px) {
      padding-left: 1em;
    }
    .nav__img {
      width: 35px;
      height: 35px;
      margin: 0 1em;
      object-fit: cover;
      border-radius: 50%;
    }

    .nav__title {
      @media all and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const NavList = ({ navList, onClick }) => {
  return (
    <ul className="nav__items">
      {navList.map((list, index) => (
        <li
          onClick={onClick}
          className="nav__items-list"
          data-ref={`${list}`}
          key={index}
        >
          {list}
        </li>
      ))}
    </ul>
  );
};

export const Nav = () => {
  const navList = ["Home", "About", "Skills", "Project", "Contact"];
  const onClick = useCallback((e) => {
    const ref = e.target.dataset.ref;
    const width = window.innerWidth;
    document.querySelector(`.${ref}`).scrollIntoView({
      behavior: "smooth",
      block: ref === "Project" || width < 769 ? "start" : "center",
    });
  }, []);

  const [bgColor, setBgColor] = useState("");

  document.addEventListener(
    "scroll",
    useCallback(() => {
      const scrollY = window.scrollY;
      scrollY > 54 ? setBgColor("#aad4da") : setBgColor("");
    }, [])
  );

  return (
    <NavBlock bgColor={bgColor}>
      <div className="wrap__img">
        <img className="nav__img" src={profile} alt="로고이미지" />
        <h4 className="nav__title"> 김창회의 포트폴리오</h4>
      </div>
      <NavList navList={navList} onClick={onClick} />
    </NavBlock>
  );
};
