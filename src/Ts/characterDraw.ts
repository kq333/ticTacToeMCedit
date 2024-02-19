import { charactersImage } from './charactersImage'
import { CharacterImage } from '../types/characterImage'

export const charactersPlayingGame: CharacterImage[] = []

export function characterDraw(userCharacter: string | null) {
  let userCharacterId: number | undefined = undefined

  for (let i = 0; i < charactersImage.length; i++) {
    if (charactersImage[i].name === userCharacter) {
      charactersPlayingGame.push(charactersImage[i])
      userCharacterId = charactersImage[i].id
    }
  }

  const randomNum: number = Math.floor(Math.random() * 7)

  if (randomNum !== userCharacterId) {
    charactersPlayingGame.push(charactersImage[randomNum])
  }
}
