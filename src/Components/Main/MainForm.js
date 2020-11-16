import React from "react";
import styled from "styled-components";
import myimg1 from "../../assets/images/myimg1.jpg";

const MainBlock = styled.main`
    width: 100%;
    background: #ffffff;
    position: relative;
    top: 54px;
    padding-bottom: 50%;
    min-height: 316px;
    margin-bottom: 3em;

    @media all and (max-width: 768px) {
        padding-bottom: 50%;
    }
`;

const Section = styled.section`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 1920px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`;

const SectionImgBox = styled.div`
    background: #ffffff;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: ${(props) => props.opacity};
    top: 0;
    z-index: 3;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        max-width: 1920px;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;

const SectionImgText = styled.div`
    z-index: 4;
    position: absolute;
    bottom: 5%;
    font-weight: bold;
    left: 5%;
    font-family: "NeoDunggeunmo";
    opacity: ${(props) => props.textOpacity};

    & > div:nth-child(1) {
        font-size: 20px;
        margin-bottom: 0.5em;

        @media all and (max-width: 768px) {
            font-size: 16px;
        }
    }

    & > div:nth-child(2) {
        font-size: 16px;

        @media all and (max-width: 768px) {
            font-size: 12px;
        }
    }
`;

export const MainForm = ({ opacity, textOpacity, img }) => {
    return (
        <MainBlock className="Home">
            <Section>
                <SectionImgBox opacity={opacity}>
                    <img src={myimg1} ref={img} alt="메인이미지"></img>
                </SectionImgBox>
                <SectionImgText textOpacity={textOpacity}>
                    <div>I'm FrontEnd Developer</div>
                    <div>매번 다른 세상을 향해 나아가고픈 개발자입니다.</div>
                </SectionImgText>
            </Section>
        </MainBlock>
    );
};
