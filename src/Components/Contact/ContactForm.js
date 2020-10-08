import React from "react";
import styled from "styled-components";

const ContactBlock = styled.div`
  width: 100%;
  text-align: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContactForm = () => {
  return (
    <ContactBlock className="Contact">
      <h2>반갑습니다</h2>
      <h4>dudnqnfqlc@naver.com</h4>
      <h4>010-2629-9315</h4>
    </ContactBlock>
  );
};
