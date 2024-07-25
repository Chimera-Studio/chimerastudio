import useLocale from '../locale';

export type Member = {
  name: string,
  image: string,
  jobTitle: string,
  description: string,
  cta: string,
};

type Props = {
  member: Member,
};

function TeamMemberColumn(props: Props) {
  const { t } = useLocale();

  return (
    <div className="member-column">
      <div className="member-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={props.member.image} alt={props.member.name} />
      </div>
      <h1 className="member-name">{props.member.name}</h1>
      <h3 className="member-role">{props.member.jobTitle}</h3>
      <span className="member-description">
        {props.member.description.substring(0, 162)}
      </span>
      <a className="member-cta" href={props.member.cta} target="_blank">
        <span>{t('home.about.cta')}</span>
      </a>
    </div>
  );
}

export default TeamMemberColumn;
