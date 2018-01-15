const {join, dirname} = require('path')
const Player = require('play-sound')

const {stdin, stdout} = process
const audio = join(dirname(__dirname), 'haiku.flac')

const beep = () => {
	const player = Player()
	beep.process = player.play(audio, err => {
		if (err) {
			stdout.write('\x07')
			console.log('Error: Unable to play audio')
		}
		stdin.pause()
	})
}

module.exports = beep
