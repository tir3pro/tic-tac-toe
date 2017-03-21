const fs = require('fs');
const BOARD_SIZE = process.env.BOARD_SIZE || 25;
const lines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

fs.writeFileSync('rules.json', JSON.stringify({
	BOARD_SIZE,
	lines
}, null, 4));

console.log(BOARD_SIZE);