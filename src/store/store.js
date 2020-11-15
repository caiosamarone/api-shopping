import {createStore, combineReducers } from 'redux'
import calculatorReducer from './reducers/calculator'

const rootReducer = combineReducers({  //
    calculator : calculatorReducer
});

const store = createStore(rootReducer);

export default store;