import { createStore } from 'redux';
import stopwatchReducer from '../reducers/stopwatchReducer';

const store = createStore(stopwatchReducer);

export default store;
