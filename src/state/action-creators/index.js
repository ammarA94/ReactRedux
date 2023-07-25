export const DepositMoney = (amount) => {
    // function body
    // action creator will only tell the work, not actuall do the work, work will be done by reducers
    // dispatch is also a function, so we are returning a function inside a function
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
  };

  export const WithdrawMoney = (amount) => {

    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
  }