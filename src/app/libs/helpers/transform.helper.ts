import { Pokemon, Sprites } from "src/app/interfaces/pokemon.interface";
import { Character } from "src/app/interfaces/rick-and-morty.interface";

export default class Transform {

  public static rickAndMorty(characters: any[]): Character[]{
    let mappedCharacters = characters.map(character => {
      return {
        name:     character.name,
        status:   character.status,
        species:  character.species,
        type:     character.type,
        gender:   character.gender,
        origin:   character.origin.name,
        location: character.location.name,
        image:    character.image
      }
    })

    return mappedCharacters
  }


  public static pokemon(pokemon: any): Pokemon {
    let mappedPokemon: Pokemon = {
      abilities: [],
      moves: [],
      name: "",
      sprites: {
        front_default: '',
        back_default: ''
      },
      types: []
    }
    
    //No entiendo por que hice esto tan complicado
    Object.keys(pokemon).forEach(key => {

      let abilities: string[] = []
      let moves: string[] = []
      let types: string[] = []
      let name: string = ''

      if(key.includes('abilities')){
        pokemon[key].forEach((element: any) => {
          abilities.push(element.ability.name)
        });
        mappedPokemon.abilities = abilities

      }else if(key.includes('moves')){
        pokemon[key].forEach((element: any) => {
          moves.push(element.move.name)
        });
        mappedPokemon.moves = moves

      }else if(key.includes('name')){
        name = pokemon[key]
        mappedPokemon.name = name

      }else if(key.includes('sprites')){
        mappedPokemon.sprites = {
          front_default: pokemon[key].front_default,
          back_default: pokemon[key].back_default,
          front_female: pokemon[key].front_female,
          back_female: pokemon[key].back_female,
          front_shiny: pokemon[key].front_shiny,
          back_shiny: pokemon[key].back_shiny
        }

      }else if(key.includes('types')){
        pokemon[key].forEach((element: any) => {
          types.push(element.type.name)
        });
        mappedPokemon.types = types
      }

    })
    
    return mappedPokemon

  }

} 