import {combineReducers} from "redux";

import store from './store'
import brands from './brands'
import filter from './filter'
import basket from './basket'
import search from './search'

export default combineReducers({
    store,
    brands,
    filter,
    basket,
    search
});