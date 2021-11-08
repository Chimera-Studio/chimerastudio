import React from "react";

function Footer() {
  // render the fetched Contentful data
  return (
    <footer id="footer">
      <span>
        | Copyright &copy; {new Date().getFullYear()} | All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
