import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "../Redux/auth/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
