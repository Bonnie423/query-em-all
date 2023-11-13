import { useParams } from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'
import { useQueries, useQuery } from '@tanstack/react-query'
import {fetchPokemonByName} from '../apis/pokemon.ts'
import LoadingSpinner from './LoadingSpinner.tsx'
 
export default function PokemonDetail() {
  const { name } = useParams()
 
  const {data: pokemon, isError, isLoading}=useQuery({
   
    queryKey: ['single-pokemon', name],
    queryFn: ()=>(name?fetchPokemonByName(name): Promise.reject('This name is not found'))
  })
  console.log(pokemon)
  if(isError){
    return <p>Error loading Pokémon data</p>;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1>{name}</h1>
      <h2>Types: </h2>
      {pokemon?.types.map(({ type, slot }) => (
        <p key={slot}>{type.name}</p>
      ))}
      <img
        src={pokemon?.sprites.front_default}
        alt={`Front Default Sprite for ${pokemon?.name}`}
      />
      <section>
        <h2>Abilities: </h2>
        {pokemon?.abilities.map(({ ability, slot }) => (
          <p key={slot}>{ability.name}</p>
        ))}
      </section>
      <section>
        <h2>Species: </h2>
        {pokemon?.species.name
        }
      </section>
      <section>
        <h2>Weight: </h2>
        {pokemon?.weight
        }
      </section>
      <section>
        <h2>Moves: </h2>
        {pokemon?.moves.map(({ move }) => (
          <p key={move.name}>{move.name}</p>
        ))}
      </section>
    </div>
  )
}

