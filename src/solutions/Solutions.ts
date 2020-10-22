import { log } from 'lib/log'

class Solutions {
	private solvers: { [key: number]: () => any }
	private largestSolution: number
	constructor() {
		this.solvers = {}
		this.largestSolution = 0
	}

	register(index: number, solver: () => any): void {
		this.solvers[index] = solver
		if (index > this.largestSolution) {
			this.largestSolution = index
		}
	}

	solve(index?: number): any {
		let solutionIndex = index || this.largestSolution
		let result
		if (solutionIndex && this.solvers[solutionIndex]) {
			result = this.solvers[solutionIndex]()
		}
		log('result for problem', solutionIndex, ': ', result)
		return result
	}
}

let solutions = new Solutions()

export { solutions }
