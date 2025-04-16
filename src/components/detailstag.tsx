import location from "../assets/icons/location.svg";
import mobile from "../assets/icons/device-mobile.svg";
import mail from "../assets/icons/mail.svg";
import Image from "next/image";

export default function DetailsTag() {
  const details = [
    {
      icon: location,
      text: "Unit 12 tungstenworks office park, Inospace, Randburg, Johannesburg, South Africa, 2169",
    },
    {
      icon: mail,
      text: "service@sgperformance.co.za",
    },
    {
      icon: mobile,
      text: "071 291 7178",
    },
  ];

  return (
    <span className="flex bg-teal-800 text-white text-base gap-10 flex-col lg:flex-row  p-4">
      {details.map((detail, index) => (
        <div className="flex" key={index}>
          <Image src={detail.icon} className="w-auto h-6 mr-2" alt="Icon" width={100} height={100} />
          <p>{detail.text}</p>
        </div>
      ))}
    </span>
  );
}
