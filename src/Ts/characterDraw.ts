import { charactersImage } from './charactersImage'
import { CharacterImage } from '../types/characterImage'

export const charactersPlayingGame: CharacterImage[] = []

export function characterDraw(userCharacter: string | null): void {
  let userCharacterId: number | undefined = undefined

  for (let i = 0; i < charactersImage.length; i++) {
    const character: CharacterImage = charactersImage[i]
    if (character.name === userCharacter) {
      charactersPlayingGame.push(character)
      userCharacterId = character.id
    }
  }

  const randomNum: number = Math.floor(Math.random() * 7)

  if (randomNum !== userCharacterId) {
    charactersPlayingGame.push(charactersImage[randomNum])
  }
}
