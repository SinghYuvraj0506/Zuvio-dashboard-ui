"use client";

import { containers, typoGraphy } from "@/lib/cssConfig";
import {
  AnalyticsCardData,
  AnalyticsData2,
  SmaetHomeData3,
} from "@/lib/dummyData";
import clsx from "clsx";
import { Building2, MapPin, Wind } from "lucide-react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { ReactElement, ReactNode, useState } from "react";


type GraphCardProps = {
  icon?: ReactNode,
  head:string,
  subhead?:string,
  GraphContent: ReactElement,
  helperText?:string
}

export const SmallCards: React.FC<(typeof AnalyticsData2)[0] | any> = ({
  desc,
  head,
  icon,
  value,
}) => {
  return (
    <div
      className={clsx(
        containers.basicCont,
        "w-full gap-5 box-border flex flex-col justify-between"
      )}
    >
      <div className={clsx("flex items-center gap-3", typoGraphy.text20)}>
        <span className="p-2 rounded-full border dark:border-[#FFFFFF1A] border-[#0606061A] opacity-40">
          <Building2 />
        </span>
        {head}
      </div>

      <div className="flex items-center justify-between w-full">
        <section className="flex flex-col gap-1">
          <span className={clsx("text-secondaryPurple", typoGraphy.text16)}>
            {desc.value}
          </span>
          <span className={clsx("opacity-40", typoGraphy.text16)}>
            {desc.point}
          </span>
        </section>

        <span className={clsx("font-bold", typoGraphy.text32)}>{value}</span>
      </div>
    </div>
  );
};

export const Cards: React.FC<(typeof AnalyticsCardData)[0]> = ({
  bgImg,
  head,
  desc,
  location,
  price,
}) => {
  return (
    <div
      className={clsx(
        containers.basicCont,
        "w-full rounded-[32px] h-[450px] relative overflow-hidden"
      )}
    >
      <div className="absolute w-full h-full left-0 top-0 flex flex-col gap-5">
        <div className="w-full h-[270px] relative">
          <Image src={bgImg} alt="" fill className="object-cover" />
        </div>

        <div className="flex flex-col gap-3 px-4">
          <span className={clsx(typoGraphy.text24)}>{head}</span>

          <p className={clsx(typoGraphy.text18, "opacity-40 text-ellipsis")}>
            {desc}
          </p>

          <div className="flex items-center w-full justify-between">
            <span
              className={clsx(
                typoGraphy.text18,
                "opacity-20 flex items-center gap-1"
              )}
            >
              <MapPin className="dark:text-#ffffff text-#060606" size={16} />{" "}
              {location}
            </span>

            <span className={clsx(typoGraphy.text20)}>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ToogleCard: React.FC<(typeof SmaetHomeData3)[0]> = ({
  switchOn = false,
  head,
  desc,
  addMore,
}) => {
  const [checked, setChecked] = useState(switchOn);

  return (
    <div
      className={clsx(
        "w-full rounded-[32px] px-6 py-4 relative overflow-hidden flex flex-col gap-8",
        checked
          ? "bg-gradient-to-r from-secondaryPurple to-secondaryPurple  dark:bg-gradient-to-r dark:from-secondaryPurple dark:to-secondaryPurple text-white"
          : containers.basicCont
      )}
    >
      {!addMore ? (
        <>
          <section className="w-full flex items-center justify-between">
            <span>{checked ? "On" : "Off"}</span>

            <Switch
              checked={checked}
              onCheckedChange={(e) => {
                setChecked(e);
              }}
            />
          </section>

          <section className="flex flex-col gap-2">
            <span className="bg-lightgray03 dark:bg-gray02 p-2 rounded-full w-max">
              <Wind />
            </span>

            <span className={clsx(typoGraphy.text24, "font-bold")}>{head}</span>
            <p className={clsx(typoGraphy.text18, "opacity-40")}>{desc}</p>
          </section>
        </>
      ) : (
        <section className="flex flex-col items-center justify-center w-full h-full gap-2 cursor-pointer">
          <span className="w-10 h-10 flex items-center justify-center bg-lightgray03 dark:bg-gray02 text-2xl rounded-full">
            +
          </span>

          <span className={clsx(typoGraphy.text18, "opacity-40")}>
            Add new device
          </span>
        </section>
      )}
    </div>
  );
};

export const GraphCard:React.FC<GraphCardProps> = ({icon,head,GraphContent,subhead,helperText}) => {
  return (
    <div
      className={clsx(
        containers.basicCont,
        "w-full rounded-[32px] p-6 flex flex-col gap-6"
      )}
    >
      <div className="flex items-start gap-3">
        {icon && <span className="p-2 rounded-full border border-lightgray02 dark:border-gray02">{icon}</span>}
        <div className="flex flex-col gap-2">
          <span className={clsx(typoGraphy.text20)}>{head}</span>
          <p className={clsx(typoGraphy.text18,"opacity-40")}>{subhead}</p>
        </div>
      </div>


      <section className="w-full">
        {GraphContent}
      </section>

      <div>
        <span className={clsx(typoGraphy.text16,"opacity-40")}>{helperText}</span>
      </div>

    </div>
  );
};
