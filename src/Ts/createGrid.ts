export function createGrid(): void {
  const getSectionElem: HTMLElement | null = document.querySelector(
    '.section__container',
  )
  const createElemDiv: HTMLElement | null = document.createElement('div')
  createElemDiv.classList.add('grid')
  getSectionElem?.appendChild(createElemDiv)

  const getGridElem = document.querySelector('.grid')
  const createElemContainer = document.createElement('div')
  createElemContainer.classList.add('grid__container')
  getGridElem?.appendChild(createElemContainer)

  if (!createElemDiv) {
    console.error('Grid element not found!')
    return
  }

  for (let i: number = 0; i < 9; i++) {
    const createElem: HTMLDivElement = document.createElement('div')
    createElem.classList.add('grid__item')
    createElemContainer.appendChild(createElem)
  }
}
