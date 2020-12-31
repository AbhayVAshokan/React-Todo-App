import TaskReducer from "./TaskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: TaskReducer
});

export default rootReducer;