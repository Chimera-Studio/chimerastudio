// @flow
import React from "react";
import type { Node } from "react";
import { Link } from "react-router-dom";
import useLocale from "../../locale";
import { useLocationInfo } from "../../utils";

function Footer(): Node {
  const t = useLocale;
  const locationInfo = useLocationInfo();
  const body = document.querySelector("body");

  const toTop = () => {
    if (body) body.scrollTo(0, 0);
  };

  return (
    <footer id="footer">
      <span>
        &copy; {new Date().getFullYear()} {t("footer.copy")}
      </span>
      {locationInfo.isHome && (
        <Link to="/privacy-policy" onClick={toTop} className="privacy-policy">
          <span>{t("footer.privacy_policy")}</span>
        </Link>
      )}
    </footer>
  );
}

export default Footer;
