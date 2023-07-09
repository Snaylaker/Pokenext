import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useQuery } from '@apollo/client';
import { GET_GEN1 } from '../server/queries';
import PokemonCard from '@/components/pokemonCard';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { loading, error, data } = useQuery(GET_GEN1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data.pokemon_v2_pokemonspecies)
  return (
    <main
      className={`flex min-h-screen flex-row items-center justify-between p-24 ${inter.className} bg-slate-400`}
    >
      {data.pokemon_v2_pokemonspecies.map((item: { name: string, id: string }) => <PokemonCard key={item.id} name={item.name} id={item.id} />)}
    </main>
  )
}
