// @flow
import React, { useState } from "react";
import type { Node } from "react";
import ReactDOM from "react-dom";
import HireForm from "../blocks/HireForm";
import TeamMemberColumn from "../elements/TeamMemberColumn";
import Logo from "../../assets/icons/Logo";
import HeroBG from "../../assets/backgrounds/HeroBG";
import useLocale from "../../locale";

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
        <HeroBG className="hero-bg" />
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
