import React from "react";
import styled from "styled-components";

const NavItems = styled.ul`
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
    }
`;

const NavItemList = styled.li`
    margin: 0.4em 0.6em;
    padding: 1em;
    cursor: pointer;

    &:hover {
        background: #b9dedf;
        border-radius: 12px;
    }
`;

export const NavList = ({ navList, onClick }) => {
    return (
        <NavItems>
            {navList.map((list, index) => (
                <NavItemList onClick={onClick} data-ref={`${list}`} key={index}>
                    {list}
                </NavItemList>
            ))}
        </NavItems>
    );
};
