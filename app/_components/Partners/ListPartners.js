
"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import partnerPhoto from "@/public/images/aboutUs/partners/image3.png";

const partners = [
    {
        id: 1,
        imageSrc: partnerPhoto,
        title: "Lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
        link: "lingen"
    },
    {
        id: 2,
        imageSrc: partnerPhoto,
        title: "Lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
        link: "lingen"
    },
    {
        id: 3,
        imageSrc: partnerPhoto,
        title: "Lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
        link: "lingen"
    },
    {
        id: 4,
        imageSrc: partnerPhoto,
        title: "Lingen",
        description: "Lingen Precision Medical Products Co., Ltd. is a unique manufacturer specializing in medical products",
        link: "lingen"
    },
    // Add more partners as needed...
];

export default function ListPartners() {
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { // Adjust the value to match your 'mdx' breakpoint
                setShowAll(true);
            } else {
                setShowAll(false);
            }
        };

        handleResize(); // Check the initial screen size
        window.addEventListener('resize', handleResize); // Add resize event listener

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);

    const visiblePartners = showAll ? partners : partners.slice(0, 2);

    return (
        <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8 mt-7">
            <div className="grid grid-cols-1 gap-4 mdx:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-[40px] mdx:mb-[180px]">
                {visiblePartners.map(card => (
                    <div key={card.id} className="bg-white p-4 border-[1px] border-gray-200 mdx:p-0 mdl:p-5 ">
                        <div className=" items-center justify-between divide-y  ">
                            <div className="w-full h-[70px] relative mt-3 mb-9">
                                <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="contain" />
                            </div>
                            <div className='mdx:mb-4 mdx:p-3 '>
                                <h2 className="text-xl font-bold right mt-4 mdx:mb-2 xl:text-[28px]">{card.title}</h2>
                                <p className="mb-4 text-gray-600 xl:text-[18px] ">{card.description}</p>
                                <Link href={`/partners/${card.link}`}>
                                    <span className="text-[#E31E24] font-semibold hover:underline mdx:text-[18px]">
                                        Подробнее →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mdx:hidden mb-[120px]">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-white border text-[#252324] py-3 px-[55px] "
                >
                    {showAll ? 'Скрыть' : 'Показать все'}
                </button>
            </div>
        </div>
    );
}
