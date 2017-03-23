const fs = require('fs');
const BOARD_SIZE = Number(process.env.BOARD_SIZE) || 25;
const LINE_LENGTH = Math.sqrt(BOARD_SIZE);
const winLines = require('./winGenerator')(BOARD_SIZE);

fs.writeFileSync('rules/rules.json', JSON.stringify({
	BOARD_SIZE,
	LINE_LENGTH,
	winLines
}, null, 4));