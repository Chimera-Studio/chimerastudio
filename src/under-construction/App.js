// @flow
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import type { Node } from "react";
import "./under_construction.scss";

function App(): Node {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="under-construction-wrapper">
              <div className="text">
                <h1>Coming Soon</h1>
                <i className="line" />
                <h3>Chimera Studio</h3>
                <span>Official website</span>
              </div>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
