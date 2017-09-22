import {combineReducers} from "redux";

import store from './store'
import brands from './brands'
import filter from './filter'

export default combineReducers({
    store,
    brands,
    filter
});