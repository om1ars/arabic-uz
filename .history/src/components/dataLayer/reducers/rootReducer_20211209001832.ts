// import {combineReducers} from 'redux'

import { combineReducers } from "redux"


const rootReducer = combineReducers({const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case typeName:
        return { ...state, ...payload }

    default:
        return state
    }
}
: {}})

export default rootReducer