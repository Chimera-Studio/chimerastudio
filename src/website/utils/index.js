// @flow
import { useLocation } from "react-router";

// $FlowFixMe
export const isPromise = (p): boolean =>
  // $FlowFixMe
  p && Object.prototype.toString.call(p) === "[object Promise]";

export const useLocationInfo = (): { isHome: boolean, ... } => {
  const location = useLocation();
  const home = location.pathname === "/";

  return {
    isHome: home,
  };
};

export const useEnvironmentInfo = (): {
  isDevelopment: boolean,
  isProduction: boolean,
  isStaging: boolean,
  ...
} => {
  const development = window.location.hostname === "";
  const production = window.location.hostname === "localwoofers.com";
  const staging = window.location.href.includes("staging");

  return {
    isDevelopment: development,
    isProduction: production,
    isStaging: staging,
  };
};
