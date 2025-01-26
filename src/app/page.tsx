'use client';

import { useEffect } from 'react';
import { map } from 'lodash';
import HeroBG from '@/assets/backgrounds/HeroBG';
import Logo from '@/assets/icons/Logo';
import Project from '@/components/Project';
import TeamMemberColumn from '@/components/TeamMemberColumn';
import Typewriter from '@/components/Typewriter';
import useLocale from '@/locale';
import { elementInView } from '@/utils';
import type { ProjectProps } from '@/components/Project';
import type { Member } from '@/components/TeamMemberColumn';

export default function Home() {
  const { t } = useLocale();

  useEffect(() => {
    const body = document.querySelector('body');
    const members = document.querySelector('.members-wrapper');

    const handleAnimation = () => {
      if (!body || !members) return;
      if (elementInView(body, members.scrollTop)) {
        members.classList.add('animate-in');
      }
    };

    if (body) body.addEventListener('scroll', handleAnimation);

    return () => {
      if (body) body.removeEventListener('scroll', handleAnimation);
    };
  }, []);

  const styleTitle = (string: string) => {
    const firstWord: string = string.split(' ')[0];

    return (
      <h1 className="section-title">
        <span className="light-word">{firstWord}</span>
        {string.replace(firstWord, '')}
      </h1>
    );
  };

  const teamMembers: Member[] = [
    {
      name: t('home.team.member_1.name'),
      jobTitle: t('home.team.member_1.job_title'),
      description: t('home.team.member_1.description'),
      cta: t('home.team.member_1.cta'),
      image: '/images/team/damjan.jpg',
    },
    {
      name: t('home.team.member_2.name'),
      jobTitle: t('home.team.member_2.job_title'),
      description: t('home.team.member_2.description'),
      cta: t('home.team.member_2.cta'),
      image: '/images/team/boris.jpg',
    },
    {
      name: t('home.team.member_3.name'),
      jobTitle: t('home.team.member_3.job_title'),
      description: t('home.team.member_3.description'),
      cta: t('home.team.member_3.cta'),
      image: '/images/team/dario.jpg',
    },
  ];

  const projects: ProjectProps[] = [
    {
      name: t('home.projects.items.app_1.name'),
      tagline: t('home.projects.items.app_1.tagline'),
      description: t('home.projects.items.app_1.description'),
      appStoreLink: 'https://apps.apple.com/us/app/negative-harmony-simplified/id1561674380',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.chimerastudio.negativeharmony',
      slideshow: [
        '/images/negative_harmony/slide_1.jpg',
        '/images/negative_harmony/slide_2.jpg',
        '/images/negative_harmony/slide_3.jpg',
        '/images/negative_harmony/slide_4.jpg',
        '/images/negative_harmony/slide_5.jpg',
        '/images/negative_harmony/slide_6.jpg',
      ],
    },
    {
      name: t('home.projects.items.app_2.name'),
      tagline: t('home.projects.items.app_2.tagline'),
      description: t('home.projects.items.app_2.description'),
      appStoreLink: 'https://apps.apple.com/us/app/ritmo-beatmaking-redefined/id1562582519',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.chimerastudio.ritmo',
      slideshow: [
        '/images/ritmo/slide_1.jpg',
        '/images/ritmo/slide_2.jpg',
        '/images/ritmo/slide_3.jpg',
        '/images/ritmo/slide_4.jpg',
        '/images/ritmo/slide_5.jpg',
      ],
    },
    // {
    //   name: t('home.projects.items.app_3.name'),
    //   tagline: t('home.projects.items.app_3.tagline'),
    //   description: t('home.projects.items.app_3.description'),
    //   appStoreLink: '',
    //   playStoreLink: 'https://play.google.com/store/apps/details?id=com.chimerastudio.chug',
    //   slideshow: [
    //     '/images/chug/slide_1.jpg',
    //     '/images/chug/slide_2.jpg',
    //     '/images/chug/slide_3.jpg',
    //     '/images/chug/slide_4.jpg',
    //   ],
    // },
  ];

  return (
    <main className="home">
      <section id="header">
        <HeroBG
          className="hero-bg"
          gradientColors={{
            startColor: '#524584',
            stopColor: '#766b9c',
          }}
        />
        <Logo className="hero-logo" />
        <div className="content">
          <h1 className="title">{t('home.header.title')}</h1>
          <Typewriter className="subtitle" message={t('home.header.subtitle')} />
        </div>
      </section>
      <section id="hire-us">
        <a className="hire-button" href="mailto:chimerastudiotm@gmail.com" target="_blank">
          {t('home.hire-cta')}
        </a>
      </section>
      <section id="about" className="section">
        {styleTitle(t('home.about.title'))}
        <span className="section-paragraph">{t('home.about.paragraph')}</span>
        <div className="members-wrapper">
          {map(teamMembers, (member) => (
            <TeamMemberColumn key={member.name} member={member} />
          ))}
        </div>
      </section>
      <section id="projects" className="section">
        {styleTitle(t('home.projects.title'))}
        <span className="section-paragraph">
          {t('home.projects.paragraph')}
        </span>
        {map(projects, (project, index) => (
          <Project
            key={project.name}
            data={project}
            isFirst={index === 0}
            isLast={index === projects.length - 1}
            index={index}
          />
        ))}
      </section>
    </main>
  );
}
