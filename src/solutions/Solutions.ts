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
		if (solutionIndex && this.solvers[solutionIndex]) {
			return this.solvers[solutionIndex]()
		}
		return
	}
}

let solutions = new Solutions()

export { solutions }
