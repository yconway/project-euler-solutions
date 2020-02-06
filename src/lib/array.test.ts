import { unique, sum } from './array'

describe('unique', () => {
	const makeParam = (input: number[], expected: number[]) => {
		return { input, expected }
	}
	const params = [
		makeParam([1, 1, 2, 3], [1, 2, 3]),
		makeParam([], []),
		makeParam([1, 1, 1, 1, 1, 1], [1]),
		makeParam([1.5, 1.5, 1.6], [1.5, 1.6]),
	]
	it.each(params)('returns only unique numbers for array %o', (param) => {
		const uniques = unique(param.input).sort()
		const expected = param.expected.sort()
		expect(uniques).toEqual(expected)
	})
})

describe('sum', () => {
	const makeParam = (input: number[], expected: number) => {
		return { input, expected }
	}
	const params = [makeParam([1, 1, 2, 3], 7), makeParam([], 0), makeParam([1, 1, 1, 1, 1, 1], 6), makeParam([5, -5], 0)]
	it.each(params)('sums array %o to value %d', (param) => {
		expect(sum(param.input)).toEqual(param.expected)
	})
})
