import { Inter } from 'next/font/google'
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from './queries';
import PokemonCard from '@/components/pokemonCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data.pokemons.results)
  return (
    <main
      className={`flex min-h-screen flex-wrap flex-row  justify-between  ${inter.className} py-10 px-20 bg-slate-50`}
    >
      {data.pokemons.results.map((item: { name: string, id: string , image :string}) => <PokemonCard key={item.id} name={item.name} image ={item.image}/>)}
    </main>
  )
}