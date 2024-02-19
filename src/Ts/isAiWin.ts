import { winningConditions } from './winningConditions.ts'
import { aiPrevMoves } from './aiNextMove.ts'
import { userWinTheTure } from './isUserWin.ts'

export let aiWinTheTure: boolean = false

export function isAiWin(): void {
  if (!userWinTheTure) {
    for (let i = 0; i < winningConditions.length; i++) {
      const condition: number[] = winningConditions[i]
      let matchedCount: number = 0
      for (let j = 0; j < condition.length; j++) {
        if (aiPrevMoves.includes(condition[j])) {
          matchedCount++
        }
      }
      if (matchedCount === 3) {
        console.log('Ai Wins!')
        aiWinTheTure = true
        break
      }
    }
  }
}
