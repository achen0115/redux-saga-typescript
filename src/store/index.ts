import {
  applyMiddleware,
  createStore,
  Action,
  combineReducers,
  Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import logger from "redux-logger";

function counterReducer(state = 0, action: Action) {
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
  counter: counterReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = composeWithDevTools({
  /* options */
});

export default function configureStore(initialState?: AppState): Store {
  const middleware = [logger];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
