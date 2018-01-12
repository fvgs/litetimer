module.exports = beep => () => {
	if (beep.process && !beep.process.killed) {
		beep.process.kill()
	}
}
