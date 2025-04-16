import React from 'react';

const CarCard = ({ car }: any) => {
    return (
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {car.make} {car.model}
            </h2>
            <p className="text-sm text-gray-500 mb-4">Year: {car.year}</p>

            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <div>
                    <span className="font-semibold">Engine:</span> {car.engineType}
                </div>
                <div>
                    <span className="font-semibold">Transmission:</span> {car.transmission}
                </div>
                <div>
                    <span className="font-semibold">Drivetrain:</span> {car.drivetrain.toUpperCase()}
                </div>
                <div>
                    <span className="font-semibold">Mods:</span> {car.modifications?.length || 0}
                </div>
            </div>

            <div className="mt-4">
                {car.notes ? (
                    <p className="text-sm text-gray-600 italic">Note: {car.notes}</p>
                ) : (
                    <p className="text-xs text-gray-400">No notes added.</p>
                )}
            </div>

            <p className="text-[10px] text-gray-300 mt-4">
                Added: {new Date(car.createdAt).toLocaleDateString()} | Updated: {new Date(car.updatedAt).toLocaleDateString()}
            </p>
        </div>
    );
};

export default CarCard;
