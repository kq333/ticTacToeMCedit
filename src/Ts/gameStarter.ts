import { createGridCharacters } from './createGridCharacters.ts'

export function gameStarter() {
  const getParentElem: HTMLElement | null = document.querySelector('.page')

  const introElem = `
    <div class="intro-block">
        <div class="intro-block__container">
            <img src="/src/assets/start-gif.gif" alt="fighter gif">
            <div class="intro-block__btn-container">
              <button class="intro-block__btn-reload">Play</button>
            </div>
        </div>
    </div>
    `

  if (getParentElem) {
    getParentElem.insertAdjacentHTML('beforeend', introElem)

    const getBtnStart: HTMLElement | null = document.querySelector(
      '.intro-block__btn-reload',
    )

    const getIntroBlock: HTMLElement | null =
      document.querySelector('.intro-block')

    const getPageContainer: HTMLElement | null =
      document.querySelector('.page__container')

    if (getPageContainer) {
      getPageContainer.style.display = 'none'
    }

    getBtnStart?.addEventListener('click', () => {
      getIntroBlock?.remove()
      if (getPageContainer) {
        getPageContainer.style.display = 'block'
        createGridCharacters()
      }
    })
  }
}
