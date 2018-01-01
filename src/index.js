const parseArgsToSeconds = require('./parseArgsToSeconds')
const init = require('./init')

module.exports = () => init(parseArgsToSeconds())
