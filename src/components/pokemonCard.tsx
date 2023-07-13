import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import Image from 'next/image'

export default function PokemonCard({ name ,image }: { name: string, image:string}) {
    return <Card className="my-4">
        <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <Image
                src={image}
                width={200}
                height={200}
                alt="Picture of the author"
            />
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
}