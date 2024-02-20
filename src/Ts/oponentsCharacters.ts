import { CharacterImage } from '../types/characterImage'

export function oponentsCharacters(
  userChoosenCharacter: CharacterImage[],
  aiDrawCharacter: CharacterImage[],
): void {
  const opponentsArray = [...userChoosenCharacter, ...aiDrawCharacter]

  console.log(opponentsArray)

  const getElem: HTMLElement | null = document.querySelector('.section')
  const createElem = document.createElement('div')
  createElem.classList.add('card-opponents')
  getElem?.appendChild(createElem)

  const getCardElem: HTMLElement | null =
    document.querySelector('.card-opponents')

  if (getCardElem !== null) {
    const htmlElements = opponentsArray.map(
      (elem: CharacterImage, index: number): string => {
        const label = index % 2 === 0 ? 'User' : 'Mighty AI'
        return `
          <div class="card-opponents__container">
            <div class="card-opponents__item">
              <p> ${label} </p>
              <img src='${elem.img}' alt='${elem.name}' class="card-opponents__img">
            </div>
          </div>
      `
      },
    )

    getCardElem.innerHTML = htmlElements.join('')
  }
}
