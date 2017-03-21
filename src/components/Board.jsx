import React from 'react';

import Square from './Square';
import calculateWinner from '../helpers/calculateWinner';

const boardSize = 9;

class Board extends React.Component {
	constructor() {
		super();

		this.state = {
			squares: Array(boardSize).fill(null),
			xIsNext: true,
			stepNum: 0
		};

		this.restartGame = this.restartGame.bind(this);
	}
	handleClick(i) {
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
			squares: Array(boardSize).fill(null),
			xIsNext: true,
			stepNum: 0
		});
	}
	render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		let isDraw = this.state.stepNum === 9;
		
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
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

export default Board;