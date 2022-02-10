// @flow
import React, { useEffect } from "react";
import type { Node } from "react";
import { useSelector } from "react-redux";
import Typewriter from "../elements/Typewriter";
import TeamMemberColumn from "../elements/TeamMemberColumn";
import Project from "../elements/Project";
import Logo from "../../assets/icons/Logo";
import HeroBG from "../../assets/backgrounds/HeroBG";
import useLocale from "../../locale";
import { elementInView } from "../../utils";
import colors from "../../styles/_colors.scss";
import type { State } from "../../store/cmsStore";
import type { ReduxState } from "../../types";

type Props = {
  callHireForm: Function,
};

function Home(props: Props): Node {
  const t = useLocale;
  const cms: State = useSelector((state: ReduxState) => state.cms);

  const styleTitle = (string: string) => {
    const firstWord: string = string.split(" ")[0];

    return (
      <h1 className="section-title">
        <span className="light-word">{firstWord}</span>
        {string.replace(firstWord, "")}
      </h1>
    );
  };

  useEffect(() => {
    const body = document.querySelector("body");
    const sections = {
      members: document.querySelector(".members-wrapper"),
    };

    const handleAnimation = () => {
      if (!body || !sections.members) return;
      if (elementInView(body, sections.members.offsetTop)) {
        // $FlowFixMe
        sections.members.classList.add("animate-in");
      }
    };

    if (body) body.addEventListener("scroll", handleAnimation);

    return () => {
      if (body) body.removeEventListener("scroll", handleAnimation);
    };
  }, []);

  return (
    <main className="home">
      <section id="header">
        <HeroBG
          className="hero-bg"
          gradientColors={{
            startColor: colors.primary,
            stopColor: colors.primaryMid,
          }}
        />
        <Logo className="hero-logo" />
        <div className="content">
          <h1 className="title">{cms.general.heroTitle}</h1>
          <Typewriter className="subtitle" message={cms.general.heroSubtitle} />
        </div>
      </section>
      <section id="hire-us">
        <button className="hire-button" onClick={() => props.callHireForm()}>
          {cms.general.hireUs}
        </button>
      </section>
      <section id="about" className="section">
        {styleTitle(t("home.about.title"))}
        <span className="section-paragraph">{t("home.about.paragraph")}</span>
        <div className="members-wrapper">
          {cms.team.map((member) => (
            <TeamMemberColumn key={member.name} member={member} />
          ))}
        </div>
      </section>
      <section id="projects" className="section">
        {styleTitle(t("home.projects.title"))}
        <span className="section-paragraph">
          {t("home.projects.paragraph")}
        </span>
        {cms.apps.map((project, index) => (
          <Project
            key={project.appName}
            data={project}
            isFirst={index === 0}
            isLast={index === cms.apps.length - 1}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
