const args = require('commander')
const hms = require('hms-parse')

const {version} = require('../package')
const exampleText = require('./exampleText')

const {argv} = process

module.exports = () => {
	let hmsValues

	args
		.version(version)
		.arguments('<time...>')
		.action(time => {
			hmsValues = time
		})
		.on('--help', () => console.log(exampleText))
		.parse(argv)

	return hms.toSeconds(hmsValues)
}
