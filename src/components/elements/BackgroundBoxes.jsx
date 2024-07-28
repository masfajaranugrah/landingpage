import React from "react";
import  BoxesCore  from "../ui/background-boxes";
import { cn } from "../../utils/cn.js";

const BackgroundBoxes = ()  => {
  return (
    <div className="h-[32rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      < BoxesCore  />
      <h1 className={cn("md:text-4xl text-[40px] font-bold text-white relative z-20")}>
      Kami Selalu Ada Untuk Anda
      </h1>
      <p className="text-center mt-2 text-neutral-300 font-semibold text-[20px] relative z-20">
      Jangan ragu memulai langkah di dunia maya bersama Kami. <br/>
      Tak peduli apakah Anda seorang newbie atau ahli, Kami akan selalu siap membantu
      </p>
    </div>
  );
}

export default BackgroundBoxes