"use client";

import { Input01 } from "@/components/globals/Inputs";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { Switch } from "@/components/ui/switch";
import { buttons, containers, typoGraphy } from "@/lib/cssConfig";
import { settingsAccount, settingsNotification } from "@/lib/dummyData";
import clsx from "clsx";
import {
  Bell,
  ChevronRight,
  CircleUserRound,
  LayoutGrid,
  Lock,
  Monitor,
  ScrollText,
  Shield,
  Speaker,
  Trash,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-start gap-4">
      <section
        className={clsx(
          containers.basicCont,
          "w-1/3 p-8 flex flex-col gap-8 sticky top-0"
        )}
      >
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("basicInfo")}
        >
          <ScrollText /> Basic Info
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("changepassword")}
        >
          <Lock /> Change Password
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("twoFactor")}
        >
          <Shield /> Two-factor authentication
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("accounts")}
        >
          <CircleUserRound /> Accounts
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("notifications")}
        >
          <Bell /> Notifications
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("sessions")}
        >
          <LayoutGrid /> Sessions
        </span>
        <span
          className={clsx(
            typoGraphy.text20,
            "cursor-pointer flex items-center gap-4"
          )}
          onClick={() => scrollToSection("deleteAccounts")}
        >
          <Trash /> Delete Account
        </span>
      </section>

      <section className="w-2/3 flex flex-col gap-8">
        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="basicInfo"
        >
          <span className={clsx(typoGraphy.text28)}>Basic Info</span>

          <section className="w-full grid grid-cols-2 gap-x-4 gap-y-6">
            <Input01 label="Name" placeholder="Miles" />
            <Input01 label="Last name" placeholder="Esther" />
            <Input01 label="Email" placeholder="felicia.reid@example.com" />
            <Input01
              label="Phone number"
              placeholder="+91 8756783432"
              inputType="number"
            />
            <Input01 label="Language" placeholder="English" />
            <Input01 label="Location" placeholder="South Dakota, USA" />
          </section>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="changepassword"
        >
          <span className={clsx(typoGraphy.text28)}>Change Password</span>

          <section className="w-full grid grid-cols-1 gap-x-4 gap-y-6">
            <Input01
              label="Current Password"
              placeholder="Enter you password"
            />
            <Input01 label="New Password" placeholder="Create new password" />
            <Input01
              label="Confirm Password"
              placeholder="Confirm you password"
            />
          </section>

          <div className="flex flex-col gap-4">
            <span className={clsx(typoGraphy.text24)}>
              Password requirements
            </span>
            <p className={clsx(typoGraphy.text20, "opacity-60")}>
              Please follow this guide for a strong password:
            </p>
            <ul
              className={clsx(
                "list-disc relative left-5 opacity-40 flex flex-col gap-2",
                typoGraphy.text20
              )}
            >
              <li>One special characters</li>
              <li>Min 6 characters</li>
              <li>One number (2 are recommended)</li>
              <li>Change it often</li>
            </ul>
          </div>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="twoFactor"
        >
          <div className="w-full flex justify-between items-center">
            <span className={clsx(typoGraphy.text28)}>
              Two-factor authentication
            </span>
            <button className={clsx(buttons.buttonPurple)}>Enabled</button>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex w-full items-center justify-between">
              <span className={clsx(typoGraphy.text20)}>Security keys</span>
              <div className="flex items-center gap-6">
                <span className={clsx(typoGraphy.text20, "opacity-60")}>
                  No Security Keys ADD
                </span>
                <button
                  className={clsx(
                    buttons.buttonWithBorderOnly,
                    "py-2 px-4 rounded-lg",
                    typoGraphy.text18
                  )}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className={clsx(typoGraphy.text20)}>SMS number</span>
              <div className="flex items-center gap-6">
                <span className={clsx(typoGraphy.text20, "opacity-60")}>
                  +4012374423
                </span>
                <button
                  className={clsx(
                    buttons.buttonWithBorderOnly,
                    "py-2 px-4 rounded-lg",
                    typoGraphy.text18
                  )}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className={clsx(typoGraphy.text20)}>Authenticator app</span>
              <div className="flex items-center gap-6">
                <span className={clsx(typoGraphy.text20, "opacity-60")}>
                  Not Configured
                </span>
                <button
                  className={clsx(
                    buttons.buttonWithBorderOnly,
                    "py-2 px-4 rounded-lg",
                    typoGraphy.text18
                  )}
                >
                  Set up
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="accounts"
        >
          <div className="w-full flex justify-between items-center">
            <div>
              <span className={clsx(typoGraphy.text28)}>Accounts</span>
              <p className={clsx(typoGraphy.text18, "opacity-40")}>
                Here you can setup and manage your integration settings.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {settingsAccount?.map((e) => (
              <div key={e?.name} className="flex flex-col gap-8">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={e?.companyLogo}
                      alt=""
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <span className={clsx(typoGraphy.text20, "font-bold")}>
                        {e?.name}
                      </span>
                      <span className={clsx(typoGraphy.text18, "opacity-40")}>
                        {e?.subHead || "Show More"}
                      </span>
                    </div>
                  </div>

                  <Switch defaultChecked={e?.switchChecked} />
                </div>

                {e?.desc && (
                  <div className="flex flex-col gap-4">
                    <p className={clsx(typoGraphy.text20, "opacity-40")}>
                      {e?.desc}
                    </p>

                    <div className="flex flex-col gap-4">
                      <div
                        className={clsx(
                          typoGraphy.text20,
                          "w-full py-4 px-4 rounded-3xl border border-lightgray03 dark:border-gray02 box-border flex items-center justify-between"
                        )}
                      >
                        <span>Verification Code</span>
                        <span>{e?.code}</span>
                      </div>
                      <div
                        className={clsx(
                          typoGraphy.text20,
                          "w-full py-4 px-4 rounded-3xl border border-lightgray03 dark:border-gray02 box-border flex items-center justify-between"
                        )}
                      >
                        <span>Connected account</span>
                        <span>{e?.accountId}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="notifications"
        >
          <div className="w-full flex justify-between items-center">
            <div>
              <span className={clsx(typoGraphy.text28)}>Notifications</span>
              <p className={clsx(typoGraphy.text18, "opacity-40")}>
                Choose how you receive notifications. These notification
                settings apply to the things you’re watching.
              </p>
            </div>
          </div>

          <table className=" table-auto w-full">
            <thead>
              <tr
                className={clsx(
                  typoGraphy.text18,
                  "font-normal text-left mb-10"
                )}
              >
                <th className="pb-8 opacity-40 font-normal">Activity</th>
                <th className="pb-8 opacity-40 font-normal">Email</th>
                <th className="pb-8 opacity-40 font-normal">Push</th>
                <th className="pb-8 opacity-40 font-normal">SMS</th>
              </tr>
            </thead>

            <tbody>
              {settingsNotification?.map((e) => (
                <tr key={e?.head} className="w-full">
                  <td className="flex flex-col gap-1 pb-5">
                    <span className={clsx(typoGraphy.text20)}>{e?.head}</span>
                    <p className={clsx(typoGraphy.text18, "opacity-40")}>
                      {e?.desc}
                    </p>
                  </td>

                  <td className={clsx(typoGraphy.text18, "pb-5")}>
                    <Switch defaultChecked={e?.email} />
                  </td>
                  <td className={clsx(typoGraphy.text18, "pb-5")}>
                    <Switch defaultChecked={e?.push} />
                  </td>
                  <td className={clsx(typoGraphy.text18, "pb-5")}>
                    <Switch defaultChecked={e?.sms} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="sessions"
        >
          <div className="w-full flex justify-between items-center">
            <div>
              <span className={clsx(typoGraphy.text28)}>Sessions</span>
              <p className={clsx(typoGraphy.text18, "opacity-40")}>
                This is a list of devices that have logged into your account.
                Remove those that you do not recognize.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-6">
                <Monitor />
                <div className="flex flex-col gap-1">
                  <span className={clsx(typoGraphy.text20, "font-bold")}>
                    Bucharest 68.133.163.201
                  </span>
                  <p className="opacity-40">Your current session</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span
                  className={clsx(
                    typoGraphy.text18,
                    "text-[#2EB67D] bg-[#2EB67D29] border border-[#2EB67D] rounded-lg py-2 px-4"
                  )}
                >
                  Active
                </span>
                <button
                  className={clsx(
                    buttons.buttonTransparent,
                    "py-2 px-1 rounded-lg flex items-center gap-1",
                    typoGraphy.text18
                  )}
                >
                  See more <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-6">
                <Monitor />
                <div className="flex flex-col gap-1">
                  <span className={clsx(typoGraphy.text20, "font-bold")}>
                    Chrome on macOS
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button
                  className={clsx(
                    buttons.buttonTransparent,
                    "py-2 px-1 rounded-lg flex items-center gap-1",
                    typoGraphy.text18
                  )}
                >
                  See more <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-6">
                <Speaker />
                <div className="flex flex-col gap-1">
                  <span className={clsx(typoGraphy.text20, "font-bold")}>
                    Safari on iPhone
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button
                  className={clsx(
                    buttons.buttonTransparent,
                    "py-2 px-1 rounded-lg flex items-center gap-1",
                    typoGraphy.text18
                  )}
                >
                  See more <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            containers.basicCont,
            "w-full p-8 flex flex-col gap-8"
          )}
          id="deleteAccounts"
        >
          <div className="w-full flex justify-between items-center gap-2">
            <div className="flex flex-col gap-2">
              <span className={clsx(typoGraphy.text28)}>Delete Account</span>
              <p className={clsx(typoGraphy.text18, "opacity-40")}>
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
            </div>

            <div className="flex items-center gap-2 text-nowrap">
              <button
                className={clsx(
                  buttons.buttonSmallWithBorderOnly,
                  " rounded-lg",
                  typoGraphy.text18
                )}
              >
                Deactivate
              </button>
              <button
                className={clsx(
                  buttons.buttonDangerous,
                  "rounded-lg py-3 px-6",
                  typoGraphy.text18
                )}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardWrapper(Page,["Dashboard","Settings"],"Settings");
