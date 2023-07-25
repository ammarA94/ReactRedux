import { combineReducers } from "redux";
import amountReducer from "./amount-reducer";


const reducers = combineReducers(
    {
        // write your all reducers here to combine them
        amount:amountReducer
    }
) 

export default reducers;