// @flow
import React from "react";
import type { Node } from "react";

function Footer(): Node {
  return (
    <footer id="footer">
      <span>
        &copy; {new Date().getFullYear()} Chimera Studio. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;
