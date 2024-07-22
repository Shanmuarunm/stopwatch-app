import { START_TIMER, PAUSE_TIMER, STOP_TIMER, RESET_TIMER } from '../actions/stopwatchActions';

const initialState = {
  isRunning: false,
  elapsedTime: 0,
  lastUpdateTime: null,
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: true,
        lastUpdateTime: Date.now(),
        // No reset of elapsedTime if the timer was previously running
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isRunning: false,
        elapsedTime: state.elapsedTime + (Date.now() - state.lastUpdateTime),
        lastUpdateTime: null,
      };
    case STOP_TIMER:
      return {
        ...state,
        isRunning: false,
        elapsedTime: state.elapsedTime + (state.lastUpdateTime ? Date.now() - state.lastUpdateTime : 0),
        lastUpdateTime: null,
        // Set to zero so the next start initializes from zero
      };
    case RESET_TIMER:
      return {
        ...state,
        elapsedTime: 0,
        lastUpdateTime: state.isRunning ? Date.now() : null,
      };
    case 'TICK':
      return {
        ...state,
        elapsedTime: state.elapsedTime + action.payload,
        lastUpdateTime: Date.now(),
      };
    default:
      return state;
  }
};

export default stopwatchReducer;
