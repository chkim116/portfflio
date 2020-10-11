import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 4em;
  border-top: 1px solid black;
`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBlock>
      <div>&copy; {year} Changhoe-Kim</div>
    </FooterBlock>
  );
};
