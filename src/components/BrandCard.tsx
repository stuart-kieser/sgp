import Image from 'next/image';
import React from 'react';

const BrandCard = ({ brand }: any) => {
    return (
        <div className=" p-5 w-full max-w-md flex flex-col items-center">
            <Image src={brand.photos.url} alt={brand.make} height={120} width={120} />
            <h3 className="text-xl font-semibold text-accent mb-2">{brand.make}</h3>
            <div>
                {brand.notes ? (
                    <p className="text-sm text-gray-700 italic">Note: {brand.notes}</p>
                ) : (
                    <p className="text-xs text-gray-400">No notes added.</p>
                )}
            </div>
        </div>
    );
};

export default BrandCard;
