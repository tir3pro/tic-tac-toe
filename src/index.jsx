import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';
import { calculateWinner } from './helpers/calculateWinner';
import './styles.scss';

ReactDOM.render(<Game />, document.querySelector('#root'));