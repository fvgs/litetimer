const QUERY_CURSOR = '\x1b[6n'

const {stdin, stdout} = process

const getResponseFactory = resolve => {
	const getResponse = val => {
		const [, row, column] = val.match(/^\x1b\[(\d+);(\d+)R$/) || []

		if (row && column) {
			stdin.removeListener('data', getResponse)
			resolve([Number(row) - 1, Number(column) - 1])
		}
	}

	return getResponse
}

module.exports = () =>
	new Promise(resolve => {
		const getResponse = getResponseFactory(resolve)
		stdin.on('data', getResponse)
		stdout.write(QUERY_CURSOR)
	})
