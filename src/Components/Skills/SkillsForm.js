import React from "react";
import styled from "styled-components";
import {
  SiHtml5,
  SiRedux,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledComponents,
  SiTypescript,
  SiNextDotJs,
  SiPython,
  SiWebpack,
  SiMongodb,
} from "react-icons/si";
import { FaAws, FaNodeJs, FaSass } from "react-icons/fa";

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

  .skills-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .skills__wrap {
    width: 33%;
    padding: 1em;
    display: flex;
    &:nth-child(2),
    &:nth-child(3) {
      border-right: 1px solid black;
    }

    @media all and (max-width: 768px) {
      width: 80%;
      margin: 0 auto;
    }
    @media all and (max-width: 400px) {
      width: 100%;
    }
  }

  .skills__work {
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
  }

  .skills__work-desc {
    display: flex;
    width: 100%;
    margin: 0.3em;
    position: relative;
    .skills-desc {
      line-height: 42px;
      margin-left: 5px;
      font-weight: bold;
    }
  }
  [data-tooltip]:hover {
    position: relative;
  }

  [data-tooltip]:after {
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

  [data-tooltip]:hover:after {
    opacity: 1;
    bottom: 100%;
    padding: 1em;
    width: 240px;
    left: -100%;
  }
`;

export const SkillsForm = () => {
  return (
    <WrapSkill className="Skills">
      <h1 className="portfoilo__title">Skills</h1>
      <SkillsBlock>
        <div className="skills-bg"></div>
        <div className="skills__wrap">
          <div className="skills__work">
            <h3 data-tooltip="프로젝트에 활용했었으며 사용 가능합니다.">
              Awesome
            </h3>
            <div className="skills__work-desc">
              <SiHtml5 size={42} fill="#E44F26" />
              <div className="skills-desc">HTML5</div>
            </div>
            <div className="skills__work-desc">
              <SiCss3 size={42} fill="#007ACC" />
              <span className="skills-desc">CSS3</span>
            </div>
            <div className="skills__work-desc">
              <SiJavascript size={42} fill="#F7DF1E" />
              <span className="skills-desc">JAVASCRIPT</span>
            </div>
            <div className="skills__work-desc">
              <SiReact size={42} fill="#08D9FF" />
              <span className="skills-desc">REACT</span>
            </div>
            <div className="skills__work-desc">
              <FaNodeJs size={42} fill="#9EC879" />
              <span className="skills-desc">NODEJS</span>
            </div>
            <div className="skills__work-desc">
              <FaSass size={42} fill="#CF649A" />
              <span className="skills-desc">SASS</span>
            </div>

            <div className="skills__work-desc">
              <SiStyledComponents size={42} fill="#A06940" />
              <span className="skills-desc">STYLEDCOMPONENTS</span>
            </div>
          </div>
        </div>
        <div className="skills__wrap">
          <div className="skills__work">
            <h3 data-tooltip="미숙하나 사용해봤습니다.">Amature</h3>
            <div className="skills__work-desc">
              <SiRedux size={42} fill="#8966C0" />
              <span className="skills-desc">REDUX</span>
            </div>
            <div className="skills__work-desc">
              <SiNextDotJs size={42} fill="#000000" />
              <span className="skills-desc">NEXTJS</span>
            </div>
            <div className="skills__work-desc">
              <SiWebpack size={42} fill="#76CEF5" />
              <span className="skills-desc">WEBPACK</span>
            </div>
            <div className="skills__work-desc">
              <SiMongodb size={42} fill="#61AB4F" />
              <span className="skills-desc">MongoDB</span>
            </div>
            <div className="skills__work-desc">
              <FaAws size={42} fill="#F79400" />
              <span className="skills-desc">AWS S3</span>
            </div>
          </div>
        </div>

        <div className="skills__wrap">
          <div className="skills__work">
            <h3 data-tooltip="배우고 있거나, 싶은 스킬입니다.">Beginner</h3>
            <div className="skills__work-desc">
              <SiTypescript size={42} fill="#73AACE" />
              <span className="skills-desc">TYPESCRIPT</span>
            </div>
            <div className="skills__work-desc">
              <SiPython size={42} fill="#3C6E9C" />
              <span className="skills-desc">PYTHON</span>
            </div>
            <div className="skills__work-desc">
              <SiReact size={42} fill="#08D9FF" />
              <span className="skills-desc">REACT-NATIVE</span>
            </div>
          </div>
        </div>
      </SkillsBlock>
    </WrapSkill>
  );
};
