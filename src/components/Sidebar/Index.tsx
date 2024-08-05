"use client"

import { SidebarOptions } from "@/lib/constants";
import { typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import { ChartPie, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface SidebarTabProps {
  title: string;
  icon?: ReactNode;
  onClick: () => void;
  active?: boolean;
  link?: string;
}

const SidebarTabs: React.FC<SidebarTabProps> = ({
  icon,
  title,
  onClick,
  active,
}) => {
  return (
    <div
      className={clsx(
        "w-full rounded-[62px] py-3 px-5 flex gap-3 items-center hover:bg-secondaryPurple hover:text-white cursor-pointer",
        typoGraphy.text20,
        active ? "bg-secondaryPurple text-white" : "bg-transparent text-lightgray02 dark:text-gray02"
      )}
      onClick={onClick}
    >
      {icon} {title}
    </div>
  );
};

const Index = () => {

    const pathname = usePathname()
    const router = useRouter()

    const {theme, setTheme} = useTheme()

  return (
    <div className="w-[280px] h-screen border-r border-r-[#0606061A] dark:border-r-[#FFFFFF1A] px-6 py-8 box-border flex flex-col gap-12">
      {/* logo ----- */}
      <div className="w-[106px] h-8 relative">
        <Image
          src={theme === "light" ? "/assets/svg/logoblack.svg"  : "/assets/svg/logo.svg"}
          alt="logo"
          fill
          className="object-cover cursor-pointer"
          onClick={()=>{
            router.push("/landing")
          }}
        />
      </div>

      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-4">
          <span className={clsx(typoGraphy.text20, "text-lightgray02 dark:text-gray02")}>Dashboard</span>

          <div className="flex w-full flex-col gap-2">
            {SidebarOptions?.map((e) => (
              <SidebarTabs
                key={e?.title}
                {...e}
                active= {pathname.includes(e?.link)}
                icon={<e.icon />}
                onClick={() => {
                  router.push(e?.link)
                }}
              />
            ))}
          </div>
        </div>

        {/* theme ----------- */}
        <div className="flex flex-col gap-4">
          <span className={clsx(typoGraphy.text20, "text-lightgray02 dark:text-gray02")}>Theme</span>

          <div className="flex w-full flex-col gap-2">
              <SidebarTabs
                title="Light Mode"
                active={theme === "light"}
                icon={<Sun size={24}/>}
                onClick={() => {
                  setTheme("light")
                }}
              />
              <SidebarTabs
                title="Dark Mode"
                active={theme === "dark"}
                icon={<Moon size={24}/>}
                onClick={() => {
                  setTheme("dark")
                }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
