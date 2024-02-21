import { winningConditions } from './winningConditions.ts'
import { aiPrevMoves } from './aiNextMove.ts'
import { userWinTheTure } from './isUserWin.ts'
import { endGameBoard } from './endGameBoard.ts'

export let aiWinTheTure: boolean = false
export let aiWinningNums: number[] = []

export function isAiWin(): void {
  if (!userWinTheTure) {
    for (let i = 0; i < winningConditions.length; i++) {
      const condition: number[] = winningConditions[i]
      let matchedCount: number = 0
      let matchedNumbers: number[] = []
      for (let j = 0; j < condition.length; j++) {
        if (aiPrevMoves.includes(condition[j])) {
          matchedCount++
          matchedNumbers.push(condition[j])
        }
      }
      if (matchedCount === 3) {
        aiWinningNums = aiWinningNums.concat(matchedNumbers)

        const getGridElem: NodeListOf<Element> | null =
          document.querySelectorAll('.grid__item')

        getGridElem.forEach((elem: Element, idx: number): void => {
          if (matchedNumbers.includes(idx)) {
            elem.classList.add('grid__item--winning-item')
            elem.classList.remove('grid__item--isActive')
          }
        })
        aiWinTheTure = true

        const getGridElems: NodeListOf<Element> | null =
          document.querySelectorAll('.grid__item')

        getGridElems.forEach((elem: Element, idx: number): void => {
          if (matchedNumbers.includes(idx)) {
            elem.classList.add('grid__item--winning-item')
            elem.classList.remove('grid__item--isActive')
          } else {
            elem.classList.remove('grid__item--isActive')
            ;(elem as HTMLElement).style.backgroundImage = ''
          }

          setTimeout(() => {
            endGameBoard()
          }, 1500)
        })
        break
      }
    }
  }
}
