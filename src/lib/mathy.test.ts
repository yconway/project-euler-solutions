import { Mathy } from './Mathy'

describe('mathy.getMultiples', () => {
	let makeParam = (ogNumber: number, maxNumber: number, multiples: number[]) => {
		return { ogNumber, maxNumber, multiples }
	}
	let params = [
		makeParam(0, 9, []),
		makeParam(5, 10, [5, 10]),
		makeParam(3, 20, [3, 6, 9, 12, 15, 18]),
		makeParam(1, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
		// makeParam(0.2, 1, [0.2, 0.4, 0.6, 0.8, 1]),
	]
	it.each(params)('correctly gets multiples of %d', (param) => {
		expect(Mathy.getMultiples(param.ogNumber, param.maxNumber)).toEqual(param.multiples)
	})
})

describe('mathy.yieldFibonacci', () => {
	it('yields fibonacci', () => {
		let yielder = Mathy.yieldFibonacci()
		expect(yielder.next().value).toEqual(1)
		expect(yielder.next().value).toEqual(1)
		expect(yielder.next().value).toEqual(2)
		expect(yielder.next().value).toEqual(3)
		expect(yielder.next().value).toEqual(5)
		expect(yielder.next().value).toEqual(8)
		expect(yielder.next().value).toEqual(13)
		expect(yielder.next().value).toEqual(21)
		expect(yielder.next().value).toEqual(34)
	})
	it('yields fibonacci', () => {
		let yielder = Mathy.yieldFibonacci(22)
		expect(yielder.next().value).toEqual(1)
		expect(yielder.next().value).toEqual(1)
		expect(yielder.next().value).toEqual(2)
		expect(yielder.next().value).toEqual(3)
		expect(yielder.next().value).toEqual(5)
		expect(yielder.next().value).toEqual(8)
		expect(yielder.next().value).toEqual(13)
		expect(yielder.next().value).toEqual(21)
		expect(yielder.next().value).toEqual(undefined)
	})
})
