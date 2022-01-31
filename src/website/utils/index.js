// @flow
import { useLocation } from "react-router";

// $FlowFixMe
export const isPromise = (p) => !!p && typeof p.then === "function";

export const useLocationInfo = (): { isHome: boolean } => {
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
  const development = window.location.hostname === "localhost";
  const production = window.location.hostname === "chimerastudio.co.uk";
  const staging = window.location.hostname.includes("staging");

  return {
    isDevelopment: development,
    isProduction: production,
    isStaging: staging,
  };
};
