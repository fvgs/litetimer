const {join, dirname} = require('path')
const Player = require('play-sound')

const {stdin} = process
const audio = join(dirname(__dirname), 'haiku.flac')

const beep = () => {
	const player = Player()
	beep.process = player.play(audio, err => {
		if (err) {
			throw err
		}
		stdin.pause()
	})
}

module.exports = beep
