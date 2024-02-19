export function createGrid(): void {
  const getSectionElem: HTMLElement | null = document.querySelector('.section')
  const getGrid: HTMLElement | null = document.createElement('div')
  getGrid.classList.add('grid')
  getSectionElem?.appendChild(getGrid)

  if (!getGrid) {
    console.error('Grid element not found!')
    return
  }

  for (let i: number = 0; i < 9; i++) {
    const createElem: HTMLDivElement = document.createElement('div')
    createElem.classList.add('grid__item')
    getGrid.appendChild(createElem)
  }
}
