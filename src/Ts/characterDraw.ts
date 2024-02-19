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

  const randomNum: number = Math.floor(Math.random() * charactersImage.length)

  if (randomNum !== userCharacterId) {
    aiDrawCharacter.push(charactersImage[randomNum])
  }

  createGrid()
  userMove()
}
