import { LocateIcon, Mail, Phone } from 'lucide-react'
import Image from 'next/image'

export default function DetailsTag() {
  const details = [
    {
      icon: <LocateIcon />,
      text: 'Unit 12 tungstenworks office park, Inospace, Randburg, Johannesburg, South Africa, 2169',
    },
    {
      icon: <Mail />,
      text: 'service@sgperformance.co.za',
    },
    {
      icon: <Phone />,
      text: '071 291 7178',
    },
  ]

  return (
    <span className="flex bg-teal-800 text-white text-base gap-10 flex-col lg:flex-row  p-4">
      {details.map((detail, index) => (
        <div className="flex gap-2" key={index}>
          {detail.icon}
          <p>{detail.text}</p>
        </div>
      ))}
    </span>
  )
}
