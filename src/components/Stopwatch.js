import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, pauseTimer, stopTimer, resetTimer } from '../actions/stopwatchActions';
import TimerDisplay from './TimerDisplay';
import './Stopwatch.css';

const Stopwatch = () => {
  const dispatch = useDispatch();
  const { isRunning, elapsedTime, lastUpdateTime } = useSelector(state => state);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK', payload: Date.now() - lastUpdateTime });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isRunning, dispatch, lastUpdateTime]);

  const handleStartPause = () => {
    if (isRunning) {
      dispatch(pauseTimer());
    } else {
      dispatch(startTimer());
    }
  };

  const handleStop = () => {
    dispatch(stopTimer());
  };

  const handleReset = () => {
    dispatch(resetTimer());
  };

  return (
    <div className="stopwatch">
      <TimerDisplay elapsedTime={elapsedTime} />
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
