import OuterWrapper from "@/components/hoc/OuterWrapper";
import { TrustedBrands } from "@/lib/constants";
import { typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const TrustedSection = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <span className={clsx(typoGraphy.text24, "text-[#FFFFFFB2]")}>
        Trusted by the world’s most innovative teams
      </span>

      <div className="w-full grid grid-cols-4 gap-5">
        {TrustedBrands?.map((e) => (
          <div key={e.name} className="w-full py-[36px] flex items-center justify-center rounded-[24px] border border-[#FFFFFF1A]">
            <Image
              src={e.src}
              alt={e.name}
              width={100}
              height={100}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OuterWrapper(TrustedSection);
