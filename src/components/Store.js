import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//bindActionCreators is a utility function provided by the redux library that helps in binding action creators to the Redux store dispatch function
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

export default function Store() {
  const dispatch=useDispatch();//It is a hook rovided by the react-redux, used to get access to the Redux store's dispatch function in functional components. The dispatch function is what allows you to send actions to the Redux store, triggering state updates.
  const {WithdrawMoney,DepositMoney}=bindActionCreators(actionCreators,dispatch)
  const balance= useSelector(state => state.amount) //In navbar component we are using this state as amount and here we are using it as balance. So with redux we can use this state anywhere in the react app, in any component.
  return (
    <div className='container text-center my-5'>
        <h3>Deposit/Withdraw Money (PKR 1000)</h3>
        {/* Without bindActionCreators */}
        {/* <button className="btn btn-success mx-2 " onClick={()=>{dispatch(actionCreators.WithdrawMoney(1000))}} >-</button>
        Transaction
        <button className="btn btn-success mx-2" onClick={()=>{dispatch(actionCreators.DepositMoney(1000))}} >+</button> */}

        {/* With bindActionCreators */}
        <button className="btn btn-success mx-2 " onClick={()=>{WithdrawMoney(1000)}} >-</button>
        Transaction
        <button className="btn btn-success mx-2" onClick={()=>{DepositMoney(1000)}} >+</button>
        <div>
        <button disabled={true} className='btn btn-info my-3' >{balance}</button>
        </div>
        
      </div>
  )
}
