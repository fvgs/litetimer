const {cursorTo, clearScreenDown} = require('readline')
const {EOL} = require('os')
const hms = require('hms-parse')
const zipWith = require('lodash/zipWith')
const {
	zero,
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	s,
	space,
	colon,
} = require('calligraphy')

const {stdout} = process

const map = {
	s,
	' ': space,
	':': colon,
	0: zero,
	1: one,
	2: two,
	3: three,
	4: four,
	5: five,
	6: six,
	7: seven,
	8: eight,
	9: nine,
}

const INDENT = ' '.repeat(8)
const PADDING = EOL.repeat(3)
const SPACING = ' '.repeat(2)

const getLine = (...segments) => INDENT + segments.join(SPACING)

const getOutput = hmsString => {
	const characters = [...hmsString].map(val => map[val])
	const lines = zipWith(...characters, getLine)
	return PADDING + lines.join(EOL) + PADDING
}

module.exports = (initialRow, initialColumn) => secondsRemaining => {
	cursorTo(stdout, initialColumn, initialRow)
	clearScreenDown(stdout)
	const hmsString = hms.fromSeconds(secondsRemaining)
	const output = getOutput(hmsString)
	stdout.write(output)
}
