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

  .about__wrap {
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 350px;
    border-right: 1px solid black;
    justify-content: center;
    align-items: center;
    padding: 1em;

    @media all and (max-width: 768px) {
      border-right: none;
    }
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
    border: 4px solid #e574a4;
  }

  .about__profile-desc {
    position: relative;
    width: 280px;
    @media all and (max-width: 768px) {
      border-bottom: 1px solid black;
    }
  }

  .about__career {
    padding: 2em;
    text-align: center;
    .about__career-title {
      padding: 0.8em;
    }
    .about__career-desc {
      padding-bottom: 0.2em;
      border-bottom: 1px solid black;
    }
  }
`;

export const AboutForm = () => {
  return (
    <AboutBlock className='About'>
      <h1 className='portfoilo__title '>About</h1>
      <div className='about'>
        <div className='about__wrap'>
          <div className='about__profile-box'>
            <div className='about__wrap-img'>
              <img className='about__profile' src={profile} alt='증명사진' />
            </div>
          </div>

          <br />
          <div className='about__profile-desc'>
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
                <tr>
                  <td>Education</td>
                  <td>백석대학교 사회복지학부</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='about__career'>
          <h3>활동 사항 및 경력</h3>
          <br></br>
          <div>
            <table>
              <h3 className='about__career-title'>활동 사항</h3>
              <tbody>
                <tr>
                  <td className='about__career-desc'>
                    분당서현청소년수련관 자치동아리 "따봉"
                  </td>
                </tr>
                <tr>
                  <td>
                    <small>2018.03~ 단장역임</small>
                  </td>
                </tr>
              </tbody>
              <h3 className='about__career-title'>경력</h3>
              <tbody>
                <tr>
                  <td className='about__career-desc'>분당정자청소년수련관</td>
                </tr>
                <tr>
                  <td>
                    <small>2019.06~08 실습</small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AboutBlock>
  );
};
