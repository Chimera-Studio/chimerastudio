// @flow
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import type { Node } from "react";

import Navigation from "./blocks/Navigation";
import HireForm from "./blocks/HireForm";
import Loading from "./elements/Loading";
import ScrollToTop from "./elements/ScrollToTop";
import Footer from "./elements/Footer";
import Login from "../../staging/Login";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { useEnvironmentInfo } from "../utils";
import { sessionStorageKeys } from "../tokens";
import { actions } from "../store/cmsStore";

function Body(): Node {
  const dispatch = useDispatch();
  const environment = useEnvironmentInfo();
  const cms = useSelector((state) => state.cms);
  const [initLoad, setInitLoad] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showHireForm, setShowHireForm] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const isLoading =
    isEmpty(cms) || !["general", "team", "apps"].every((key) => key in cms);

  const handleLogin = (credentials: Object) => {
    if (
      credentials.username === process.env.REACT_APP_STAGING_USERNAME &&
      credentials.password === process.env.REACT_APP_STAGING_PASSWORD
    ) {
      window.sessionStorage.setItem(
        sessionStorageKeys.staginUser,
        JSON.stringify(credentials)
      );
      dispatch(actions.fetchWeb());
      setInitLoad(false);
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    setAnimationDelay(
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000)
    );

    return () => clearTimeout(animationDelay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    if (!environment.isProduction) {
      const credentials = window.sessionStorage.getItem(
        sessionStorageKeys.staginUser
      );
      if (!isEmpty(credentials)) handleLogin(JSON.parse(credentials));
    }

    if (initLoad && !environment.isStaging) {
      dispatch(actions.fetchWeb());
      setInitLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authenticated && environment.isStaging) {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login onSubmit={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }

  if (isLoading || isAnimating) return <Loading finished={!isLoading} />;

  return (
    <Router>
      <Navigation callHireForm={() => setShowHireForm(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home callHireForm={() => setShowHireForm(true)} />}
        />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ScrollToTop />
      <Footer />
      {showHireForm &&
        ReactDOM.createPortal(
          <div className="modal-overlay">
            <HireForm close={() => setShowHireForm(false)} />
          </div>,
          document.getElementById("root")
        )}
    </Router>
  );
}

export default Body;
