import React from "react";
import styled from "styled-components";
import profile from "../../assets/images/증명사진.jpg";

const AboutBlock = styled.div`
    width: 100%;
    margin-top: 3em;
    .about {
        display: flex;
        width: 100%;
        justify-content: center;
        @media all and (max-width: 768px) {
            flex-direction: column;
            align-items: center;
        }
    }
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    justify-content: center;
    align-items: center;
    padding: 1em;

    @media all and (max-width: 400px) {
        width: 200px;
        height: 200px;
    }
`;

const AboutImgBox = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    margin-bottom: 20px;

    @media all and (max-width: 400px) {
        width: 80px;
        height: 80px;
    }

    & > div {
        width: 150px;
        height: 150px;
        margin: 0 auto;

        @media all and (max-width: 400px) {
            width: 80px;
            height: 80px;
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 0.2em;
            object-fit: cover;
            border: 4px solid #e574a4;
        }
    }
`;

const AboutProfile = styled.div`
    position: relative;
    width: 280px;

    & > table {
        margin: 0 auto;
    }
    @media all and (max-width: 768px) {
        border-bottom: 1px solid black;
    }
`;

export const AboutForm = () => {
    return (
        <AboutBlock className="About">
            <h1 className="portfoilo__title ">About</h1>
            <div className="about">
                <AboutContainer>
                    <AboutImgBox>
                        <div>
                            <img src={profile} alt="증명사진" />
                        </div>
                    </AboutImgBox>

                    <AboutProfile>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>김창회</td>
                                </tr>
                                <tr>
                                    <td>Birth</td>
                                    <td>96.01.23</td>
                                </tr>
                            </tbody>
                        </table>
                    </AboutProfile>
                </AboutContainer>
            </div>
        </AboutBlock>
    );
};
