import {
  START_BINGO,
  STOP_ROULETTE,
  FINISH_BINGO
} from '../actions/index';

const initialNumbers = (state = [], action) => {
  switch(action.type) {
    case START_BINGO:
      const initialState = [];
      for(let i = 1; i <= action.number; i++) {
        initialState.push(i);
      }
      return initialState;

    case STOP_ROULETTE:
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;

    case FINISH_BINGO:
      return [];
      
    default:
      return state;
  }
}

export default initialNumbers;