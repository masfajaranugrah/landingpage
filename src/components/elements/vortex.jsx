import React from "react";
import { Vortex } from "../ui/vortex";
import { FlipWords } from './../ui/flip-words';
import gambar from '../../assets/images/Banner1.png'


export default function VortexDemoSecond() {
      const words = ["Responsive", "Cepat",  "modern", "harga murah"];

  return (
    <div className="mx-auto mt-20  rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="whit"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center container mx-auto  justify-around   px-2 md:px-10  py-4 w-full h-full"
      >
    <div className="flex flex-col flex-1 w-[40%]">
    <h2 className="text-white  font-bold text-left text-5xl ">
         <span className="text-pernah">Kamu Bingung</span> Mau Cari Jasa <span className="text-gederation">Pembuatan Website</span> Dengan <span className="text-gred">Harga Terjangkau</span>
        </h2>
        <p className="text-white text-2xl max-w-xl mt-6 text-left">
          Tenang disini kami siap membantu anda untuk membuatkan website dengan Harga paling murah.
          kita bisa membuatkan anda website yang <FlipWords words={words} /> <br />

        </p>
       
        <div className="flex flex-col sm:flex-row items-left gap-4 mt-10">
          <button className="px-4 py-2 bg-[#2190ff] hover:bg-blue-700 text-[20px] font-bold transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Hubungi Admin
          </button>
          <button className="px-4 py-2  text-white text-[20px] font-bold">Baca Selengkapnya</button>
        </div>
    </div>
    <div className="flex hidden md:block">
      <img src={gambar} alt="banner" className="w-[400%]"/>
    </div>
      </Vortex>
    </div>
  );
}
