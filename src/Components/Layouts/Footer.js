import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  padding: 4em;
`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBlock>
      <hr></hr>
      <h4>&copy; {year} Changhoe-Kim</h4>
    </FooterBlock>
  );
};
