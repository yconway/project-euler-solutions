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

	static *yieldFibonacci(maxValue: number = Number.POSITIVE_INFINITY): IterableIterator<number> {
		let current = 0
		let next = 1
		while (next < maxValue) {
			yield next
			;[current, next] = [next, current + next]
		}
		// 2
		// 2 + 2 + 2 + 1 + 1
		// 8 + 8 + 8 + 2 * ( 1 + 2x2)
		// 34 + 34 + 34 + 2*( 1 + 2x2 + 2x8)
		// 144 + 144 + 144 + 2 *(1 + 2x2 + 2x8 + 2x34)
	}

	static *yieldEvenFibonacci(maxValue: number = Number.POSITIVE_INFINITY): IterableIterator<number> {
		let current = 0
		let next = 2
		while (next < maxValue) {
			yield next
			;[current, next] = [next, 4 * next + current]
		}
	}

	static *yieldPrimesViaSieve(maxValue: number = Number.POSITIVE_INFINITY):IterableIterator<number>{
		let sieve: Array<{prime: number, currentSieveValue: number}> = []
		let currentValue = 2

		let generateNextCurrentValue = () => {
			sieve.push({prime: currentValue, currentSieveValue: currentValue + currentValue})

			let nextPrimeFound = false
			while(!nextPrimeFound){
				currentValue++
				updateSieveValues()
				if(sieve.every((potentialPrimeMultiple) => potentialPrimeMultiple.currentSieveValue > currentValue)){
					nextPrimeFound = true
				}
			}
		}

		let updateSieveValues = () => {
			sieve.forEach((primeSuspect) => {
				while(primeSuspect.currentSieveValue < currentValue){
					primeSuspect.currentSieveValue += primeSuspect.prime
				}
			})
		}
		while(currentValue < maxValue){
			yield currentValue
			generateNextCurrentValue()
		}
	}
}
