function highAndLow(numbers) {
	let highAndLow = []
	const maxValue = numbers.split(' ').sort((a, b) => b - a)
	highAndLow.push(maxValue[0])
	const minValue = numbers.split(' ').sort((a, b) => a - b)
	highAndLow.push(minValue[0])
	return `${highAndLow[0]} ${highAndLow[1]}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
