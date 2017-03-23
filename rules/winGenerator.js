module.exports = function buildBoard(boardSize) {
	const lines = [];
	let step = Math.sqrt(boardSize);
	let lastSquareIndexInRow = step;
	let row = [];
	let column = [];
	let diagonal = [];
	
	for (let i = 0; i < boardSize; i++) {
		if (i < lastSquareIndexInRow) {
			row.push(i)
		} else {
			lines.push(row)
			row = [i];
			lastSquareIndexInRow += step;
		}
	}

	lines.push(row)

	for (let j = 0; j < step; j++) {
		let i = j;
		for (i; i < boardSize; i+= step) {
			if (i < boardSize && column.length < step) {
				column.push(i);
				if (column.length === step) {
					lines.push(column)	
					column = [];	
				}
			}
		}
	}
	
	if (column.length) lines.push(column);

	for (let i = 0; i < boardSize; i += (step + 1)) {
		diagonal.push(i);
	}

	lines.push(diagonal);
	
	diagonal = [];

	for (let i = step - 1; i < boardSize - 1; i += (step - 1)) {
		diagonal.push(i);
	}
	
	lines.push(diagonal);

	return lines;
}