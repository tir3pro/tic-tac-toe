import React from 'react';

import Square from './Square';

class BoardRow extends React.Component {
	constructor() {
		super();
	}

	renderSquare(i) {
		// return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
		return <Square passClick={this.props.passClick} />;
	}
	
	renderRow() {
		let row = [];
		
		for (let i = 0; i < Math.sqrt(this.props.boardSize.length); i++) {
			row.push(this.renderSquare(i));
		}

		return row;
	}

	render() {
		return (
			<div className="board-row">
				{this.renderRow()}
			</div>
		);
	}
}

export default BoardRow;