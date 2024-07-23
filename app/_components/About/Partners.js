
// import Image from "next/image";

// export default function Partners() {
  

//   return (
  //     <div className="max-w-[1440px] mx-auto px-2">
  //       <div className="text-2xl mb-8 mdx:text-3xl font-semibold">OUR PARTNERS</div>
  //       <div className="relative grid grid-cols-2 xl:grid-cols-3">
  //         <div className="absolute h-[98%] w-[99%] border-2 top-1 left-1 border-white shadow-custom-heavy z-10"></div>
  //         {logos.map((logo, index) => (
    //           <div
    //             key={index}
    //             className="flex justify-center items-center w-full h-24 p-5 xl:p-24 border border-gray-200"
    //           >
    //             <Image src={logo.src} alt={logo.alt} />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   );
    // }
    
    
    "use client";
    import lingen from "@/public/images/aboutUs/partners/image28.png";
    import united from "@/public/images/aboutUs/partners/image32.png";
    import browiner from "@/public/images/aboutUs/partners/image41.png";
    import dollar from "@/public/images/aboutUs/partners/image42.png";
    import mindray from "@/public/images/aboutUs/partners/image3.png";
    import zoncare from "@/public/images/aboutUs/partners/image27.png";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Sertificates() {
  const logos = [
    { src: lingen, alt: "Lingen Logo" },
    { src: united, alt: "United Imaging Logo" },
    { src: browiner, alt: "Browiner Logo" },
    { src: mindray, alt: "Mindray Logo" },
    { src: dollar, alt: "Dollar Logo" },
    { src: zoncare, alt: "Zoncare Logo" },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto">
      <h2 className="text-3xl font-semibold max-mdl:text-2xl">
        НАШИ ПАРТНЕРЫ 
      </h2>
      <div>
        <Slider {...settings} className="h-auto flex">
          {logos.map((item, index) => (
            <div key={index}> {/* Adjust margin or padding here */}
              <div className="p-16 border h-[200px] flex justify-center items-center">
                <Image
                  src={item.src}
                  width={500}
                  height={500}
                  alt="Intermed Sertificate"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full justify-center flex">
        <Link
          href="/licenses"
          className="border border-neutral-300 px-12 py-3 transition-all duration-200"
        >
          Смотреть все
        </Link>
      </div>
    </div>
  );
}
