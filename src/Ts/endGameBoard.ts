import { userWinTheTure } from './isUserWin'
import { userChoosenCharacter } from './characterDraw'
import { aiDrawCharacter } from './characterDraw'
import { CharacterImage } from '../types/characterImage'
import fatality from '../assets/fatality.mp3'

export function endGameBoard(): void {
  const getGridElem: HTMLElement | null = document.querySelector('.grid')
  const getCardElem: HTMLElement | null =
    document.querySelector('.card-opponents')
  const getContainer: HTMLElement | null = document.querySelector('.page')

  getGridElem?.remove()
  getCardElem?.remove()

  const htmlElement = (winnerObj: CharacterImage[]): string => {
    return winnerObj
      .map((elem): string => {
        return `
          <div class="winner-board">
            <div class="winner-board__container">
              <img class="winner-board__img"
                src="${elem.gif}"
                alt="${elem.name}"
              >
              <div class="winner-board__btn-container">
                <button class="winner-board__btn">Retry</button>
              </div>
            </div>
          </div>
        `
      })
      .join('')
  }

  if (getContainer) {
    if (userWinTheTure) {
      getContainer.innerHTML = htmlElement(userChoosenCharacter)
    } else {
      getContainer.innerHTML = htmlElement(aiDrawCharacter)
    }

    setTimeout(() => {
      const audio = new Audio(fatality)
      audio.play()
    }, 500)
  }

  const getWinnerElem: HTMLElement | null =
    document.querySelector('.winner-board')
  const getBtnRetry = document.querySelector('.winner-board__btn')

  getBtnRetry?.addEventListener('click', () => {
    getWinnerElem?.remove()
    window.location.reload()
  })
}
