import React from "react";
import styled from "styled-components";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextDotJs,
    SiMongodb,
    SiFirebase,
    SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const WrapSkill = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
`;

const SkillsBlock = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    position: relative;
    justify-content: center;

    @media all and (max-width: 768px) {
        flex-direction: column;
    }
`;

const SkillsBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`;

const WrapSkills = styled.div`
    width: 33%;
    padding: 1em;
    display: flex;

    &:nth-child(2),
    &:nth-child(3) {
        border-right: 1px solid black;

        @media all and (max-width: 768px) {
            border: none;
        }
    }

    @media all and (max-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }
    @media all and (max-width: 400px) {
        width: 100%;
    }
`;
const SkillsWork = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 1em;
    position: relative;

    @media all and (max-width: 768px) {
        padding: 0.5em;
    }

    [data-tooltip] {
        font-weight: bold;
        margin-bottom: 1.5em;
        cursor: help;

        &:hover {
            position: relative;
        }

        &:after {
            content: attr(data-tooltip);
            position: absolute;
            background-color: rgba(0, 0, 0, 0.8);
            color: #ffffff;
            font-size: 12px;
            z-index: 9999;
            opacity: 0;
            left: -9999px;
            transition: opacity 500ms;
        }

        &:hover:after {
            opacity: 1;
            bottom: 100%;
            padding: 1em;
            width: 240px;
            left: -130%;
        }
    }
`;

const SkillsDesc = styled.div`
    display: flex;
    width: 100%;
    margin: 0.3em;
    position: relative;

    & > div {
        line-height: 42px;
        margin-left: 5px;
    }

    span {
        line-height: 40px;
        margin-left: 9px;
    }
`;

export const SkillsForm = () => {
    return (
        <WrapSkill className="Skills">
            <h1 className="portfoilo__title">Skills</h1>
            <SkillsBlock>
                <SkillsBg></SkillsBg>
                <WrapSkills>
                    <SkillsWork>
                        <SkillsDesc>
                            <SiHtml5 size={42} fill="#E44F26" />
                            <span>HTML5</span>
                        </SkillsDesc>
                        <SkillsDesc>
                            <SiCss3 size={42} fill="#007ACC" />
                            <span>CSS3</span>
                        </SkillsDesc>
                        <SkillsDesc>
                            <SiJavascript size={42} fill="#F7DF1E" />
                            <span>JAVASCRIPT</span>
                        </SkillsDesc>
                        <SkillsDesc>
                            <SiTypescript size={42} fill="#007ACC" />
                            <span>TYPESCRIPT</span>
                        </SkillsDesc>
                    </SkillsWork>
                </WrapSkills>
                <WrapSkills>
                    <SkillsWork>
                        <SkillsDesc>
                            <SiReact size={42} fill="#08D9FF" />
                            <span>REACT</span>
                        </SkillsDesc>
                        <SkillsDesc>
                            <SiNextDotJs size={42} fill="#000000" />
                            <span>NEXTJS</span>
                        </SkillsDesc>
                        <SkillsDesc>
                            <FaNodeJs size={42} fill="#9EC879" />
                            <span>NODEJS</span>
                        </SkillsDesc>
                    </SkillsWork>
                </WrapSkills>

                <WrapSkills>
                    <SkillsWork>
                        <SkillsDesc>
                            <SiMongodb size={42} fill="#61AB4F" />
                            <span>MongoDB</span>
                        </SkillsDesc>

                        <SkillsDesc>
                            <SiFirebase size={42} fill="#d63031" />
                            <span>Firebase</span>
                        </SkillsDesc>
                    </SkillsWork>
                </WrapSkills>
            </SkillsBlock>
        </WrapSkill>
    );
};
