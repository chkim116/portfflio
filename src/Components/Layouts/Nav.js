import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../../assets/images/증명사진.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

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

  .nav__items {
    display: flex;
    font-size: 14px;

    @media all and (max-width: 768px) {
      position: fixed;
      display: ${(props) => (props.show ? "block" : "none")};
      background: #fdfdfd;
      flex-direction: column;
      width: 100%;
      top: 54px;
      height: 350px;
      left: 0;
      align-items: center;
      text-align: center;

      .nav__items-list {
        margin: 0.4em 0.6em;
      }
    }
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
    height: 54px;
    align-items: center;

    .nav__title {
      font-size: 20px;
      margin-left: 0.5 em;
    }
    .nav__img {
      width: 35px;
      height: 35px;
      margin: 0 1em;
      object-fit: cover;
      border-radius: 50%;
      @media all and (max-width: 768px) {
        margin: 0;
      }
    }
  }
`;

const NavList = ({ navList, onClick }) => {
  return (
    <ul className='nav__items'>
      {navList.map((list, index) => (
        <li
          onClick={onClick}
          className='nav__items-list'
          data-ref={`${list}`}
          key={index}>
          {list}
        </li>
      ))}
    </ul>
  );
};

export const Nav = () => {
  const navList = ["Home", "About", "Skills", "Project", "Contact"];
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
      document.removeEventListener();
    };
    // eslint-disable-next-line
  }, []);

  const onNav = () => {
    !show ? setShow(true) : setShow(false);
  };

  const onClose = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <NavBlock bgColor={bgColor} show={show} onClick={onClose}>
      <div className='wrap__img'>
        <img className='nav__img' src={profile} alt='로고이미지' />
        <div className='nav__title'>Portfolio</div>
      </div>
      <NavList navList={navList} onClick={onClick} />
      <GiHamburgerMenu className='media__nav' onClick={onNav} size={24} />
    </NavBlock>
  );
};
