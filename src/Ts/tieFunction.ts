export function tieFunction() {
  const getSectionElem: HTMLElement | null = document.querySelector('.section')
  const getSelectContainerElem: HTMLElement | null = document.querySelector(
    '.section__container',
  )

  getSelectContainerElem?.remove()

  const htmlElem = `
    <div class="ture-info">
        <div class="ture-info__container">
           <p class="ture-info__text"> tie !!!</p>
        </div>
    </div>
    `

  if (getSectionElem) {
    getSectionElem.innerHTML = htmlElem

    setTimeout(() => {
      window.location.reload()
    }, 2300)
  }
}
