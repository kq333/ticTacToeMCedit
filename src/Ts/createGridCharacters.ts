import { CharacterImage } from '../types/characterImage'
import { charactersImage } from './charactersImage'
import { choosenCharacter } from './choosenCharacter'

export function createGridCharacters() {
  const getElem: HTMLElement | null = document.querySelector('.grid-characters')

  if (!getElem) {
    console.error('Grid element not found!')
    return
  }

  const containerElem = document.createElement('div')
  const createHeader = document.createElement('header')
  createHeader.classList.add('grid-characters__header')
  const createH2 = document.createElement('h2')
  createH2.classList.add('grid-characters__text')
  createH2.textContent = 'Choose a character'

  getElem.appendChild(createHeader)
  createHeader.appendChild(createH2)

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

  choosenCharacter()
}
