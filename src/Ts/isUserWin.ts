import { winningConditions } from './winningConditions.ts'
import { userMoves } from './userMove.ts'
import { aiWinTheTure } from './isAiWin.ts'
import { endGameBoard } from './endGameBoard.ts'

export let userWinTheTure: boolean = false
export let userWinningNums: number[] = []

export function isUserWin(): void {
  if (!aiWinTheTure) {
    for (let i = 0; i < winningConditions.length; i++) {
      const condition: number[] = winningConditions[i]
      let matchedCount: number = 0
      let matchedNumbers: number[] = []

      for (let j = 0; j < condition.length; j++) {
        if (userMoves.includes(condition[j])) {
          matchedCount++
          matchedNumbers.push(condition[j])
        }
      }
      if (matchedCount === 3) {
        userWinningNums = userWinningNums.concat(matchedNumbers)
        userWinTheTure = true

        const getGridElem: NodeListOf<Element> | null =
          document.querySelectorAll('.grid__item')

        getGridElem.forEach((elem: Element, idx: number): void => {
          if (matchedNumbers.includes(idx)) {
            elem.classList.add('grid__item--winning-item')
            elem.classList.remove('grid__item--isActive')
          } else {
            elem.classList.remove('grid__item--isActive')
            ;(elem as HTMLElement).style.backgroundImage = ''
          }

          setTimeout(() => {

            endGameBoard()

          },2000)


        })



        break
      }
    }
  }
}
