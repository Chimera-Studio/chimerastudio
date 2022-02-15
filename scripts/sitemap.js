import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generator from "react-router-sitemap-generator";

function Sitemap() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/privacy-policy" />
      </Routes>
    </Router>
  );
}

const generator = new Generator("https://chimerastudio.co.uk", Sitemap(), {
  lastmod: new Date().toISOString().slice(0, 10),
  changefreq: "monthly",
  priority: 0.8,
});
generator.save("public/sitemap.xml");
