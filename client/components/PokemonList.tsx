import {  useQuery } from "@tanstack/react-query"
import {fetchPokemonGeneration} from '../apis/pokemon'
import {PokemonGeneration} from '../../models/pokemon'
import { useParams } from "react-router-dom"
import LoadingSpinner from "./LoadingSpinner"
import { Link } from "react-router-dom"

export default function PokemonList() {
  // const generation = {
  //   name: 'generation-i',
  //   region: 'Kanto',
  //   pokemon: [{ id: num, name: 'Bulbasaur' }],
  // }

 
// const num = Number(useParams().id)
  const {data:generation, isError, isLoading} = useQuery({
    queryKey:['pokenmonList' ,1],
    queryFn:()=>fetchPokemonGeneration(1),
   
  })

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>Error loading Pokémon data</p>;
  }

  return (
    <>
      <h2>Pokémon in {generation?.region}:</h2>
      <ul>
        {generation?.pokemon.map((p) => (
          <li key={p.id}><Link to={`pokemon/${p.name}`}>{p.name}</Link></li>
        ))}
      </ul>
    </>
  )
}
