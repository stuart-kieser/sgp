import Image from "next/image";

export default function UC() {
    return (<div className="bg-primary">
        <Image
            src={"/images/under-construction.png"}
            alt={"Page Under Construction"}
            width={2000}
            height={0}
            className="bg-cover"
        />
    </div>)
}