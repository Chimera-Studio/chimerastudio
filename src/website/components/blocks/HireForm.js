// @flow
import React, { useEffect, useRef, useState } from "react";
import type { Node } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { get, isEmpty, merge } from "lodash";
import classNames from "classnames";
import HeroBG from "../../assets/backgrounds/HeroBG";
import useLocale from "../../locale";
import { useEnvironmentInfo } from "../../utils";
import { actions } from "../../store/globalStore";
import colors from "../../styles/_colors.scss";

type Props = {
  close: Function,
};

function HireForm(props: Props): Node {
  const t = useLocale;
  const dispatch = useDispatch();
  const formSubmitted = useSelector((state) => state.global.formSubmitted);
  const environment = useEnvironmentInfo();
  const formRef = useRef(null);
  const [captcha, setCaptcha] = useState(null);
  const [form, setForm] = useState(null);
  const [sendStatus, setSendStatus] = useState(null);
  const [closeDelay, setCloseDelay] = useState(null);

  let sendMessage = "";
  if (sendStatus === "PENDING") {
    sendMessage = t("form.send_message.pending");
  }
  if (sendStatus === "REJECTED") {
    sendMessage = t("form.send_message.rejected");
  }
  if (sendStatus === "FULFILLED") {
    sendMessage = t("form.send_message.fulfilled");
  }

  useEffect(() => {
    if (formSubmitted) {
      setSendStatus(formSubmitted);
      if (formSubmitted === "FULFILLED") {
        dispatch(actions.clearFormStatus());
        setCloseDelay(
          setTimeout(() => {
            setSendStatus(null);
            props.close();
          }, 3000)
        );
      }
    }

    return () => clearTimeout(closeDelay);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        formRef.current !== e.target &&
        formRef.current &&
        !formRef.current.contains(e.target)
      ) {
        props.close();
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormInput = (origin: string, val: string) => {
    setForm(merge({}, form, { [origin]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      sendStatus === "PENDING" ||
      !formRef.current ||
      isEmpty(get(form, "name")) ||
      isEmpty(get(form, "email")) ||
      isEmpty(get(form, "details")) ||
      (!environment.isStaging && !environment.isDevelopment && isEmpty(captcha))
    ) {
      return;
    }

    setSendStatus("PENDING");
    dispatch(actions.sendForm(formRef.current));
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
        environment.isProduction
          ? process.env.REACT_APP_RECAPTCHA_PRODUCTION
          : process.env.REACT_APP_RECAPTCHA_TEST
      }
    >
      <form ref={formRef} onSubmit={handleSubmit} className="form-wrapper">
        {sendStatus && <span className="form-notification">{sendMessage}</span>}
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
        <p>{t("form.free_option_info")}</p>
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
                  name={input.id}
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
                  name={input.id}
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
          <input
            type="submit"
            className="submit"
            value={t("form.actions.submit")}
          />
        </div>
      </form>
    </GoogleReCaptchaProvider>
  );
}

export default HireForm;
