import OuterWrapper from "@/components/hoc/OuterWrapper";
import { FeaturesData } from "@/lib/constants";
import { typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="w-full text-white flex flex-col items-center gap-32 py-20">
      <div className="flex flex-col items-center justify-center gap-6 text-center w-[80%]">
        <span className={clsx(typoGraphy.text20, "text-primaryPurple")}>
          Key features
        </span>
        <h2 className={clsx(typoGraphy.text48)}>
          Innovative Features for Business Growth
        </h2>
        <p className={clsx(typoGraphy.text20, "opacity-[0.4]")}>
          Our key features are tailored to meet the diverse needs of businesses,
          ensuring you have the right tools to achieve your goals and maximize
          your potential.
        </p>
      </div>

      <div className="w-full relative">
        {/* ellipses */}
        <div className="absolute w-full left-0 top-0 h-full z-10">
          <div className="w-[31vw] h-[31vw] opacity-40 bg-primaryPurple blur-[312px] rounded-full absolute -left-30 top-20"></div>
          <div className="w-[31vw] h-[31vw] opacity-40 bg-primaryPurple blur-[312px] rounded-full absolute right-[20%] -top-32"></div>
          <div className="w-[31vw] h-[31vw] opacity-40 bg-primaryPurple blur-[312px] rounded-full absolute -right-16 bottom-0"></div>
        </div>

        <section className="relative w-full grid grid-cols-3 gap-5 z-20">
          {FeaturesData?.map((e) => (
            <div
              key={e?.head}
              className={`${
                e?.gridSpanTwo ? "col-span-2" : "col-span-1"
              } w-full flex flex-col items-center bg-black relative rounded-3xl overflow-hidden`}
            >
              <div className="w-[90%] h-[33vw] relative overflow-hidden bg-blend-screen scale-90 opacity-70">
                <Image src={e?.image} alt="" fill className="object-cover" />
              </div>

              <div
                className={clsx(
                  "absolute bottom-2 h-max left-0 w-full px-10 flex flex-col gap-6 py-10 backdrop-blur-[77px]"
                )}
                style={{ background: e?.Textbackground }}
              >
                <h4 className={clsx(typoGraphy.text32)}>{e?.head}</h4>
                <span
                  className={clsx(
                    typoGraphy.text20,
                    "opacity-[0.4] max-h-20 text-ellipsis overflow-hidden line-clamp-3"
                  )}
                >
                  {e?.sub}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default OuterWrapper(FeaturesSection, "bg-black");
