import Link from 'next/link';
import useLocale from '../locale';

function Footer() {
  const { t } = useLocale();

  return (
    <footer id="footer">
      <span>
        &copy; {new Date().getFullYear()} {t('footer.copy')}
      </span>
      <Link className="privacy-policy" href="/privacy-policy">
        <span>{t('footer.privacy_policy')}</span>
      </Link>
    </footer>
  );
}

export default Footer;
