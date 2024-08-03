import OuterWrapper from "@/components/hoc/OuterWrapper";
import { PricingData } from "@/lib/constants";
import { buttons, typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const PricingSection = () => {
  return (
    <div className="w-full text-white flex flex-col items-center gap-32 py-20">
      <div className="flex flex-col items-center justify-center gap-6 text-center w-[80%]">
        <span className={clsx(typoGraphy.text20, "text-primaryPurple")}>
          Pricing Plan
        </span>
        <h2 className={clsx(typoGraphy.text48)}>
          Discovering Value in Every Plan
        </h2>
        <p className={clsx(typoGraphy.text20, "opacity-[0.4] w-[50%]")}>
          Unlock tailored plans to suit your business needs. Enjoy transparent
          pricing, scalable solutions, and dedicated support for your success.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 w-full relative">
        {PricingData?.map((e) => (
          <div
            key={e?.name}
            className="w-full rounded-[32px] border border-[#FFFFFF33] p-8 box-border flex flex-col gap-14 relative z-20"
            style={e?.default ? {background:"linear-gradient(180deg, rgba(144, 135, 214, 0.00) 2.78%, rgba(144, 135, 214, 0.04) 39.2%, rgba(144, 135, 214, 0.06) 57.83%, rgba(144, 135, 214, 0.60) 116.67%), #0C0B0A"} : {}}
          >
            <div className="flex flex-col items-start gap-12">
              <span className={clsx(typoGraphy.text20, "uppercase")}>
                {e?.name}
              </span>

              <div className="flex flex-col gap-1">
                <div className={clsx(typoGraphy.text48)}>
                  {e?.price?.main}
                  <span className={clsx(typoGraphy.text24)}>
                    .{e?.price?.sub}
                  </span>
                </div>
                <p className={clsx(typoGraphy.text20, "opacity-40")}>
                  {e?.price?.spec}
                </p>
              </div>

              <section className="w-full flex flex-col gap-6">
                <p
                  className={clsx(
                    typoGraphy.text18,
                    "capitalize line-clamp-4 text-ellipsis opacity-40"
                  )}
                >
                  {e.desc}
                </p>

                <div className="h-[1px] bg-white opacity-30"></div>

                <section className="flex flex-col gap-4">
                  {e.benefits?.map((point, i) => (
                    <span key={`benefitpricing${i}`} className="flex items-center gap-4">
                      <Image
                        src={"/assets/svg/tickCircle.svg"}
                        alt=""
                        width={24}
                        height={24}
                      />
                      {point}
                    </span>
                  ))}
                </section>
              </section>
            </div>

            <button className={clsx("w-full",typoGraphy.text20, !e.default ? buttons.buttonWithBorderOnly : buttons.buttonWhiteSmall)}>{e?.button?.text}</button>
          </div>
        ))}
      <div className="w-[39vw] h-[39vw] opacity-60 bg-primaryPurple blur-[312px] rounded-full absolute left-[50%] translate-x-[-50%] -top-24 z-10"></div>
      </div>

    </div>
  );
};

export default OuterWrapper(PricingSection,"overflow-hidden");
