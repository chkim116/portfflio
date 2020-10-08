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

      &:hover {
        background: #b9dedf;
        border-radius: 12px;
      }
    }
  }

  .wrap__img {
    display: flex;

    .nav__img {
      width: 35px;
      height: 35px;
      margin: 1em;
      object-fit: cover;
      border-radius: 50%;
    }

    .nav__title {
      line-height: 24px;
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
    document
      .querySelector(`.${e.target.dataset.ref}`)
      .scrollIntoView({ behavior: "smooth", block: "center" });
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
