import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houseData } from './AppReducers';

const rootReducer = combineReducers({
  fake,
  houseData
});


export default rootReducer;
