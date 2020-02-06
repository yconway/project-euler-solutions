function uniqueFilter(value: number, index: number, array: number[]): boolean {
	return array.indexOf(value) === index
}

export function unique(numberArray: number[]): number[] {
	return numberArray.filter(uniqueFilter)
}
