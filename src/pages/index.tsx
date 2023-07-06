import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { useQuery} from '@apollo/client';
import { GET_GEN1 } from './queries';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { loading, error, data } = useQuery(GET_GEN1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if(data) console.log(data)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-slate-400`}
    >

    </main>
  )
}
