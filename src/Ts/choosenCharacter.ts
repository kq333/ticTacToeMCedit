import { characterDraw } from './characterDraw'

export function choosenCharacter(): void {
  const getElem: NodeListOf<Element> = document.querySelectorAll(
    '.grid-characters__item',
  )

  if (!getElem || getElem.length === 0) {
    console.log('There are no elements with class "grid-characters__item"')
    return
  }

  getElem.forEach((elem: Element): void => {
    elem.addEventListener('click', () => {
      const nameElem: HTMLElement | null = elem.querySelector(
        '.grid-characters__name',
      )

      if (nameElem) {
        characterDraw(nameElem.textContent)
      }
    })
  })
}
