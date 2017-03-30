import React from 'react';

import Square from './Square';
import BoardRow from './BoardRow';
import { LINE_LENGTH } from '../../rules/rules.json';

function Board(props) {
	return (
		<div>
			<a href='' onClick={props.restart}>New game</a>
			<div className="status">{props.status}</div>
			{
				Array(LINE_LENGTH).fill(null).map((row, i) => 
					<BoardRow size={LINE_LENGTH} row={i} key={i} squares={props.squares} passClick={props.onClick} />
				)
			}
		</div>
	);
}

export default Board;