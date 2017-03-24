import { winLines } from '../../rules/rules.json';

export default function calculateWinner(squares) {
	let winCombination = winLines.find(combination => {
  		let values = combination.map(winIndex => squares[winIndex]);
  		return values.reduce((prev, curr) => prev === curr ? prev : NaN);
 	});

 	return winCombination ? squares[winCombination[0]] : null
}