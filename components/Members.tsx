"use client";

import React from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeContext';

export default function Members() {
    const { isDark, isLight } = useTheme();
    
    const members = [
        {
            id: 1,
            name: "MINA WILLIAMS",
            position: "LEDER",
            email: "MINA@RASTLOS.NO",
            image: "./leder.png" // Replace with actual image paths
        },
        {
            id: 2,
            name: "DANIEL SHAHZAD-LANDSVERK",
            position: "NESTLEDER",
            email: "DANIEL@RASTLOS.NO",
            image: "./nestleder.png" // Replace with actual image paths
        },
        {
            id: 3,
            name: "ELINE VEDELER",
            position: "ØKONOMIANSVARLIG",
            email: "ELINE@RASTLOS.NO",
            image: "./okonomi.png" // Replace with actual image paths
        },
        {
            id: 4,
            name: "KRISTINE B. BRAATHEN",
            position: "PROMOANSLARLIG",
            email: "KRISTINE@RASTLOS.NO",
            image: "./promo.png" // Replace with actual image paths
        },
        {
            id: 5,
            name: "LAN ANH TRAN",
            position: "STYREMEDLEM",
            email: "LAN@RASTLOS.NO",
            image: "./styremedlem.png" // Replace with actual image paths
        }
    ];

    return (
        <div>
            <h3 className={`font-bold text-lg mb-4 font-anton text-center lg:text-left ${isDark ? 'text-gray-300' : 'text-[#292929]'}`}>
                STYRET
            </h3>
            {/* Grid layout that adapts to screen sizes */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0 font-anton">
                {members.map((m) => (
                    <div key={m.id} className={`text-center flex flex-col items-center ${isDark ? 'text-gray-300' : 'text-[#292929]'}`}>
                        <div className={`rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-1 overflow-hidden relative
                            ${isDark ? 'border border-gray-700' : 'border-2 border-[#292929]'} 
                            transition-transform hover:scale-110 duration-200`}>
                            <Image
                                src={m.image || "/path/to/placeholder.png"}
                                alt={`${m.name} profile`}
                                fill
                                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
                                style={{ 
                                    objectFit: "cover",
                                    filter: isLight ? "contrast(1.05) brightness(1.05)" : "none"
                                }}
                                quality={90}
                            />
                        </div>
                        <p className="text-[10px] sm:text-xs font-bold text-buldreoransj truncate w-full">{m.position}</p>
                        <p className="text-[10px] sm:text-xs truncate w-full">{m.name.split(' ')[0]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}