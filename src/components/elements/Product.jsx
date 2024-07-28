// import React from "react";
import { Meteors } from "../ui/meteors";

// export default function Product() {
//   return (
//     <div className="container mx-auto">
//       <h2 className="text-[40px] font-bold  text-center my-20">PAKET PEMBUATAN WEBSITE</h2>
//       <div className=" w-full relative max-w-xs">
//         <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
//         <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
//           <div class="relative flex flex-col  rounded-xl   from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full   p-8">
//   <div
//     class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none  border-white/10">
//     <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
//       standard
//     </p>
//     <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
//       <span class="mt-2 text-4xl">$</span>29
//       <span class="self-end text-4xl">/mo</span>
//     </h1>
//   </div>
//   <div class="p-0">
//     <ul class="flex flex-col gap-4">
//       <li class="flex items-center gap-4">
//         <span class="p-1 border rounded-full border-white/20   "><svg xmlns="http://www.w3.org/2000/svg"
//             fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//           </svg></span>
//         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           5 team members
//         </p>
//       </li>
//       <li class="flex items-center gap-4">
//         <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
//             fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//           </svg></span>
//         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           200+ components
//         </p>
//       </li>
//       <li class="flex items-center gap-4">
//         <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
//             fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//           </svg></span>
//         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           40+ built-in pages
//         </p>
//       </li>
//       <li class="flex items-center gap-4">
//         <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
//             fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//           </svg></span>
//         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           1 year free updates
//         </p>
//       </li>
//       <li class="flex items-center gap-4">
//         <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
//             fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
//           </svg></span>
//         <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
//           Life time technical support
//         </p>
//       </li>
//     </ul>
//   </div>
//   <div class="p-0 mt-12">
//     <button
//       class="align-middle select-none font-sans font-bold text-center text-black uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
//       type="button">
//       Buy Now
//     </button>
//   </div>
// </div> 

//           {/* Meaty part - Meteor effect */}
//           <Meteors number={100} />


          
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

 import { Tabs } from "../ui/tabs";

export default function Product() {
  const tabs = [
    {
      title: "Basic",
      value: "Basic",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r bg-gray-900 to-violet-900">
          <div
    class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700   border-b rounded-none shadow-none  border-white/10">
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      Basic
    </p>
    <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span class="mt-2 text-4xl">Rp</span>800.000
       
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button
      class="align-middle select-none font-sans font-bold text-center text-black uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
      type="button">
      Buy Now
    </button>
  </div>
{/* </div>  */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />

        </div>
      ),
    },
    {
      title: "Pro",
      value: "Pro",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r bg-gray-900 to-violet-900">
          <div
    class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700   border-b rounded-none shadow-none  border-white/10">
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      Pro
    </p>
    <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span class="mt-2 text-4xl">Rp</span>10.000.000
       
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20   "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button
      class="align-middle select-none font-sans font-bold text-center text-black uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
      type="button">
      Buy Now
    </button>
  </div>
{/* </div>  */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />

        </div>
      ),
    },

    {
      title: "Business",
      value: "Business",
      content: (
        <div className="w-full overflow-hidden relative h-auto rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r bg-gray-900 to-violet-900">
          <div
    class="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700   border-b rounded-none shadow-none  border-white/10">
    <p class="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
      Business
    </p>
    <h1 class="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
      <span class="mt-2 text-4xl">Rp</span>80.000.000
       
    </h1>
  </div>
  <div class="p-0">
    <ul class="flex flex-col gap-4">
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20   "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          5 team members
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          200+ components
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          40+ built-in pages
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          1 year free updates
        </p>
      </li>
      <li class="flex items-center gap-4">
        <span class="p-1 border rounded-full border-white/20  "><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Life time technical support
        </p>
      </li>
    </ul>
  </div>
  <div class="p-0 mt-12">
    <button
      class="align-middle select-none font-sans font-bold text-center text-black uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
      type="button">
      Buy Now
    </button>
  </div>
{/* </div>  */}

          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />

        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <img
//       src="/linear.webp"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
