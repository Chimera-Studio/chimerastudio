import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import '../styles/index.scss';

export const metadata: Metadata = {
  robots: 'index, follow',
  title: 'Chimera Studio™',
  description: 'We are an app developing collective armed with a wide spread of digital skills, ready to deliver fun and entertainment. Our recent leaps in progress have allowed us to offer in-organisation project optimisations and idea realisations. It\'s simple, if you have a good idea for an app, talk to us.',
  keywords: 'HTML, CSS, JavaScript, App, Apps, React, React Native, Application development, software development, web development, design, UI/UX design, graphic design, Dario Dumlijan, Boris Vida, Damjan Gazibaric, Chimera Studio',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
