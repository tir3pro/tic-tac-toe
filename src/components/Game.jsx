import React from 'react';

import Board from './Board';
import calculateWinner from '../helpers/calculateWinner';
import { BOARD_SIZE } from '../../rules/rules.json';

class Game extends React.Component {
	constructor() {
		super();

		this.state = {
			squares: Array(BOARD_SIZE).fill(null),
			xIsNext: true,
			stepNum: 0,
			player: ''
		};

		this.restartGame = this.restartGame.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.computersTurn = this.computersTurn.bind(this);
	}
	componentDidMount() {
		const player = prompt('Press "1" if you want to play with your friend and "2" to play with a computer') === '1' ? 'Player' : 'Computer';

		this.setState({
			player
		});
	}
	handleClick(i) {
		const squares = this.state.squares.slice();
		let stepNum;

		if (calculateWinner(this.state.squares) || squares[i]) {
			return;
		}
		
		stepNum = this.state.stepNum += 1;

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		
		this.setState({
			squares,
			xIsNext: !this.state.xIsNext,
			stepNum
		}, this.state.player === 'Computer' ? this.computersTurn : () => {});
	}
	computersTurn() {
		if (this.state.stepNum >= BOARD_SIZE) {
			return;
		}
		setTimeout(() => {
			if (calculateWinner(this.state.squares)) {
				return;
			}
			const freeSquaresIndexes = this.state.squares.reduce((state, square, i) => {
				if (!square) {
					state.push(i);
				}
				return state;
			}, []);
			const squareToClick = freeSquaresIndexes[Math.floor(Math.random() * freeSquaresIndexes.length)];
			const squares = this.state.squares.slice();
			const stepNum = this.state.stepNum += 1;

			squares[squareToClick] = 'O';
			this.setState({
				squares,
				xIsNext: true,
				stepNum
			});
		}, 100);
	}
	restartGame(e) {
		e.preventDefault();
		let player = prompt('Press "1" if you want to play with your friend and "2" to play with a computer') === '1' ? 'Player' : 'Computer';

		this.setState({
			squares: Array(BOARD_SIZE).fill(null),
			xIsNext: true,
			stepNum: 0,
			player
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
			<div className="game">
				<div className="game-board">
					<Board restart={this.restartGame} status={status} squares={this.state.squares} onClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

export default Game;