export function createGrid(): void {
    const getGrid: HTMLElement | null = document.querySelector('.grid');

    if (!getGrid) {
        console.error("Grid element not found!");
        return;
    }

    for (let i: number = 0; i < 9; i++) {
        const createElem: HTMLDivElement = document.createElement('div');
        createElem.classList.add('grid__item');
        createElem.textContent = i.toString();
        getGrid.appendChild(createElem);
    }
}
