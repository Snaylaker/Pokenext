import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from 'next/image'

export default function PokemonCard({ name, id }: { name: string, id: string }) {
    return <Card>
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
}