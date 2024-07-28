import { BackgroundGradient } from "../ui/card-hover-effect"
import React from "react";
export default function BackgroundGradientDemo() {

  return (
    <div>
      <div className="container mx-auto  relative  px-4 w-full  left-0 top-0">
      <h1 className="text-[50px] md:text-7xl font-bold text-white">
      <span className="text-band">Project</span>  <br /> Yang <span className="text-pernah"> Pernah</span> Kita <span className="text-kerjakan">Kerjakan</span> 
      </h1>
      <p className="max-w-2xl text-[30px] md:text-xl mt-8 text-white my-20">
        Berikut ini adalah beberapa project yang telah kita selesaikan.
        Jangan ragu untuk mempertanyakan tentag website yang inign di buat. 
        kita akan selalu melayani anda dengan senang hati
      </p>
    </div>

    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3 container mx-auto">

        <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4  dark:bg-zinc-900" >
        <div>
                <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
                <img src="https://cdn.dribbble.com/userupload/15791875/file/original-c050ad439aa79cba3311ef346d8515c8.png?resize=752x" alt="images"  />
                </figure>

               
                </div>
       </BackgroundGradient> 

       <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4  dark:bg-zinc-900" >
        <div>
                <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
                <img src="https://cdn.dribbble.com/userupload/14565715/file/original-91074db4da8e0df3c71b13a6e807b3d3.png?resize=752x" alt="images"  />
                </figure>

               
                </div>
       </BackgroundGradient> 

       <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4  dark:bg-zinc-900" >
        <div>
                <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
                <img src="https://cdn.dribbble.com/userupload/15791875/file/original-c050ad439aa79cba3311ef346d8515c8.png?resize=752x" alt="images"  />
                </figure>
               
                </div>
       </BackgroundGradient> 
    
    </div>
    </div>
  );
}
