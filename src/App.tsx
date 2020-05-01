import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/index";
import PostContainer from "./containers/Post";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PostContainer />
    </Provider>
  );
}

export default App;
