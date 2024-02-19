import { characterDraw } from './characterDraw'

export function choosenCharacter(): void {
  const getElem: NodeListOf<Element> = document.querySelectorAll(
    '.grid-characters__item',
  )

  const getGridCharacters: HTMLElement | null =
    document.querySelector('.grid-characters')

  if (!getElem || (getElem.length === 0 && !getGridCharacters)) {
    console.log('There are no elements with class "grid-characters__item"')
    return
  }

  const removeElem = (): void => getGridCharacters?.remove()

  getElem.forEach((elem: Element): void => {
    elem.addEventListener('click', () => {
      const nameElem: HTMLElement | null = elem.querySelector(
        '.grid-characters__name',
      )

      if (nameElem) {
        characterDraw(nameElem.textContent)
        removeElem()
      }
    })
  })
}
