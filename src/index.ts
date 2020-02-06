import { solutions } from './solutions/Solutions'

// console.log(process.env.NODE_PATH)
glob.sync('./solutions/**/*.solution.ts').forEach((file: any) => {
	requestAnimationFrame(path.resolve(file))
})

solutions.solve()
