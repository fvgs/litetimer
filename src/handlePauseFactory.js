module.exports = (timer, isStarted = true) => () => {
	if (isStarted) {
		timer.stop()
	} else {
		timer.start()
	}

	isStarted = !isStarted
}
