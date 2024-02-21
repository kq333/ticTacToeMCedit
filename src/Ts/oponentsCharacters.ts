import { CharacterImage } from '../types/characterImage'

export function oponentsCharacters(
  userChoosenCharacter: CharacterImage[],
  aiDrawCharacter: CharacterImage[],
): void {
  const opponentsArray = [...userChoosenCharacter, ...aiDrawCharacter]

  const getElem: HTMLElement | null = document.querySelector(
    '.section__container',
  )
  const createElem = document.createElement('div')
  createElem.classList.add('card-opponents')
  getElem?.appendChild(createElem)

  const getElemParent = document.querySelector('.card-opponents')
  const createElemDiv = document.createElement('div')
  createElemDiv.classList.add('card-opponents__container')
  getElemParent?.appendChild(createElemDiv)

  const getCardElem: HTMLElement | null = document.querySelector(
    '.card-opponents__container',
  )

  if (getCardElem !== null) {
    const htmlElements = opponentsArray.map(
      (elem: CharacterImage, index: number): string => {
        const label = index % 2 === 0 ? 'Player' : 'Mighty Ai'
        return `
            <div class="card-opponents__item">
              <p  class="card-opponents__text"> ${label} </p>
              <img src='${elem.img}' alt='${elem.name}' class="card-opponents__img">
            </div>
      `
      },
    )

    getCardElem.innerHTML = htmlElements.join('')
  }
}
