import { userMoves, userTurnNum } from './userMove.ts'
import { winningConditions } from './winningConditions.ts'
import { aiWinTheTure } from './isAiWin.ts'
import { userWinTheTure } from './isUserWin.ts'

export let copyWinningConditions: number[][] = winningConditions.map(
  (subArray) => [...subArray],
)

export function gameEngine(): number[][] | undefined {
  let aiPossibleMoves: number[][] = []

  if (!aiWinTheTure && !userWinTheTure) {
    for (let i = 0; i < copyWinningConditions.length; i++) {
      let j = 0
      while (j < copyWinningConditions[i].length) {
        if (copyWinningConditions[i][j] === userMoves[userTurnNum - 1]) {
          copyWinningConditions[i].splice(j, 1)
        } else {
          j++
        }
      }
    }

    for (let i = copyWinningConditions.length - 1; i >= 0; i--) {
      if (copyWinningConditions[i].length === 0) {
        copyWinningConditions.splice(i, 1)
      }
    }

    for (let i = 0; i < copyWinningConditions.length; i++) {
      if (copyWinningConditions[i].length === 1) {
        aiPossibleMoves.push(copyWinningConditions[i])
      } else {
        if (copyWinningConditions[i].length === 3) {
          aiPossibleMoves.push(copyWinningConditions[i])
        }
      }
    }

    return aiPossibleMoves
  }
}
