function isPangram() {
	const lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	if ([...string].every(e => [...lang].includes(e))) {
		return true
	}
	return false
}
const lang = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alph = lang.toLowerCase()
const strings = 'The quick brown fox jumps over the lazy dog.'
const lowerStrings = strings.toLowerCase()
console.log([...alph].every(e => [...lowerStrings].includes(e)))
