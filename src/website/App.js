// @flow
import React from "react";
import type { Node } from "react";
import { Provider } from "react-redux";

import Body from "./components/Body";
import { configureStore } from "./store";
import type { ReduxState } from "./types";

const initialReduxState: ReduxState = {};
const store = configureStore(initialReduxState);

function App(): Node {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
