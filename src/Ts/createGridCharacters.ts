import { CharacterImage } from '../types/characterImage'
import { charactersImage } from './charactersImage'

export function createGridCharacters() {
  const getElem: HTMLElement | null = document.querySelector('.grid-characters')

  if (!getElem) {
    console.error('Grid element not found!')
    return
  }

  const containerElem = document.createElement('div')
  containerElem.classList.add('grid-characters__container')

  charactersImage.forEach((elem: CharacterImage) => {
    const itemElem = document.createElement('div')
    itemElem.classList.add('grid-characters__item')

    const imgElem = document.createElement('img')
    imgElem.classList.add('grid-characters__img')
    imgElem.src = elem.img
    imgElem.alt = elem.name

    const nameElem = document.createElement('p')
    nameElem.classList.add('grid-characters__name')
    nameElem.textContent = elem.name

    itemElem.appendChild(imgElem)
    itemElem.appendChild(nameElem)

    containerElem.appendChild(itemElem)
  })

  getElem.appendChild(containerElem)
}
