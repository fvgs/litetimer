const {stdin} = process

module.exports = (onPause, onQuit) => {
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
				break
			case '\x03':
				process.exit()
				break
		}
	})
}
