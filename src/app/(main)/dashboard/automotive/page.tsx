import { SmallCards } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { Slider } from "@/components/ui/slider";
import { containers, typoGraphy } from "@/lib/cssConfig";
import { AutomotiveData1 } from "@/lib/dummyData";
import clsx from "clsx";
import { Mic, Paperclip, Phone, Video, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-1/2 flex flex-col gap-4">
        <section
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-7"
          )}
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col gap-0">
              <span className={clsx(typoGraphy.text28)}>Live Location</span>
              <span className={clsx(typoGraphy.text18, "opacity-60")}>
                kondli, Delhi
              </span>
            </div>
          </div>

          <div className="w-full h-[410px] relative overflow-hidden rounded-3xl">
            <Image
              src={"/assets/images/map.png"}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className={clsx(typoGraphy.text18)}>Destination</span>
              <span className={clsx(typoGraphy.text28, "opacity-60")}>
                DLF Mall of India
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className={clsx(typoGraphy.text18)}>Remain Distance</span>
              <span className={clsx(typoGraphy.text28, "opacity-60")}>
                10 km
              </span>
            </div>
          </div>

          <div className="w-full flex flex-col items-end gap-1">
            <span className={clsx(typoGraphy.text16, "opacity-40")}>
              You will arrive in 1 hr
            </span>
            <Slider defaultValue={[33]} max={100} color="#776AD3" step={1} />

            <div
              className={clsx(
                typoGraphy.text18,
                "opacity-40 flex items-center justify-between w-full"
              )}
            >
              <span>From Delhi</span>
              <span>To Noida</span>
            </div>
          </div>
        </section>

        <section
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-7"
          )}
        >
          <div>
            <span className={clsx(typoGraphy.text28)}>Top songs</span>
            <p className={clsx(typoGraphy.text18, "opacity-40")}>
              What do you want to listen
            </p>
          </div>

          <table className=" table-auto w-full">
            <thead>
              <tr
                className={clsx(
                  typoGraphy.text18,
                  "font-normal text-left mb-10"
                )}
              >
                <th className="pb-8">Song</th>
                <th className="pb-8">Time</th>
                <th className="pb-8">Save</th>
              </tr>
            </thead>

            <tbody>
              {new Array(6).fill(10).map((e) => (
                <tr key={e} className="w-full">
                  <td className="flex items-center gap-4 pb-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden">
                      <Image
                        src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className={clsx(typoGraphy.text20)}>Song name</span>
                      <p className={clsx(typoGraphy.text18, "opacity-40")}>
                        singer name
                      </p>
                    </div>
                  </td>

                  <td className={clsx(typoGraphy.text18, "pb-3")}>5: 20 min</td>

                  <td className="pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M8.41398 14.3733C8.18732 14.4533 7.81398 14.4533 7.58732 14.3733C5.65398 13.7133 1.33398 10.96 1.33398 6.29332C1.33398 4.23332 2.99398 2.56665 5.04065 2.56665C6.25398 2.56665 7.32732 3.15332 8.00065 4.05998C8.67398 3.15332 9.75398 2.56665 10.9607 2.56665C13.0073 2.56665 14.6673 4.23332 14.6673 6.29332C14.6673 10.96 10.3473 13.7133 8.41398 14.3733Z"
                        stroke="#292D32"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div></div>
        </section>
      </div>

      <div className="w-1/2 flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <section
            className={clsx(
              containers.basicCont,
              "w-full p-8 flex flex-col gap-7"
            )}
          >
            <div className="w-full h-[224px] relative">
              <Image
                src={"/assets/images/car.png"}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="w-full flex justify-between">
              <div className="w-full flex flex-col gap-6">
                <span className={clsx(typoGraphy.text20)}>
                  Since Last Charge
                </span>

                <div className="flex items-start gap-9">
                  <div className="flex flex-col gap-1">
                    <span className={clsx(typoGraphy.text18, "opacity-40")}>
                      Distance
                    </span>
                    <span className={clsx(typoGraphy.text28, "font-semibold")}>
                      145 Km
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className={clsx(typoGraphy.text18, "opacity-40")}>
                      Average Energy
                    </span>
                    <span className={clsx(typoGraphy.text28, "font-semibold")}>
                      15 KJ
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <span className={clsx(typoGraphy.text20, "relative left-4")}>
                  Nearest Charger
                </span>

                <span className="flex items-center gap-3 w-max text-wrap">
                  <span className="p-2 rounded-full border border-lightgray03 dark:border-gray02">
                    <Zap size={16} className="opacity-40" />
                  </span>
                  Miclan, DW <br /> 891 Limarenda road
                </span>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4">
            {AutomotiveData1?.map((e) => (
              <SmallCards {...e} key={e?.head} />
            ))}
          </section>
        </div>

        <section
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-7"
          )}
        >
          <div>
            <span className={clsx(typoGraphy.text28)}>My chats</span>
            <p className={clsx(typoGraphy.text18, "opacity-40")}>
              Do you have any message?
            </p>
          </div>

          <div className="w-full rounded-[32px] h-full bg-[#F5F5F5] dark:bg-[#171717] py-5 px-6 flex flex-col gap-4">
            <div
              className={clsx(
                containers.basicCont,
                "flex items-center justify-between dark:bg-black"
              )}
            >
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className={clsx(typoGraphy.text18, "font-bold")}>
                    Anna Gudz
                  </span>
                  <p className={clsx(typoGraphy.text16, "opacity-40")}>
                    Manager
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="p-3 rounded-full bg-[#F5F5F5] dark:[#FFFFFF1A] text-black opacity-40 cursor-pointer">
                  <Video size={16} />
                </span>
                <span className="p-3 rounded-full bg-[#060606] dark:bg-[#FFFFFF] text-white dark:text-black cursor-pointer">
                  <Phone size={16} />
                </span>
              </div>
            </div>

            <section className="w-full bg-transparent h-max">
              <div className="flex justify-end">
                <div className="flex flex-col items-start gap-1 w-max">
                  <span
                    className={clsx(
                      typoGraphy.text16,
                      "p-4 rounded-[26px] rounded-bl-none border-lightgray03 border dark:border-gray02"
                    )}
                  >
                    Hello, Anna
                  </span>
                  <p className={clsx(typoGraphy.text16, "opacity-40")}>
                    4 min ago
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex flex-col items-end gap-1 w-max">
                  <span
                    className={clsx(
                      typoGraphy.text16,
                      "p-4 rounded-[26px] rounded-br-none border-lightgray03 border dark:border-gray02 max-w-[200px]"
                    )}
                  >
                    Hello! How are you? Is everything fine?
                  </span>
                  <p className={clsx(typoGraphy.text16, "opacity-40")}>
                    4 min ago
                  </p>
                </div>
              </div>
            </section>

            <div
              className={clsx(
                containers.basicCont,
                "flex items-center justify-between gap-4 dark:bg-black"
              )}
            >
              <input
                type="text"
                placeholder="Write your message"
                className={clsx(
                  "bg-[#0606060A] dark:bg-[#1F1F1F] w-full rounded-[32px] py-3 px-6",
                  typoGraphy.text16
                )}
              />

              <div className="flex items-center gap-2">
                <span className="p-3 rounded-full bg-[#F5F5F5] dark:[#FFFFFF1A] text-black opacity-40 cursor-pointer">
                  <Paperclip size={16} />
                </span>
                <span className="p-3 rounded-full bg-[#F5F5F5] dark:[#FFFFFF1A] text-black opacity-40 cursor-pointer">
                  <Mic size={16} />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardWrapper(
  page,
  ["Dashboard", "Automotive"],
  "Get full control"
);
