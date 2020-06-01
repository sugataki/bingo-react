import React, { useReducer } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import reducer from './reducers';
import AppContext from './contexts/AppContext';

import StartPage from './components/StartPage';
import BingoPage from './components/BingoPage';

import './css/stylesheet.scss';

const App = () => {
  const initialState = {
    initialNumbers: [1, 2, 3, 4, 5],
    pickedNumber: 0,
    bingoNumbers: [],
    isStopped: true
  };

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <h1>Reactでビンゴ</h1>
        <Router>
          <Route path="/" exact component={StartPage} />
          <Route path="/bingo" exact component={BingoPage} />
        </Router>
      </div>
      
    </AppContext.Provider>
  );
}

export default App;
