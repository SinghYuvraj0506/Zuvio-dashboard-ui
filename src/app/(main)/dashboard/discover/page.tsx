import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttons, containers, typoGraphy } from "@/lib/cssConfig";
import { discoverData2, disoverTestimonials } from "@/lib/dummyData";
import clsx from "clsx";
import { CircleEllipsis, MessageCircleMore, Plus, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <section
        className={clsx(
          containers.basicCont,
          "h-[490px] relative overflow-hidden"
        )}
      >
        <div className="absolute w-full h-full left-0 top-0">
          <div className="w-full h-[280px] relative">
            <Image
              src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="w-full px-7 flex flex-col items-center gap-6 relative -top-7">
            <section className="flex items-center w-full justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-32 h-32 relative bottom-4">
                  <AvatarImage
                    className="object-cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/640px-ChrisEvans2023.jpg"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <span className={clsx(typoGraphy.text24, "font-bold")}>
                    Richard Davis
                  </span>
                  <p className={clsx(typoGraphy.text18, "opacity-40")}>
                    CEO / Co-Founder
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className={clsx(buttons.buttonPurple)}>Message</button>
                <button
                  className={clsx(
                    buttons.buttonPurple,
                    "flex items-center gap-1"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.93313 4.21344L10.5931 2.32677C13.1331 1.4801 14.5131 2.86677 13.6731 5.40677L11.7865 11.0668C10.5198 14.8734 8.43979 14.8734 7.17312 11.0668L6.61312 9.38677L4.93313 8.82677C1.12646 7.5601 1.12646 5.48677 4.93313 4.21344Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.74023 9.09988L9.1269 6.70654"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Share profile
                </button>
              </div>
            </section>

            <section className="w-full flex items-start gap-12 overflow-x-auto">
              <span className="bg-white border border-lightgray02 dark:border-transparent dark:bg-gray02 p-3 rounded-full cursor-pointer">
                <Plus />
              </span>

              {new Array(12).fill(10)?.map((e, i) => (
                <div className="flex flex-col gap-1 items-center" key={i}>
                  <div className="p-2 border border-lightgray02 dark:border-gray02 rounded-full">
                    <div className="w-9 h-9 relative rounded-full">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/640px-ChrisEvans2023.jpg"
                        alt=""
                        fill
                        className="object-cover object-center rounded-full"
                      />
                    </div>
                  </div>

                  <span className={clsx(typoGraphy.text18)}>Abbie W</span>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>

      <div className="flex items-start gap-4">
        <section
          className={clsx(
            containers.basicCont,
            "w-2/3 relative overflow-hidden p-8 flex flex-col gap-8"
          )}
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  className="object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/640px-ChrisEvans2023.jpg"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-1">
                <span className={clsx(typoGraphy.text20, "font-bold")}>
                  John Snow
                </span>
                <span className={clsx(typoGraphy.text18, "text-lightgray02 dark:text-gray02")}>
                  3 days ago
                </span>
              </div>
            </div>

            <button className={clsx(buttons.buttonPurple)}>+ Follow</button>
          </div>

          <p className={clsx(typoGraphy.text20, "text-lightgray02 dark:text-gray02 w-full")}>
            Personal profiles are the perfect way for you to grab their
            attention and persuade recruiters to continue reading your CV
            because you’re telling them from the off exactly why they should
            hire you.
          </p>

          <div className="flex flex-col gap-5 w-full">
            <div className="w-full h-[490px] relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1853371/pexels-photo-1853371.jpeg"
                alt=""
                fill
                className="object-center object-cover"
              />
            </div>

            <div className="flex items-center justify-between">
              <section className="flex items-center gap-8">
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                      fill="#E72246"
                    />
                  </svg>
                  150
                </span>

                <span className="flex items-center gap-1">
                <MessageCircleMore size={20}/>
                  150
                </span>
                <span className="flex items-center gap-1">
                <Send size={19}/>
                  150
                </span>
              </section>

              <section className="flex items-center gap-3">
                <Image
                  src={"/assets/images/hero1.png"}
                  alt=""
                  width={80}
                  height={32}
                />

                <span className={clsx(typoGraphy.text20, "opacity-40")}>
                  and 30+ more
                </span>
              </section>
            </div>

            <div className="flex flex-col gap-10 mt-10">
              {disoverTestimonials?.map((e) => (
                <div
                  key={e?.username}
                  className="w-full flex items-start gap-4"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage className="object-cover" src={e?.profile} />
                    <AvatarFallback>{e?.username}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-2">
                    <span className={clsx(typoGraphy.text20, "font-bold")}>
                      {e?.username}
                    </span>
                    <p className={clsx(typoGraphy.text18, "opacity-60")}>
                      {e?.desc}
                    </p>

                    <section className="flex items-center gap-6">
                      <span
                        className={clsx(
                          typoGraphy.text18,
                          "text-lightgraybase dark:text-gray02 flex items-center gap-1"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-[16px]"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            fill="#E72246"
                          />
                        </svg>
                        {e?.likes}
                      </span>

                      <span
                        className={clsx(
                          typoGraphy.text18,
                          "text-lightgraybase dark:text-gray02 flex items-center gap-1"
                        )}
                      >
                        <MessageCircleMore size={15}/>
                        {e?.comments}
                      </span>
                    </section>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-4 mt-10">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  className="object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/640px-ChrisEvans2023.jpg"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-1 w-full">
                <span className={clsx(typoGraphy.text18, "opacity-60")}>
                  Your message
                </span>

                <textarea
                  placeholder="Type your message here"
                  className={clsx(
                    typoGraphy.text18,
                    "w-full px-3 py-2 box-border border-lightgray02 dark:border-gray02 bg-transparent border rounded-md h-20 resize-none"
                  )}
                ></textarea>

                <p className={clsx(typoGraphy.text18, "opacity-40")}>
                  Your message will be copied to the support team.
                </p>

                <button
                  className={clsx(
                    buttons.buttonPurple,
                    typoGraphy.text20,
                    "w-max mt-6"
                  )}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className={clsx(
            containers.basicCont,
            "w-1/3 relative px-6 py-8 overflow-hidden space-y-16"
          )}
        >
          {discoverData2?.map((e, index) => (
            <div key={index} className="flex flex-col gap-6 items-start">
              {!e?.isMeet ? (
                <div className="w-full flex items-center justify-between">
                  <span className={clsx(typoGraphy.text28)}>{e?.head}</span>
                  <CircleEllipsis className="" />
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Image src={e?.companyLogo as string} alt="" width={24} height={24} />

                  <div className="flex flex-col gap-1">
                    <span className={clsx(typoGraphy.text20, "font-bold")}>
                      {e?.meetName}
                    </span>
                    <span className={clsx(typoGraphy.text18)}>{e?.time}</span>
                  </div>
                </div>
              )}

              <div>
                <p className={clsx(typoGraphy.text20, "opacity-40")}>
                  {e?.desc}
                </p>

                {e?.meetId && (
                  <span className={clsx(typoGraphy.text18)}>
                    <span className="font-bold">Meeting Id:</span>
                    {e?.meetId}
                  </span>
                )}
              </div>

              {e?.isMeet ? (
                <div className="w-full flex items-center justify-between">
                  <button
                    className={clsx(buttons.buttonPurple, typoGraphy.text20)}
                  >
                    Join Now
                  </button>

                  <Image
                    src={"/assets/images/hero1.png"}
                    width={52}
                    height={24}
                    alt=""
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full">
                  {e?.points?.map((e) => (
                    <div
                      key={e?.head}
                      className={clsx(
                        typoGraphy.text18,
                        "w-full flex items-center justify-between"
                      )}
                    >
                      <span>{e?.head}</span>

                      {e?.image ? (
                        <Image src={e?.image} width={52} height={24} alt="" />
                      ) : (
                        <span>{e?.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DashboardWrapper(
  page,
  ["Dashboard", "Discover"],
  "Discover New things"
);
