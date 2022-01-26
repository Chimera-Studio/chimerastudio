// @flow
import React from "react";
import type { Node } from "react";
import { Link } from "react-router-dom";
import useLocale from "../../locale";

function Footer(): Node {
  const t = useLocale;

  return (
    <footer id="footer">
      <span>
        &copy; {new Date().getFullYear()} {t("footer.copy")}
      </span>
      <Link to="/privacy-policy" className="privacy-policy">
        <span>{t("footer.privacy_policy")}</span>
      </Link>
    </footer>
  );
}

export default Footer;
