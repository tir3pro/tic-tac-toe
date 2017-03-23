import React from 'react';

import Square from './Square';
import { LINE_LENGTH } from '../../rules/rules.json';

class BoardRow extends React.Component {
	renderSquare(i, row) {
		const squareIndex = row * LINE_LENGTH + i;
		return <Square value={this.props.squares[squareIndex]} key={i} onClick={this.props.passClick.bind(null, squareIndex, row)} />;
	}

	render() {
		return (
			<div className="board-row">
				{ 
					Array(this.props.size).fill(null).map((_, i) => this.renderSquare(i, this.props.row))
				}
			</div>
		);
	}
}

export default BoardRow;