export class Mathy {
	/*
    @param multiplier number to get multiples of
    @param max maximum nubmer to get multiple of (inclusive)
    */
	static getMultiples(multiplier: number, max: number): number[] {
		let multiples = []

		if (multiplier !== 0) {
			let current = multiplier
			while (current <= max) {
				multiples.push(current)
				current += multiplier
			}
		}

		return multiples
	}
}
