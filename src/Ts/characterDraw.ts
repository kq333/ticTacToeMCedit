import { charactersImage } from './charactersImage'
import { CharacterImage } from '../types/characterImage'
import { createGrid } from './createGrid.ts'
import { userMove } from './userMove.ts'

export const userChoosenCharacter: CharacterImage[] = []
export const aiDrawCharacter: CharacterImage[] = []

export function characterDraw(userCharacter: string | null): void {
  let userCharacterId: number | undefined = undefined

  for (let i = 0; i < charactersImage.length; i++) {
    const character: CharacterImage = charactersImage[i]
    if (character.name === userCharacter) {
      userChoosenCharacter.push(character)
      userCharacterId = character.id
    }
  }

  function randomNum(): number {
    return Math.floor(Math.random() * charactersImage.length)
  }

  const randomIndex = randomNum()

  if (randomIndex !== userCharacterId) {
    aiDrawCharacter.push(charactersImage[randomIndex])
  } else {
    let newIndex
    do {
      newIndex = randomNum()
    } while (newIndex === userCharacterId)
    aiDrawCharacter.push(charactersImage[newIndex])
  }

  createGrid()
  userMove()
}
