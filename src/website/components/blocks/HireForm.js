// @flow
import React, { useEffect, useRef, useState } from "react";
import type { Node } from "react";
import { /* useDispatch, */ useSelector } from "react-redux";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { get, isEmpty, merge, forEach, capitalize } from "lodash";
import classNames from "classnames";
import HeroBG from "../../assets/backgrounds/HeroBG";
import useLocale from "../../locale";
import { useEnvironmentInfo } from "../../utils";
// import { actions } from "../../store/globalStore";
import colors from "../../styles/_colors.scss";

type Props = {
  close: Function,
};

function HireForm(props: Props): Node {
  const t = useLocale;
  // const dispatch = useDispatch();
  const formSubmitted = useSelector((state) => state.global.formSubmitted);
  const environment = useEnvironmentInfo();
  const modalRef = useRef(null);
  const [captcha, setCaptcha] = useState(null);
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (formSubmitted) props.close();
  }, [formSubmitted, props]);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        modalRef.current !== e.target &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        props.close();
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [props]);

  const handleFormInput = (origin: string, val: string) => {
    setForm(merge({}, form, { [origin]: val }));
  };

  const handleSubmit = () => {
    if (
      isEmpty(get(form, "name")) ||
      isEmpty(get(form, "email")) ||
      isEmpty(get(form, "details")) ||
      (!environment.isStaging && !environment.isDevelopment && isEmpty(captcha))
    ) {
      return;
    }

    let message = "";
    forEach(form, (val, key) => {
      message =
        message + capitalize(key.toString()) + ": " + val.toString() + "\n";
    });

    // dispatch(actions.sendForm(message));
  };

  const formInputs = [
    {
      label: t("form.name.label"),
      placeholder: t("form.name.placeholder"),
      id: "name",
      type: "text",
      required: true,
    },
    {
      label: t("form.email.label"),
      placeholder: t("form.email.placeholder"),
      id: "email",
      type: "text",
      required: true,
    },
    {
      label: t("form.details.label"),
      placeholder: t("form.details.placeholder"),
      id: "details",
      type: "textarea",
      required: true,
    },
    {
      label: t("form.references.label"),
      placeholder: t("form.references.placeholder"),
      id: "references",
      type: "text",
      required: false,
    },
    {
      label: t("form.budget.label"),
      placeholder: t("form.budget.placeholder"),
      id: "budget",
      type: "text",
      required: false,
    },
    {
      label: t("form.deadline.label"),
      placeholder: t("form.deadline.placeholder"),
      id: "deadline",
      type: "date",
      required: false,
    },
  ];

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={
        environment.isStaging || environment.isDevelopment
          ? process.env.REACT_APP_RECAPTCHA_TEST
          : process.env.REACT_APP_RECAPTCHA_PRODUCTION
      }
    >
      <form ref={modalRef} className="form-wrapper">
        <HeroBG
          className="form-bg"
          gradientColors={{
            startColor: colors.primary,
            stopColor: colors.primaryMid,
          }}
        />
        <FontAwesomeIcon
          className="close"
          icon={faTimesCircle}
          onClick={() => props.close()}
        />
        <h1>{t("form.tagline")}</h1>
        <div className="form">
          {formInputs.map((input) => (
            <label key={input.id} htmlFor={input.id}>
              <span className="form-label">
                {input.required && <span className="reqired">*</span>}
                {input.label}:
              </span>
              {input.type === "textarea" && (
                <textarea
                  id={input.id}
                  className={classNames("form-input", {
                    empty: isEmpty(get(form, input.id, "")),
                  })}
                  type={input.type}
                  required={input.required}
                  placeholder={input.placeholder}
                  value={get(form, input.id, "")}
                  onChange={(e) => handleFormInput(input.id, e.target.value)}
                />
              )}
              {input.type !== "textarea" && (
                <input
                  id={input.id}
                  className={classNames("form-input", {
                    empty: isEmpty(get(form, input.id, "")),
                  })}
                  type={input.type}
                  required={input.required}
                  placeholder={input.placeholder}
                  value={get(form, input.id, "")}
                  onChange={(e) => handleFormInput(input.id, e.target.value)}
                />
              )}
            </label>
          ))}
        </div>
        <div className="actions">
          <GoogleReCaptcha
            scriptProps={{
              appendTo: "body",
            }}
            onVerify={(token) => {
              setCaptcha(token);
            }}
          />
          <span className="reset" onClick={() => setForm(null)}>
            {t("form.actions.reset")}
          </span>
          <span className="submit" onClick={handleSubmit}>
            {t("form.actions.submit")}
          </span>
        </div>
      </form>
    </GoogleReCaptchaProvider>
  );
}

export default HireForm;
