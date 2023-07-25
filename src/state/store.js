// Here we are creating a redux store that will be accessible in whole app.
// After creating the store go to src/index.js file to give access of store to whole app by writing <Provider store={store}> </Provider>

// import { applyMiddleware,createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducers'
// import thunk from 'redux-thunk'
// export const store = createStore(reducers,{},applyMiddleware(thunk))


// User configureStore here instead of createStore because createStore is depreciated
export const store = configureStore({
    reducer: reducers,
  });
