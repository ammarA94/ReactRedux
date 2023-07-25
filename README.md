
Install redux by running "npm install redux react-redux"

1) create state folder in /src
2)Inside state folder create action-creators folder.
3)Inside action-creators folder create index.js file where we will create actions.
4. Create reducers folder inside state folder.
5. Create amount-reducer.js file in reducer folder. It is a reducer which takes the current state and action as argument and returns a new state.
6. There can be multiple reducers in our app, we have to combine the all reducer and export them as a single reducer function (By createing a index.js file in reducers folder).
7. Now create a index.js file in state folder // To access the states, action creators , we have created this index.js file. We will talk to this js file to access the state, it will give the action-creators and then we can perform any action we needed.

export * as actionCreators from "./action-creators/index"

8. Now create a store by creating a store.js file in state folder.


// Here we are creating a redux store that will be accessible in whole app.
// After creating the store go to src/index.js file to give access of store to whole app by writing <Provider store={store}> </Provider>

import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
// import { applyMiddleware,createStore } from 'redux'
// import thunk from 'redux-thunk'
// export const store = createStore(reducers,{},applyMiddleware(thunk))


// User configureStore here instead of createStore because createStore is depreciated
export const store = configureStore({
    reducer: reducers,
  });


9.In src/index.js file give app the access to this store by writing this code

import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Giving access of redux store to whole app */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


10. Now in the components from where you want to update the state 

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

export default function Store() {
  const dispatch=useDispatch();
  const {WithdrawMoney,DepositMoney}=bindActionCreators(actionCreators,dispatch)
  const balance= useSelector(state => state.amount)
  return (
    <div className='container text-center my-5'>
        <h3>Deposit/Withdraw Money (PKR 1000)</h3>
        <button className="btn btn-success mx-2 " onClick={()=>{WithdrawMoney(1000)}} >-</button>
        Transaction
        <button className="btn btn-success mx-2" onClick={()=>{DepositMoney(1000)}} >+</button>
        <div>
        <button disabled={true} className='btn btn-info my-3' >{balance}</button>
        </div>
      </div>
  )
}


11. In the componenet where you want to show the state
import { useSelector } from 'react-redux/es/hooks/useSelector'

inside function befor return 
// Fetched the amount key from the state with userSelector
const amount = useSelector(state => state.amount)

//access the state value
<button disabled={true} className="btn btn-primary">Your Balance : PKR {amount}</button>