// import SGlogo from '../assets/images/SGlogo.jpg';
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="color-white text-center w-0 lg:w-full">
      <Link href="/">
        <Image src='/images/sgp-logo-b.png' alt={"SG Performance Logo"} width={200} height={0} />
        {/* <h1 className="font-sabre text-7xl">SG</h1>
        <h1 className="font-sabre">Performance</h1> */}
      </Link>
    </div>
  );
}
