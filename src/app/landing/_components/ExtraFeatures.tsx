import OuterWrapper from "@/components/hoc/OuterWrapper";
import { ExtraFeaturesData } from "@/lib/constants";
import { buttons, typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const ExtraFeatures = () => {
  return (
    <div className="flex flex-col items-center gap-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <h3
          className={clsx(typoGraphy.text48, "bg-clip-text")}
          style={{
            background: "linear-gradient(180deg, #FFF 0%, #9087D6 174.53%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Features that make you work better
        </h3>
        <p className={clsx(typoGraphy.text24, "opacity-40 w-[50%]")}>
          Explore essential features enhancing productivity and streamlining
          operations. Our platform offers customizable analytics and seamless
          integrations for greater efficiency.
        </p>
      </div>

      <section className="grid grid-cols-2 gap-5 w-full">
        {ExtraFeaturesData?.map((e, i) => (
          <div key={`featextra${i}`} className="w-full h-[34vw]">
            {!e?.imageOnly ? (
              <div className="w-full h-full flex flex-col items-start justify-center px-8 box-border gap-6">
                <h6 className={clsx(typoGraphy.text32, "text-white")}>
                  {e?.head}
                </h6>

                <div
                  className={clsx(
                    typoGraphy.text20,
                    "flex flex-col gap-4 mb-6 opacity-40"
                  )}
                >
                  {e?.sub?.map((e, l) => (
                    <p key={`parafeat${l}`}>{e}</p>
                  ))}
                </div>

                <button className={clsx(buttons.buttonWhiteSmall,typoGraphy.text20,"text-[#0C0B0A]")}>{e?.button?.text}</button>
              </div>
            ) : (
              <div
                className="w-full h-full relative"
                style={{
                    background: "radial-gradient(56.36% 57.05% at 40.85% 50%, rgba(12, 11, 10, 0.00) 0%, #0C0B0A 100%)"
                }}
              >
                <Image
                  src={e?.imgsrc ?? ""}
                  alt=""
                  fill
                  className="object-cover opacity-70"
                />
              </div>
            )}
          </div>
        ))}
      </section>


      <div className="w-[31vw] h-[31vw] opacity-20 bg-primaryPurple blur-[312px] rounded-full absolute -left-20 top-36"></div>
      <div className="w-[31vw] h-[31vw] opacity-15 bg-primaryPurple blur-[312px] rounded-full absolute right-[-300px] top-8"></div>
    </div>
  );
};

export default OuterWrapper(ExtraFeatures, "relative");
