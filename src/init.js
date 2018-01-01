const Timer = require('timercore')

const configureStdin = require('./configureStdin')
const handlePause = require('./handlePause')
const handleQuit = require('./handleQuit')
const getCursorPosition = require('./getCursorPosition')
const renderFactory = require('./renderFactory')

module.exports = async seconds => {
	const timer = new Timer(seconds)
	configureStdin(handlePause(timer), handleQuit(timer))
	const [row, column] = await getCursorPosition()
	const render = renderFactory(row, column)
	render(seconds)
	timer.on('tick', render)
	timer.start()
}
