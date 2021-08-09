import { ProgCategoriesReducer } from "./Reducers/ProgCategoriesReducer";
import { SubTreeReducer } from "./Reducers/SubTreeReducer";
import { TreeReducer } from "./Reducers/TreeReducer";
import { PathTreeReducer } from "./Reducers/PathTreeReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  ProgCategoriesReducer,
  SubTreeReducer,
  TreeReducer,
  PathTreeReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;
export default store;
