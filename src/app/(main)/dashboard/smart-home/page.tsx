"use client";

import { SmallCards, ToogleCard } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { Switch } from "@/components/ui/switch";
import { containers, typoGraphy } from "@/lib/cssConfig";
import {
  SmaetHomeData2,
  SmaetHomeData3,
  SmartHomeCameraData,
} from "@/lib/dummyData";
import clsx from "clsx";
import { Snowflake, Sun, Sunset, Wind } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import CircularSlider from "react-circular-slider-svg";

const Page = () => {
  const [cameraMode, setCameraMode] = useState("Kitchen");

  const [sliderValue, setSliderValue] = useState(34);

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

        <div
          className={clsx(
            containers.basicCont,
            "w-1/3 h-full relative px-8 py-6 flex flex-col gap-8"
          )}
        >
          <div className="flex items-center justify-between w-full box-border">
            <span className={clsx(typoGraphy.text28)}>10:09 PM</span>
            <span className={clsx(typoGraphy.text20, "opacity-60")}>
              22 May, 2024
            </span>
          </div>

          <section className="flex items-center justify-between w-full">
            <span className={clsx(typoGraphy.text20)}>Thermostat</span>
            <span>
              <Switch defaultChecked={true} />
            </span>
          </section>

          <section className="flex flex-col items-center justify-center relative">
            <CircularSlider
              size={300}
              handle1={{
                value: sliderValue,
                onChange: (v) => setSliderValue(v),
              }}
              arcColor="#776AD3"
              startAngle={90}
              endAngle={270}
              trackWidth={6}
            />

            <span className={clsx(typoGraphy.text48normal, "relative -top-40")}>
              22
              <span className={clsx(typoGraphy.text20)}>°C</span>
            </span>
          </section>

          <section className="grid grid-cols-4 place-items-center absolute bottom-8 px-4 w-full box-border left-0">
            <div className="flex flex-col gap-2 px-4 py-3 bg-lightgray03 dark:bg-gray02 w-max rounded-xl hover:bg-secondaryPurple hover:text-white cursor-pointer">
              <Sun />
              <span className={clsx(typoGraphy.text18)}>Hot</span>
            </div>
            <div className="flex flex-col gap-2 px-4 py-3 bg-lightgray03 dark:bg-gray02 w-max rounded-xl hover:bg-secondaryPurple hover:text-white cursor-pointer">
              <Sunset />
              <span className={clsx(typoGraphy.text18)}>Eco</span>
            </div>
            <div className="flex flex-col gap-2 px-4 py-3 bg-lightgray03 dark:bg-gray02 w-max rounded-xl hover:bg-secondaryPurple hover:text-white cursor-pointer">
              <Wind />
              <span className={clsx(typoGraphy.text18)}>Fan</span>
            </div>
            <div className="flex flex-col gap-2 px-4 py-3 bg-lightgray03 dark:bg-gray02 w-max rounded-xl hover:bg-secondaryPurple hover:text-white cursor-pointer">
              <Snowflake />
              <span className={clsx(typoGraphy.text18)}>Cold</span>
            </div>
          </section>
        </div>
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
