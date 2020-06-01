import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import _ from 'lodash';

import {
  START_ROULETTE,
  STOP_ROULETTE,

  PICK_UP_NUMBER,

  FINISH_BINGO
} from '../actions/index';

import '../css/stylesheet.scss';

const BingoPage = ({ history }) => {

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    if(!state.isStopped) {
      const id = setInterval(() => {
        const randomNumber = _.sample(state.initialNumbers);
        dispatch({type: PICK_UP_NUMBER, number: randomNumber})
      }, 1)
      return () => {clearInterval(id)};
    }
    
  })
  
  const handleRouletteButtonClick = () => {
    if(state.initialNumbers.length === 0) {
      alert('最後の数字が表示されました');
    } else {
      if(state.isStopped) {
        dispatch({type: START_ROULETTE})
      } else {
        const targetIndex = state.initialNumbers.findIndex(n => n === state.pickedNumber);

        dispatch({
          type: STOP_ROULETTE, 
          number: state.pickedNumber, 
          index: targetIndex
        });
      }
    }
  }

  const handleResetButtonClick = () => {
    const result = window.confirm('本当に終了してもよろしいでしょうか？');

    if(result) {
      dispatch({ type: FINISH_BINGO });
      history.push('/');
    }
  }

  const renderButtonText = () => {
    const text = state.isStopped ? 'start' : 'stop';
    return text
  }

  const renderPickedNumber = () => {
    return <p className="picked-number">{state.pickedNumber}</p>
  }

  const renderBingoNumbers = () => {
    const test = state.bingoNumbers.map((number, index) => {
      return <span className="number" key={index}> {number} </span>
    })
    return test;
  }

  return (
    <div className="bingo-container">
      <button className="btn" onClick={handleRouletteButtonClick}>{renderButtonText()}</button>
      <br/>
      {renderPickedNumber()}
      <div className="bingo-numbers">
        {renderBingoNumbers()}
      </div>
      
      <br/>
      <button className="btn" onClick={handleResetButtonClick}>終了</button>
    </div>
  )
}

export default BingoPage;