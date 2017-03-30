import React from 'react';

import Square from './Square';
import { LINE_LENGTH } from '../../rules/rules.json';

function BoardRow(props) {
	function renderSquare(i, row) {
		const squareIndex = row * LINE_LENGTH + i;
		return <Square value={props.squares[squareIndex]} key={i} onClick={props.passClick.bind(null, squareIndex, row)} />;
	}

	return (
		<div className="board-row">
			{ 
				Array(props.size).fill(null).map((_, i) => renderSquare(i, props.row))
			}
		</div>
	);
}

export default BoardRow;