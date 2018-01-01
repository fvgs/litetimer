const args = require('commander')
const hms = require('hms-parse')

const {version} = require('../package')

const {argv} = process

module.exports = () => {
	let hmsValues

	args
		.version(version)
		.arguments('<time...>')
		.action(time => {
			hmsValues = time
		})
		.parse(argv)

	return hms.toSeconds(hmsValues)
}
