import React, { useState } from "react";
import styled from "styled-components";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { SiBloglovin } from "react-icons/si";
import Axios from "axios";

const ContactBlock = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    min-height: 600px;
    text-align: center;
`;

const ContactContainer = styled.div`
    display: flex;
    margin: 2em 0;

    @media all and (max-width: 768px) {
        flex-direction: column;
        margin: 1em;
    }
`;

const ContactName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ContactIcons = styled.div`
    display: flex;
    padding: 1em;

    & > a {
        cursor: pointer;
        margin-right: 0.4em;

        &:hover {
            transform: scale(1.2);
            transition: 500ms;
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
`;

const Input = styled.input`
    width: 50%;
    padding: 0.6em;
    border-radius: 12px;
    margin: 0.5em 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);

    @media all and (max-width: 768px) {
        width: 80%;
    }
`;

const Button = styled.button`
    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
    border: none;
    cursor: pointer;
    padding: 0.5em;
    border-radius: 33px;
    font-size: 12px;

    &:hover {
        color: rgba(0, 0, 0, 0.2);
    }
`;

const Textarea = styled.textarea`
    width: 50%;
    padding: 0.6em;
    border-radius: 12px;
    margin: 0.5em 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
    min-height: 250px;
    resize: none;
    outline: none;
    @media all and (max-width: 768px) {
        min-height: 180px;
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
        const sendMail = () => {
            Axios.post("https://portbe.herokuapp.com/mail", sendMe);
            setLoading(false);
            alert("메일 전송이 성공적으로 이뤄졌습니다!");
        };
        sendMail();
        setSendMe({
            username: "",
            tel: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            {loading && <div className="loading__box"></div>}
            <ContactBlock>
                <h1 className="portfoilo__title">Contact Me</h1>
                <ContactContainer className="Contact">
                    <ContactName>
                        <table>
                            <tbody>
                                <tr>
                                    <td>EMAIL.</td>
                                    <td>cskim132@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>PHONE.</td>
                                    <td>010-2629-9315</td>
                                </tr>
                            </tbody>
                        </table>
                        <ContactIcons className="contact__icons">
                            <a href="https://instargram.com" target="blank">
                                <AiOutlineInstagram
                                    className="contact"
                                    size={44}
                                    fill="pink"
                                />
                            </a>
                            <a
                                href="https://github.com/chkim116"
                                target="blank">
                                <AiFillGithub
                                    className="contact"
                                    size={44}
                                    fill="purple"
                                />
                            </a>

                            <a href="https://kormelon.cf" target="blank">
                                <SiBloglovin
                                    className="contact"
                                    size={44}
                                    fill="green"
                                />
                            </a>
                        </ContactIcons>
                    </ContactName>
                    <ContactFormBlock onChange={onChange} onSubmit={onSubmit}>
                        <Input
                            type="text"
                            required
                            placeholder="Name *"
                            name="username"
                            value={sendMe.username}
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={sendMe.email}
                        />
                        <Input
                            type="tel"
                            name="tel"
                            placeholder="PhoneNumber"
                            value={sendMe.tel}
                        />
                        <Textarea
                            type="text"
                            required
                            name="message"
                            placeholder="Message *"
                            value={sendMe.message}
                        />
                        <Button type="submit">SEND ME</Button>
                    </ContactFormBlock>
                </ContactContainer>
            </ContactBlock>
        </>
    );
};
