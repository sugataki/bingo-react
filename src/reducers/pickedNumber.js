import { 
  PICK_UP_NUMBER,
  FINISH_BINGO
} from '../actions/index';

const pickedNumber = (state = 0, action) => {
  switch(action.type) {
    case PICK_UP_NUMBER:
      return action.number;
      
    case FINISH_BINGO:
      return 0;
      
    default:
      return state;
  }
} 

export default pickedNumber;