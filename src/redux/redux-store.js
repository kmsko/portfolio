import {  combineReducers, createStore } from "redux";
import dataHeader from "./header-page";



let reducers = combineReducers({
    headerPage: dataHeader,
})
let store = createStore(reducers);
window.store = store;
export default store;