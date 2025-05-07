import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'

export default function PerformancePart(performance_part: any) {
  return (
    <Card className="h-auto m-0 p-0 bg-transparent border-none text-white text-3xl">
      <CardHeader>
        <CardTitle>{performance_part.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{performance_part.desc}</CardDescription>
        <Image
          alt="Photo of part"
          src={`/public/images/${performance_part.img}`}
          width={500}
          height={500}
        />
      </CardContent>
    </Card>
  )
}
