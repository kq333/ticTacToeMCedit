import {  aiNextMove } from './aiNextMove.ts';
import {  nextTurnAi } from './aiMove.ts';
import { isUserWin } from './isUserWin.ts';
import { aiWinTheTure } from './isAiWin.ts';

export let userMoves: number[] = [];
export let userTurnNum: number = 0;
export let nextTurnUser: boolean = false;

export function setNextTurnUser(value: boolean): void {
    nextTurnUser = value;
};

export function userMove(): void {

    if (!aiWinTheTure) {
        const getGridElem: NodeListOf<HTMLElement> = document.querySelectorAll('.grid__item');

        getGridElem.forEach((elem: HTMLElement, idx: number) => {

            elem.addEventListener('click', ()=> {

                if (!userMoves.includes(idx) && nextTurnAi) {
                    elem.classList.add('grid__item--user');
                    userMoves.push(idx);
                    userTurnNum++;
                    nextTurnUser = !nextTurnUser;
                    isUserWin();
                    aiNextMove();
                }
            })
        })
    }
};