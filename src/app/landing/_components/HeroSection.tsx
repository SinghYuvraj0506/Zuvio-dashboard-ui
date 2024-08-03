import OuterWrapper from '@/components/hoc/OuterWrapper'
import { buttons, typoGraphy } from '@/lib/cssConfig'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="pt-20 flex flex-col gap-[130px]">
    <div className="flex flex-col items-center gap-8 text-center">
      <div
        className={clsx(
          typoGraphy.text20,
          "py-3 px-6 rounded-[110px] flex items-center gap-4"
        )}
        style={{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(153, 153, 153, 0.04) 100%)"}}
      >
        <div className="w-24 h-10 relative">
          <Image
            src={"/assets/images/hero1.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <span className="opacity-[0.4]">Trusted by +36,000 people</span>
      </div>

      <h1
        className={clsx(typoGraphy.heading64, "bg-clip-text")}
        style={{
          background: "linear-gradient(180deg, #FFF 24.64%, #7551FF 219.29%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Empower Your Business Growth
        <br /> with Real-Time Insights
      </h1>

      <button
        className={clsx(buttons.buttonWhite, typoGraphy.text24, "mt-10 text-[#0D0C0B]")}
      >
        Start for free
      </button>
    </div>

    <div className="w-full h-max relative flex items-center flex-col justify-center">
      {/* background shades ----------- */}
      <div className="absolute mx-auto -top-14">
        <div className="w-[47vw] h-[47vw] rounded-full bg-primaryPurple blur-[267px] flex items-center justify-center">
          <div className="w-[32vw] h-[32vw] rounded-full bg-primaryPurple blur-[112px]"></div>
        </div>
      </div>

      <div
        className="w-full h-[60vw] p-8 rounded-[64px] bg-[linear-gradient(270deg, #0C0B0A 0%, rgba(15, 13, 13, 0.00) 50%, #0F0D0D 100%)]"
        style={{
          background:
            "linear-gradient(270deg, #0C0B0A 0%, rgba(15, 13, 13, 0.00) 50%, #0F0D0D 100%)",
          boxShadow:
            "0px -19px 70px 0px rgba(119, 106, 211, 0.40), 0px -20px 70px 0px rgba(119, 106, 211, 0.25)",
        }}
      >
        <div className="w-full h-full relative">
          <Image
            src={"/assets/images/desktop.png"}
            fill
            alt=""
            className="object-cover rounded-[32px]"
          />
        </div>
      </div>
    </div>

    <div className="absolute left-0 -bottom-10 w-full h-[60vh]" style={{background:"linear-gradient(180deg, rgba(12, 11, 10, 0.00) 31.05%, #0C0B0A 76.57%)"}}>

    </div>
  </div>
  )
}

export default OuterWrapper(HeroSection,"relative overflow-hidden")