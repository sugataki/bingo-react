import {
  START_ROULETTE,
  STOP_ROULETTE,
  FINISH_BINGO
} from '../actions/index';

const isStopped = (state = true, action) => {
  switch(action.type) {
    case START_ROULETTE:
      return false;
    case STOP_ROULETTE:
      return true;
    case FINISH_BINGO:
      return true;
    default: 
      return state;
  }
}

export default isStopped;