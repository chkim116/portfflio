import React from "react";
import styled from "styled-components";
import profile from "../../assets/images/증명사진.jpg";

const AboutBlock = styled.div`
  width: 100%;
  margin: 5em 0;

  .about__wrap {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    border: 1px solid black;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin: 0 auto;

    @media all and (max-width: 400px) {
      width: 200px;
      height: 200px;
    }
  }

  .about__profile-box {
    width: 150px;
    height: 150px;
    position: relative;
    margin-bottom: 20px;

    @media all and (max-width: 400px) {
      width: 80px;
      height: 80px;
    }
  }

  .about__wrap-img {
    width: 150px;
    height: 150px;
    margin: 0 auto;

    @media all and (max-width: 400px) {
      width: 80px;
      height: 80px;
    }
  }

  .about__profile {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 0.2em;
    object-fit: cover;
    border: 1px solid black;
  }
  .about__profile-desc {
    position: relative;
  }
`;

export const AboutForm = () => {
  return (
    <AboutBlock className="About">
      <div className="about__wrap">
        <div className="about__profile-box">
          <div className="about__wrap-img">
            <img className="about__profile" src={profile} alt="증명사진" />
          </div>
        </div>
        <div
          style={{ background: "black", width: "100%", height: "1px" }}
        ></div>
        <br />
        <div className="about__profile-desc">
          <table>
            <tr>
              <td>이름:</td>
              <td>김창회</td>
            </tr>
            <tr>
              <td>생년월일:</td>
              <td>96.01.23</td>
            </tr>
            <tr>
              <td>학력:</td>
              <td>백석대학교</td>
            </tr>
          </table>
        </div>
      </div>
    </AboutBlock>
  );
};
