// @flow
import React from "react";
import type { Node } from "react";
import useLocale from "../../locale";

type Member = {
  name: string,
  image: string,
  role: string,
  description: string,
  link: string,
};

type Props = {
  member: Member,
};

function TeamMemberColumn(props: Props): Node {
  const t = useLocale;

  return (
    <div className="member-column">
      <div className="member-image">
        <img src={props.member.image} alt={props.member.name} />
      </div>
      <h1 className="member-name">{props.member.name}</h1>
      <h3 className="member-role">{props.member.role}</h3>
      <span className="member-description">
        {props.member.description.substring(0, 162)}
      </span>
      <a className="member-cta" href={props.member.link} target="_blank">
        <span>{t("home.about.cta")}</span>
      </a>
    </div>
  );
}

export default TeamMemberColumn;
