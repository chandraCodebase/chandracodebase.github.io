import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducers'; 
import userReducer from './reducers/userReducers'; 


const rootReducer = combineReducers({
  counter: counterReducer,
  userState: userReducer
});



const store = createStore(rootReducer);

export default store;
