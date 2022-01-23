// @flow
import React from "react";
import type { Node } from "react";
import HeroBG from "../../assets/svgs/HeroBG";
import useLocale from "../../locale";

function Home(): Node {
  const t = useLocale;

  return (
    <main className="home">
      <div id="header">
        <div className="content">
          <h1 className="title">{t("home.header.title")}</h1>
          <h4 className="subtitle">{t("home.header.subtitle")}</h4>
        </div>
        <HeroBG className="hero-bg" />
      </div>
      <section id="about" className="section">
        <h1 className="section-title">{t("home.about.title")}</h1>
      </section>
      <section id="projects" className="section">
        <h1 className="section-title">{t("home.projects.title")}</h1>
      </section>
    </main>
  );
}

export default Home;
