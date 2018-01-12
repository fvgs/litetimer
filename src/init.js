const Timer = require('timercore')
const cliCursor = require('cli-cursor')

const configureStdin = require('./configureStdin')
const handlePauseFactory = require('./handlePauseFactory')
const handleQuitFactory = require('./handleQuitFactory')
const getCursorPosition = require('./getCursorPosition')
const renderFactory = require('./renderFactory')

module.exports = async seconds => {
	cliCursor.hide()
	const timer = new Timer(seconds)
	const handlePause = handlePauseFactory(timer)
	const handleQuit = handleQuitFactory(timer)
	configureStdin(handlePause, handleQuit)
	const [row, column] = await getCursorPosition()
	const render = renderFactory(row, column)
	render(seconds)
	timer.on('tick', render)
	timer.start()
}
