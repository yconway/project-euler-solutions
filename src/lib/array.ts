function uniqueFilter(value: number, index: number, array: number[]): boolean {
	return array.indexOf(value) === index
}

export function unique(numberArray: number[]): number[] {
	return numberArray.filter(uniqueFilter)
}

export function sum(numberArray: number[]): number {
	return numberArray.reduce((accumulator, currentVal) => {
		return accumulator + currentVal
	}, 0)
}
