import { winningConditions } from './winningConditions.ts'
import { userMoves } from './userMove.ts'
import { aiWinTheTure } from './isAiWin.ts'

export let userWinTheTure: boolean = false

export function isUserWin(): void {
  if (!aiWinTheTure) {
    for (let i = 0; i < winningConditions.length; i++) {
      const condition: number[] = winningConditions[i]
      let matchedCount: number = 0

      for (let j = 0; j < condition.length; j++) {
        if (userMoves.includes(condition[j])) {
          matchedCount++
        }
      }
      if (matchedCount === 3) {
        console.log('user Wins!')
        userWinTheTure = true
        break
      }
    }
  }
}
