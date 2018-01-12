const {stdin} = process

module.exports = (onPause, onQuit, onExit) => {
	stdin.setRawMode(true)
	stdin.setEncoding('utf8')

	stdin.on('data', val => {
		switch (val) {
			case 'p':
				onPause()
				break
			case 'q':
			case '\x04':
				onQuit()
				stdin.pause()
				onExit()
				break
			case '\x03':
				onExit()
				process.exit()
				break
		}
	})
}
