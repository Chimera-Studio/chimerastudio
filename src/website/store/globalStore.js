// @flow
import { merge } from "lodash";
// import * as API from "../api";
import type { /* ReduxAction, */ ReduxState } from "../types";

export type State = {
  formSubmitted: boolean,
};

export const types = {
  GS_SEND_FORM_MESSAGE: "GS/SEND_FORM_MESSAGE",
  GS_SEND_FORM_MESSAGE_PENDING: "GS/SEND_FORM_MESSAGE_PENDING",
  GS_SEND_FORM_MESSAGE_REJECTED: "GS/SEND_FORM_MESSAGE_REJECTED",
  GS_SEND_FORM_MESSAGE_FULFILLED: "GS/SEND_FORM_MESSAGE_FULFILLED",
};

export const selectors = {
  getGlobal: (state: ReduxState): State => state.global,
};

export const actions: { ... } = {
  // sendForm: (form: string): ReduxAction => ({
  //   type: types.GS_SEND_FORM_MESSAGE,
  //   payload: API.sendForm(form),
  // }),
};

export const reducer = (state: State, action: any): any => {
  switch (action.type) {
    case types.GS_SEND_FORM_MESSAGE_REJECTED:
      return merge({}, state, { formSubmitted: "REJECTED" });
    case types.GS_SEND_FORM_MESSAGE_FULFILLED:
      return merge({}, state, { formSubmitted: "FULFILLED" });

    default:
      return state || {};
  }
};
