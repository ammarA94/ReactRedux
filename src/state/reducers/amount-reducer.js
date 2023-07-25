// It is a recuer which takes the current state and action as argument and returns a new state.
// There can be multiple reducers in our app, we have to combine the all reducer and export them as a single reducer function (By createing a index.js file in reducers folder)
const reducer = (state=0,action)=>{
    if (action.type==='deposit')
    {
        return state + action.payload;
    }
    else if (action.type ==='withdraw'){
        if (state > 0)
        {
            return state - action.payload;
        }
        else{
            return state;
        }
    }
    else{
        return state;
    }
}
export default reducer;