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

    .section {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 1920px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        .section__wrap-img {
            background: #ffffff;
            position: absolute;
            object-fit: cover;
            width: 100%;
            height: 100%;
            opacity: ${(props) => props.opacity};
            top: 0;
            z-index: 3;
        }

        .section__img {
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            max-width: 1920px;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
        }

        .section__img-text {
            z-index: 4;
            position: absolute;
            bottom: 5%;
            font-weight: bold;
            left: 5%;
            font-family: "NeoDunggeunmo";
            opacity: ${(props) => props.textOpacity};

            .img__title {
                font-size: 20px;
                margin-bottom: 0.5em;

                @media all and (max-width: 768px) {
                    font-size: 16px;
                }
            }

            .img__desc {
                font-size: 16px;

                @media all and (max-width: 768px) {
                    font-size: 12px;
                }
            }
        }
    }
`;

export const MainForm = ({ opacity, textOpacity }) => {
    return (
        <MainBlock opacity={opacity} textOpacity={textOpacity} className="Home">
            <section className="section">
                <div className="section__wrap-img"></div>
                <img
                    className="section__img"
                    src={myimg1}
                    alt="메인이미지"></img>
                <div className="section__img-text">
                    <div className="img__title">I'm FrontEnd Developer</div>
                    <div className="img__desc">
                        매번 다른 세상을 향해 나아가고픈 신입 개발자입니다.
                    </div>
                </div>
            </section>
        </MainBlock>
    );
};
