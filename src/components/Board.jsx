import React from 'react';

import Square from './Square';
import BoardRow from './BoardRow';
import calculateWinner from '../helpers/calculateWinner';
import { BOARD_SIZE, LINE_LENGTH, winLines } from '../../rules/rules.json';

class Board extends React.Component {
	constructor() {
		super();

		this.state = {
			squares: Array(BOARD_SIZE).fill(null),
			xIsNext: true,
			stepNum: 0
		};

		this.restartGame = this.restartGame.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(i, row) {
		const squares = this.state.squares.slice();
		let stepNum = this.state.stepNum += 1;
		
		if (calculateWinner(this.state.squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
			stepNum: stepNum
		});
	}
	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
	}
	restartGame(e) {
		e.preventDefault();
		this.setState({
			squares: Array(BOARD_SIZE).fill(null),
			xIsNext: true,
			stepNum: 0
		});
	}
	render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		let isDraw = this.state.stepNum === BOARD_SIZE;
		
		if (winner) {
			status = `Winners is ${winner}`;
		} else if (isDraw) {
			status = `Friendship. Click on 'New game' link to play more`
		} else {
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		}

		return (
			<div>
				<a href='' onClick={this.restartGame}>New game</a>
				<div className="status">{status}</div>
				{
					Array(LINE_LENGTH).fill(null).map((row, i) => 
						<BoardRow size={LINE_LENGTH} row={i} key={i} squares={this.state.squares} passClick={this.handleClick} />
					)
				}
			</div>
		);
	}
}

export default Board;