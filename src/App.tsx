import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/index";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div>Test</div>
    </Provider>
  );
}

export default App;
