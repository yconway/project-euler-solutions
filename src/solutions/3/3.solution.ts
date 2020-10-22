import { Mathy } from "lib/Mathy";
import { solutions } from "solutions/Solutions";

export function solve3(): number {
    let problemNumber = 600851475143
    let maxNumber = problemNumber
    if(maxNumber % 3 !== 0)
    {
        maxNumber = maxNumber / 5
    }

    let primeFinder = Mathy.yieldPrimesViaSieve(Math.min(maxNumber))

    let currentCheck
    while(!(currentCheck = primeFinder.next()).done && currentCheck.value <= problemNumber){
        console.log('currentcheckvalue', currentCheck.value)
        if(problemNumber === currentCheck.value){
            return problemNumber
        }
        if(problemNumber % currentCheck.value === 0){
            problemNumber = problemNumber / currentCheck.value
        }
    }
    return -1
}

solutions.register(3, solve3)