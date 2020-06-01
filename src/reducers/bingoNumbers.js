import {
  STOP_ROULETTE,
  FINISH_BINGO
} from '../actions/index';

const bingoNumbers = (state = [], action) => {
  switch(action.type) {
    case STOP_ROULETTE:
      return [...state, action.number]

    case FINISH_BINGO:
      return [];
      
    default: 
      return state;
  }
}

export default bingoNumbers;