// @flow
import React, { useState } from "react";
import type { Node } from "react";
import ReactDOM from "react-dom";
import HireForm from "../blocks/HireForm";
import TeamMemberColumn from "../elements/TeamMemberColumn";
import Project from "../elements/Project";
import Logo from "../../assets/icons/Logo";
import HeroBG from "../../assets/backgrounds/HeroBG";
import useLocale from "../../locale";
import colors from "../../styles/_colors.scss";

function Home(): Node {
  const t = useLocale;
  const [showHireForm, setShowHireForm] = useState(false);

  const members = [
    {
      name: "Dario D.",
      image: require("../../assets/images/profile_dario.jpg"),
      role: "Developer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis sapien tincidunt ipsum tempus mattis. Phasellus luctus dolor eu mauris tincidunt, sit amet elementum metus dignissim. Proin placerat dignissim velit, ac iaculis sapien efficitur in. Integer id tempor nisl. Duis euismod sed magna ac commodo. Sed convallis mauris a eros bibendum varius. Morbi commodo tortor eu congue porta. Pellentesque hendrerit, nibh et aliquam tempus, nunc tellus aliquet eros, et pretium ipsum ligula et enim. Vivamus sed ipsum felis. Maecenas finibus ligula nec lacus bibendum, in imperdiet purus tincidunt. Etiam lobortis sem neque, eget sollicitudin velit sagittis finibus.",
      link: "https://linktr.ee/dariodumlijan",
    },
    {
      name: "Boris V.",
      image: require("../../assets/images/profile_dario.jpg"),
      role: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis sapien tincidunt ipsum tempus mattis. Phasellus luctus dolor eu mauris tincidunt, sit amet elementum metus dignissim. Proin placerat dignissim velit, ac iaculis sapien efficitur in. Integer id tempor nisl. Duis euismod sed magna ac commodo. Sed convallis mauris a eros bibendum varius. Morbi commodo tortor eu congue porta. Pellentesque hendrerit, nibh et aliquam tempus, nunc tellus aliquet eros, et pretium ipsum ligula et enim. Vivamus sed ipsum felis. Maecenas finibus ligula nec lacus bibendum, in imperdiet purus tincidunt. Etiam lobortis sem neque, eget sollicitudin velit sagittis finibus.",
      link: "https://linktr.ee/dariodumlijan",
    },
    {
      name: "Damjan G.",
      image: require("../../assets/images/profile_dario.jpg"),
      role: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis sapien tincidunt ipsum tempus mattis. Phasellus luctus dolor eu mauris tincidunt, sit amet elementum metus dignissim. Proin placerat dignissim velit, ac iaculis sapien efficitur in. Integer id tempor nisl. Duis euismod sed magna ac commodo. Sed convallis mauris a eros bibendum varius. Morbi commodo tortor eu congue porta. Pellentesque hendrerit, nibh et aliquam tempus, nunc tellus aliquet eros, et pretium ipsum ligula et enim. Vivamus sed ipsum felis. Maecenas finibus ligula nec lacus bibendum, in imperdiet purus tincidunt. Etiam lobortis sem neque, eget sollicitudin velit sagittis finibus.",
      link: "https://linktr.ee/dariodumlijan",
    },
  ];

  const projects = [
    {
      album: [
        require("../../assets/images/negative-harmony/slide_1.jpeg"),
        require("../../assets/images/negative-harmony/slide_1.jpeg"),
      ],
      appName: "Negative Harmony",
      appTagline: "Simplified",
      paragraph:
        "Negative Harmony is an app made to make the musical theory of negative harmony easier to understand and visualise. The app shows in a clear and easy way to understand what are the notes inside the chosen scale/mode and their relative negative harmony while also representing this inside the circle of fifths with the blue axis showing the relationship between each note.",
      appStoreLink:
        "https://apps.apple.com/us/app/negative-harmony-simplified/id1561674380",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.chimerastudio.negativeharmony",
    },
    {
      album: [require("../../assets/images/negative-harmony/slide_1.jpeg")],
      appName: "Ritmo",
      appTagline: "Beatmaking Redefined",
      paragraph:
        "Ritmo is a redefined beatmaker. It is meant to help people create new and interesting beats/rhythms in a way they never made them before. Encouraging the user to think of a beat as a circle instead of a straight path, you can more easily see and find new possibilities.",
      appStoreLink:
        "https://apps.apple.com/us/app/negative-harmony-simplified/id1561674380",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.chimerastudio.negativeharmony",
    },
    {
      album: [require("../../assets/images/negative-harmony/slide_1.jpeg")],
      appName: "Chug",
      appTagline: "A Perfect Party Started",
      paragraph:
        "Chug is a perfect party starter drinking game meant to be played with others. You will discover funny, interesting and weird things you didn't know about your friends. There are over 700 unique sentences across 12 themes and every person is sure to take a sip at least a few times.",
      appStoreLink: "",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.chimerastudio.negativeharmony",
    },
  ];

  const styleTitle = (string: string) => {
    const firstWord = string.split(" ")[0];

    return (
      <h1 className="section-title">
        <span className="light-word">{firstWord}</span>
        {string.replace(firstWord, "")}
      </h1>
    );
  };

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
          <h1 className="title">{t("home.header.title")}</h1>
          <h4 className="subtitle">{t("home.header.subtitle")}</h4>
        </div>
      </section>
      <section id="hire-us">
        <button className="hire-button" onClick={() => setShowHireForm(true)}>
          {t("home.hire-cta")}
        </button>
      </section>
      <section id="about" className="section">
        {styleTitle(t("home.about.title"))}
        <span className="section-paragraph">{t("home.about.paragraph")}</span>
        <div className="members-wrapper">
          {members.map((member) => (
            <TeamMemberColumn key={member.name} member={member} />
          ))}
        </div>
      </section>
      <section id="projects" className="section">
        {styleTitle(t("home.projects.title"))}
        <span className="section-paragraph">
          {t("home.projects.paragraph")}
        </span>
        {projects.map((project, index) => (
          <Project
            key={project.appName}
            data={project}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
            index={index}
          />
        ))}
      </section>
      {showHireForm &&
        ReactDOM.createPortal(
          <div className="modal-overlay">
            <HireForm close={() => setShowHireForm(false)} />
          </div>,
          document.getElementById("root")
        )}
    </main>
  );
}

export default Home;
