import { buttons, typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import React from "react";
import OuterWrapper from "../hoc/OuterWrapper";
import Image from "next/image";
import { FooterLinks } from "@/lib/constants";

const index = () => {
  return (
    <div className="relative flex flex-col gap-[20vw]">
      <div
        className="flex flex-col items-center gap-6 text-center w-full py-16 rounded-3xl overflow-hidden border border-[#4D3763] relative"
        style={{
          background:
            "radial-gradient(251.22% 251.22% at 50% 25.52%, rgba(144, 135, 214, 0.00) 0%, rgba(144, 135, 214, 0.40) 100%)",
          boxShadow: "0px 24px 64px 0px #000",
        }}
      >
        <h2 className={clsx(typoGraphy.text48)}>
          Ready To Experience
          <br /> Our Platform
        </h2>
        <p className={clsx(typoGraphy.text20, "opacity-60 w-[50%]")}>
          Get started today and experience the difference with our powerful
          suite of tools and dedicated support.
        </p>

        <div className="flex items-center gap-5 mt-10 z-20">
          <button className={clsx(buttons.buttonWhiteSmall, typoGraphy.text20)}>
            Get started
          </button>
          <button
            className={clsx(buttons.buttonWithBorderOnly, typoGraphy.text20)}
          >
            Read more
          </button>
        </div>

        <div className="w-[57vw] h-[57vw] opacity-40 bg-primaryPurple blur-[312px]  rounded-full absolute right-2 top-40 z-10"></div>
      </div>

      <div className="w-[32vw] h-[32vw] absolute top-[28vw] left-[50%] translate-x-[-50%]">
          <Image
            src={"/assets/images/statsimg.png"}
            alt=""
            fill
            className="object-cover"
          />
        </div>

      <div
        style={{
          background: "rgba(12, 11, 10, 0.04)",
          backdropFilter: "blur(122px)",
        }}
        className="py-10 relative z-20"
      >
       

        <div className="w-full">
          <div className="w-full grid grid-cols-4 gap-32">
            {FooterLinks?.map((e) => (
              <div key={e?.head} className="flex flex-col gap-12">
                <span className={clsx(typoGraphy.text20)}>{e?.head}</span>

                <div
                  className={clsx(
                    typoGraphy.text20,
                    "opacity-40 flex flex-col gap-4"
                  )}
                >
                  {e?.links?.map((e) => (
                    <span key={e?.text}>{e?.text}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-[#FFFFFF33] mt-40 mb-20"></div>

          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-3">
              <span className={clsx(typoGraphy.text24)}>
                Subscribe to our news letter
              </span>
              <p className={clsx(typoGraphy.text18, "opacity-40 w-[70%]")}>
                Get product update and news in your news inbox. No spam
              </p>
            </div>

            <div className="flex flex-col gap-5 w-[440px]">
              <div className="flex items-center gap-5">
                <span className="flex-1 bg-[#FFFFFF0A] rounded-[36px] py-4 px-8">
                  alma.lawson@example.com
                </span>
                <button
                  className={clsx(buttons.buttonWhiteSmall, typoGraphy.text20)}
                >
                  Subscribe
                </button>
              </div>

              <p className={clsx(typoGraphy.text18, "opacity-40")}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint Duis{" "}
              </p>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#FFFFFF33] mt-20 mb-4"></div>

          <div
            className={clsx(
              typoGraphy.text18,
              "text-[#FFFFFF66] flex items-center w-full justify-between"
            )}
          >
            <span>© 2023 Relume. All rights reserved.</span>

            <div className="flex items-center gap-6">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OuterWrapper(index, "bg-mainBlack");
