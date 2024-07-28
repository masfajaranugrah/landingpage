import React from "react";
import { BackgroundGradient } from "../ui/card-hover-effect";
import BackgroundBoxes from "./BackgroundBoxes";

const Description = () => {
  return (
    <section className=" relative container mx-auto my-20 gap-4">
      <div className="gap-4 relative  flex-col justify-center items-center">
        {/* cols  1 */}
        <h1 className="text-white font-bold text-[40px]">
          Bagaimana Alur Pengerjaan-Nya
        </h1>
        <div className="">
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">Fase Pra-Project</h2>
            </figure>

            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FFE61C] to-[#FFA929] px-2">
                01
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menanyakan kebutuhan, tujuan, dan harapan klien
              </h3>
            </div>

            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FFE61C] to-[#FFA929] px-2">
                02
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memberikan referensi website
              </h3>
            </div>

            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FFE61C] to-[#FFA929] px-2">
                03
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menyusun proposal yang mencakup lingkup pekerjaan, waktu
                pengerjaan, dan biaya
              </h3>
            </div>

            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FFE61C] to-[#FFA929] px-2">
                04
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memaparkan proposal kepada klien dan membahas detailnya
              </h3>
            </div>

            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FFE61C] to-[#FFA929] px-2">
                05
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menandatangani kontrak atau perjanjian kerja setelah proposal
                disetujui
              </h3>
            </div>
          </BackgroundGradient>
        </div>
        {/* cols 2  */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>
        <div>
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">Fase Perencanaan</h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#4C73FF] to-[#73E0F8] px-2">
                06
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menentukan Timeline
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#4C73FF] to-[#73E0F8] px-2">
                07
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menyusun jadwal pertemuan rutin
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">Fase Desain</h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF4CC2] to-[#F87393] px-2">
                08
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Membuat mockup desain visual dari halaman website
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF4CC2] to-[#F87393] px-2">
                09
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Mendapatkan feedback dari klien dan melakukan revisi sesuai
                kebutuhan
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF4CC2] to-[#F87393] px-2">
                10
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memastikan desain yang dibuat responsif dan user-friendly dan
                melakukan testing ux
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">
                Fase Pengembangan
              </h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#7AFFD7] to-[#00FFB2] px-2">
                11
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Pengembangan Front-End
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#7AFFD7] to-[#00FFB2] px-2">
                12
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Pengembangan Back-End
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">Testing Phase</h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF7170] to-[#FFE57F]  px-2">
                13
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Melakukan tes secara menyeluruh
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF7170] to-[#FFE57F]  px-2">
                14
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menyusun jadwal pertemuan rutin
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF7170] to-[#FFE57F]  px-2">
                15
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Tes kompatibilitas di berbagai browser dan perangkat
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF7170] to-[#FFE57F]  px-2">
                16
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Mengizinkan klien untuk menguji website
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">Launch Phase</h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#854CFF] to-[#B573F8]  px-2">
                17
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memastikan semua konten final sudah diunggah dan website siap
                untuk dipublikasikan
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#854CFF] to-[#B573F8]  px-2">
                18
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Mengunggah website ke server produksi atau hosting
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#854CFF] to-[#B573F8]  px-2">
                19
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Tes kompatibilitas di berbagai browser dan perangkat
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#854CFF] to-[#B573F8]  px-2">
                20
              </span>{" "}
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Mengizinkan klien untuk menguji website
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">
                Post-Launch Phase
              </h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#1CFFE4] to-[#29BFFF]  px-2">
                21
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memantau performa website dan mengatasi masalah yang muncul
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#1CFFE4] to-[#29BFFF]  px-2">
                22
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Menyediakan dokumentasi dan support yang diperlukan.
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#1CFFE4] to-[#29BFFF]  px-2">
                23
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Memberikan pelatihan kepada klien mengenai cara menggunakan dan
                mengelola website mereka.
              </h3>
            </div>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#1CFFE4] to-[#29BFFF]  px-2">
                24
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Mengizinkan klien untuk menguji website
              </h3>
            </div>
          </BackgroundGradient>
        </div>

        {/* line     */}
        <div class="container mx-auto flex justify-center items-center">
          <div className="line"></div>
        </div>

        <div >
          <BackgroundGradient className="rounded-[22px] bg-black text-white  p-4 py-4  dark:bg-zinc-900">
            <figure class="flex-center flex w-full gap-2.5 rounded-lg bg-linear-gradient-black_180-100 py-4">
              <img
                src="https://www.jsmastery.pro/assets/masterclass/icons/outcheck-circle.svg"
                alt=""
              />
              <h2 class="text-xl font-semibold text-white">
                Feedback and Improvement
              </h2>
            </figure>
            <div className="flex">
              <span class="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#FF7170] to-[#FFE57F]  px-2">
                25
              </span>
              <h3 class="text-[#D0DFFF] text-2xl font-semibold">
                Meminta feedback dari klien mengenai proses pengerjaan dan hasil
                akhir
              </h3>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </section>
  );
};

export default Description;
