import { combineReducers, createStore } from "redux";
import task from "./reducer/taskReducer"

const reducer=combineReducers({task})

const store=createStore(reducer)
window.store=store
export default store