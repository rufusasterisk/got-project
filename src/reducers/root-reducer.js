import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import {
  houseData,
  fetchFailure,
  fetchInProgress,
  fetchSuccess } from './AppReducers';

const rootReducer = combineReducers({
  fake,
  houseData,
  fetchFailure,
  fetchInProgress,
  fetchSuccess
});


export default rootReducer;
