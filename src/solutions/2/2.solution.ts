import { Mathy } from '../../lib/Mathy'
import { unique, sum } from '../../lib/array'
import { log } from '../../lib/log'
import { solutions } from '../Solutions'

export function solve2(): number {
	let total = 0

	let current = 0
	let next = 2
	while (next < 4000000) {
		total += next
		;[current, next] = [next, 4 * next + current]
	}
	//2
	//2 + 2 + 2 + 1 + 1
	//8 + 8 + 8 + 2 * ( 1 + 2x2)
	//34 + 34 + 34 + 2*( 1 + 2x2 + 2x8)
	//144 + 144 + 144 + 2 *(1 + 2x2 + 2x8 + 2x34)
	//2 + 4x2 + 4x8 = 144 - 3x34

	//3x144 + (144 - 3x34) + 2x34 = 4x144 + 34
	return total
}

solutions.register(2, solve2)
