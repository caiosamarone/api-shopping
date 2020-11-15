import {createStore, combineReducers } from 'redux'
import calculatorReducer from './reducers/calculator'
import productReducer from './reducers/products'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    calculator : calculatorReducer,
    products : productReducer
});

const store = createStore(rootReducer);

export default store;