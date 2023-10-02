// return masked string
/* function maskify(cc) {
	if (cc.length > 4) {
		const newString = []
		;[...cc].forEach((e, i) => {
			if (i < cc.length - 4) {
				newString.push('#')
			} else if (i >= cc.length - 4) {
				newString.push(e)
			}
		})
		return newString.join('')
	}
	return cc
} */
const maskify = cc => {
	return [...cc].map((e, i) => (i < cc.length - 4 ? (e[i] = '#') : e)).join('')
}
console.log(maskify('4556364607935616')) // ############5616
/* Возвращает строку с решетками кроме последних 4 цифр. Если переданных цифр в строке меньше 4 то возвращает просто строку с цифрами */

console.log(maskify('34234234')) // ####4234
