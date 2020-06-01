import { combineReducers } from 'redux';

import initialNumbers from './initialNumbers';
import pickedNumber from './pickedNumber';
import bingoNumbers from './bingoNumbers';
import isStopped from './isStopped';


export default combineReducers({
  initialNumbers,
  pickedNumber,
  bingoNumbers,
  isStopped,
});