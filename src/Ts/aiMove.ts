import { setNextTurnUser } from './userMove.ts'
import { isAiWin } from './isAiWin.ts'
import { userWinTheTure } from './isUserWin.ts'
import { aiDrawCharacter } from './characterDraw.ts'

export let nextTurnAi: boolean = true
export let aiTurnMoveNum: number = 0

export function setNextTurnAi(value: boolean): void {
  nextTurnAi = value
}

export function aiMove(index: number): void {
  const getGridElem: NodeListOf<HTMLElement> =
    document.querySelectorAll('.grid__item')

  if (!userWinTheTure) {
    if (index >= 0) {
      getGridElem[index].style.backgroundImage =
        `url('${aiDrawCharacter[0].img}')`
      nextTurnAi = !nextTurnAi
      setNextTurnUser(false)
      aiTurnMoveNum++
      isAiWin()
    }
  }
}
