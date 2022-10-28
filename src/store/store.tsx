import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import { persistReducer,persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import sessionStorage from "redux-persist/es/storage/session";
// * Persisting rootReducer in localStorage
const persistConfig = {
    key:'root',
    storage,

}
// * Persisting user Reducer in session Storage
const userPersistConfig = {
    key:'user',
    storage:sessionStorage

}


// * Combined reducer for all the reducers
const rootReducer = combineReducers({
    user:persistReducer(userPersistConfig,userReducer),

})

// * Calling the persistReducer() method to persist the reducer
const persistedReducer = persistReducer(persistConfig,rootReducer)

// * Passing in the persisted reducer(root reducer) to the store 
export const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk]

})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
