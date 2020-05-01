import {
  applyMiddleware,
  createStore,
  Action,
  combineReducers,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";

import mySaga from "./sagas";

function postsReducer(state = 0, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({
  /* options */
});

export default function configureStore(initialState?: AppState): Store {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(mySaga);
  return store;
}
