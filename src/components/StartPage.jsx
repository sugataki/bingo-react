import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';

import {
  START_BINGO
} from '../actions/index';


const StartPage = ({history}) => {
  const { dispatch } = useContext(AppContext);

  const [inputNumber, setInputNumber] = useState('');
  
  const handleClick = () => {
    const number = parseInt(inputNumber, 10);
    if(number <= 0 || isNaN(number)) {
      alert('0以上の数値を入力してください');
      setInputNumber('');
    } else {
      dispatch({
        type: START_BINGO,
        number
      })
      history.push('/bingo');
    }
  }

  return (
    <div>
      <label htmlFor="label">数値を入力してください(1以上)</label>
      <br/>
      <input id="label" value={inputNumber} onChange={e => setInputNumber(e.target.value)} type="text"/>
      <br/>
      <button className="btn" onClick={handleClick}>開始</button>
    </div>
  )
}

export default StartPage;