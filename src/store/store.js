import {createStore, combineReducers } from 'redux'
import calculatorReducer from './reducers/calculator'
import productReducer from './reducers/products'

const rootReducer = combineReducers({
    calculator : calculatorReducer,
    products : productReducer
});

const store = createStore(rootReducer);

export default store;