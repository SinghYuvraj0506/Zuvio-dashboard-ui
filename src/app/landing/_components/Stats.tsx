import OuterWrapper from "@/components/hoc/OuterWrapper";
import { StatsData } from "@/lib/constants";
import { typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Stats = () => {
  return (
    <div className="flex items-start gap-24 py-32">
      <div className="flex flex-col gap-[120px]">
        <p
          className={clsx(typoGraphy.text32,"bg-clip-text w-[90%]")}
          style={{
            background:
              "linear-gradient(267deg, #FFF 66.94%, rgba(144, 135, 214, 0.24) 127.67%);",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Simplify your business operations with our user-friendly dashboard,
          offering clear and actionable insights.
        </p>

        <div className="flex items-center gap-16">
          {StatsData?.map((e) => (
            <div key={e?.head} className="flex flex-col gap-1">
              <span className={clsx(typoGraphy.heading64, "text-white")}>
                {e?.head}
              </span>
              <span className={clsx(typoGraphy.text20)}>{e?.sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/assets/images/statsimg.png"}
          width={314}
          height={314}
          alt=""
        />

        <div className="w-[18vw] h-[18vw] opacity-[0.5] rounded-full bg-primaryPurple blur-[312px] absolute right-0 top-0">
        </div>
      </div>


      <div className="w-[31vw] h-[31vw] opacity-[0.4] rounded-full bg-primaryPurple blur-[312px] absolute left-[-300px] bottom-[-230px]">
      </div>

    </div>
  );
};

export default OuterWrapper(Stats,"relative");
