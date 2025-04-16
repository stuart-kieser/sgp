import getPhotobar from "@/assets/photobarlist";
import Image from "next/image";

const photobarlist = getPhotobar();

export default function Gallery() {
    return (
        <div className="bg-[#101010] p-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-inherit">
                {photobarlist.map((image, index) => (
                    <div className="rounded-lg bg-inherit" key={index}>
                        <Image src={`/images/${image}`} alt="Image" width={200} height={200} />
                    </div>
                ))}
            </div>
        </div>
    );
}