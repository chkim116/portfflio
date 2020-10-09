import React, { useState } from "react";
import styled from "styled-components";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import Axios from "axios"

const ContactBlock = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 600px;
  text-align: center;

  .contact__form {
    display: flex;
    margin: 2em 0;
    @media all and (max-width: 768px) {
      flex-direction: column;
      margin: 1em;
    }
  }

  .contact__name {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .contact__icons {
    display: flex;
    padding: 1em;

    .contact__instar {
      cursor: pointer;
      margin-right: 0.4em;
      &:hover {
        transform: scale(1.2);
        transition: 500ms;
      }
    }

    .contact__git {
      cursor: pointer;
      margin-left: 0.4em;
      &:hover {
        transform: scale(1.2);
        transition: 500ms;
      }
    }
  }
`;

const ContactFormBlock = styled.form`
  max-width: 760px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 768px) {
    border-top: 1px solid black;
    padding-top: 1em;
    border-left: none;
  }

  .contact__form-input {
    width: 50%;
    padding: 0.6em;
    border: 1px solid black;
    margin: 0.5em 0;

    &.btn {
      cursor: pointer;
      border-radius: 33px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      &:hover {
        background: #b9dedf;
        color: #ffffff;
        font-weight: bold;
      }
    }

    &.textarea {
      min-height: 250px;
      resize: none;
      @media all and (max-width: 768px) {
        min-height: 180px;
      }
    }
  }
`;

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [sendMe, setSendMe] = useState({
    username: "",
    tel: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSendMe({ ...sendMe, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const sendMail = async () => {
      try {
        await Axios.post("/mail", sendMe);
      } catch (err) {
        console.log(err);
        alert("알 수 없는 오류 전송실패입니다.");
      }
      setLoading(false)
    };
    sendMail();
  };

  return (
    <>
      {loading && <div className="loading__title">전송 중입니다.</div>}
      <ContactBlock>
        <h1 className="portfoilo__title">Contact Me</h1>
        <div className="contact__form Contact">
          <div className="contact__name">
            <table>
              <tbody>
                <tr>
                  <td>이메일</td>
                  <td>cskim132@gmail.com</td>
                </tr>
                <tr>
                  <td>전화번호</td>
                  <td>010-2629-9315</td>
                </tr>
              </tbody>
            </table>
            <div className="contact__icons">
              <a href="https://instargram.com" target="blank">
                <AiOutlineInstagram
                  className="contact__instar"
                  size={44}
                  fill="pink"
                />
              </a>
              <a href="https://github.com/chkim116" target="blank">
                <AiFillGithub
                  className="contact__git"
                  size={44}
                  fill="purple"
                />
              </a>
            </div>
          </div>
          <ContactFormBlock onChange={onChange} onSubmit={onSubmit}>
            <input
              className="contact__form-input"
              type="text"
              required
              placeholder="Name *"
              name="username"
            />
            <input
              className="contact__form-input"
              type="email"
              name="email"
              placeholder="Email *"
            />
            <input
              className="contact__form-input"
              type="tel"
              name="tel"
              placeholder="PhoneNumber *"
            />
            <textarea
              className="contact__form-input textarea"
              type="text"
              required
              name="message"
              placeholder="Message *"
            />
            <input
              className="contact__form-input btn"
              type="submit"
              value="SEND ME"
            />
          </ContactFormBlock>
        </div>
      </ContactBlock>
    </>
  );
};
