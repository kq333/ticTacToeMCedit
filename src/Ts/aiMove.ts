import { setNextTurnUser } from './userMove.ts';
import { isAiWin } from './isAiWin.ts';
import { userWinTheTure } from './isUserWin.ts';

export let nextTurnAi: boolean = true
export let aiTurnMoveNum: number = 0

export function setNextTurnAi(value: boolean): void {
  nextTurnAi = value;
}

export function aiMove(index: number): void {
  const getGridElem: NodeListOf<HTMLElement> =
    document.querySelectorAll('.grid__item')

  if (!userWinTheTure) {
    if (index >= 0) {
      getGridElem[index].classList.add('grid__item--ai')
      nextTurnAi = !nextTurnAi
      setNextTurnUser(false)
      aiTurnMoveNum++
      isAiWin()
    }
  }
}
