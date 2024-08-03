"use client";

import { SmallCards, ToogleCard } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { containers, typoGraphy } from "@/lib/cssConfig";
import {
  SmaetHomeData2,
  SmaetHomeData3,
  SmartHomeCameraData,
} from "@/lib/dummyData";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
  const [cameraMode, setCameraMode] = useState("Kitchen");

  return (
    <div className="flex flex-col gap-4 w-full mt-10">
      <section className="flex items-center h-[496px] w-full gap-4">
        <div
          className={clsx(
            "w-2/3 h-full relative rounded-[32px] overflow-hidden"
          )}
        >
          <div className="w-full flex justify-between px-4 box-border absolute top-2 left-0 z-20">
            <span className={clsx(typoGraphy.text28, "text-white")}>
              Cameras
            </span>

            <div className="flex items-center gap-3">
              {SmartHomeCameraData?.map((e) => e?.title)?.map((e) => (
                <span
                  key={e}
                  className={clsx(
                    typoGraphy.text20,
                    "text-white rounded-xl bg-[#0000001A] px-3 py-2 cursor-pointer hover:bg-secondaryPurple"
                  )}
                  onClick={() => {
                    setCameraMode(e);
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          <Image
            src={
              SmartHomeCameraData?.find((e) => e.title === cameraMode)
                ?.imgSrc ?? ""
            }
            alt=""
            fill
            className="z-10 object-fill"
          />
        </div>

        <div className={clsx(containers.basicCont, "w-1/3 h-full")}></div>
      </section>

      {/* small card section */}
      <section className="grid grid-cols-4 gap-4">
        {SmaetHomeData2?.map((e) => (
          <SmallCards {...e} key={e?.head} />
        ))}
      </section>

      {/* small card section */}
      <section className="grid grid-cols-6 gap-4">
        {SmaetHomeData3?.map((e) => (
          <ToogleCard {...e} key={e?.head} />
        ))}
      </section>
    </div>
  );
};

export default DashboardWrapper(
  Page,
  ["Dashboard", "Smart Home"],
  "Control your Sweat Home"
);
