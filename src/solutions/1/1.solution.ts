import { Mathy } from '../../lib/Mathy'
import { unique, sum } from '../../lib/array'
import { log } from '../../lib/log'
import { solutions } from '../Solutions'

export function e1(): number {
	let max = 999

	let multiplesOf3 = Mathy.getMultiples(3, max)
	let multiplesOf5 = Mathy.getMultiples(5, max)
	let uniques = unique(multiplesOf3.concat(multiplesOf5))

	return sum(uniques)
}

solutions.register(1, e1)
