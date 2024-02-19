import { gameEngine } from './gameEngine.ts'
import { aiMove, nextTurnAi, setNextTurnAi, aiTurnMoveNum } from './aiMove.ts'
import { nextTurnUser, setNextTurnUser, userTurnNum } from './userMove.ts'
import { copyWinningConditions } from './gameEngine.ts'

export let aiPrevMoves: number[] = []

export function aiNextMove(): void {
  const sumGameTurnsNum: boolean = aiTurnMoveNum + userTurnNum !== 9
  const aiPossibleMoves: number[][] | undefined = gameEngine()

  if (sumGameTurnsNum && aiPossibleMoves !== undefined) {
    let randomNumber: number | undefined = undefined

    for (let i = 0; i < aiPossibleMoves.length; i++) {
      const selectedArray = aiPossibleMoves[i]
      let randomIndexWithinArray: number

      if (selectedArray.length === 1) {
        randomNumber = selectedArray[0]
        const findAppliedNum = copyWinningConditions[i].indexOf(
          selectedArray[0],
        )
        copyWinningConditions[i].splice(findAppliedNum, 1)
        break
      } else {
        randomIndexWithinArray = Math.floor(
          Math.random() * selectedArray.length,
        )
        randomNumber = selectedArray[randomIndexWithinArray]
      }
    }

    if (randomNumber !== undefined && !aiPrevMoves.includes(randomNumber)) {
      aiPrevMoves.push(randomNumber)

      setTimeout((): void => {
        if (typeof randomNumber === 'number') {
          aiMove(randomNumber)
          setNextTurnAi(!nextTurnAi)
          setNextTurnUser(!nextTurnUser)
        }
      }, 800)
    } else {
      aiNextMove()
    }
  } else {
    console.log('duce')
  }
}
