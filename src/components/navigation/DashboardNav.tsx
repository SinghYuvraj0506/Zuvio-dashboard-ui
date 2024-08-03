"use client"
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings } from "lucide-react";
import { typoGraphy } from "@/lib/cssConfig";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const DashboardNav = () => {
  const router  = useRouter()
  return (
    <div className="w-full p-8 border-b border-b-[#0606061A] dark:border-b-[#FFFFFF1A] flex items-center justify-between bg-white dark:bg-transparent">
      <div className="flex flex-col gap-1">
        <span className={clsx(typoGraphy.text28)}>Welcome back, Miles Esther</span>
        <p className={clsx(typoGraphy.text20,"opacity-40")}>You have 12 notifications</p>
      </div>

      <div className="flex items-center gap-10">
        <section className="flex items-center gap-3">
          <span className="dark:bg-[#FFFFFF1F] bg-[#0606060A] p-2 flex items-center justify-center rounded-full w-max cursor-pointer">
            <Search size={20}/>
          </span>

          <span className="dark:bg-[#FFFFFF1F] bg-[#0606060A] p-2 flex items-center justify-center rounded-full w-max cursor-pointer">
            <Settings size={20} onClick={()=>router.push("/dashboard/settings")}/>
          </span>

          <span className="dark:bg-[#FFFFFF1F] bg-[#0606060A] p-2 flex items-center justify-center rounded-full w-max cursor-pointer">
            <Bell size={20}/>
          </span>
        </section>

        <section className="flex items-center gap-5">
          <Avatar>
            <AvatarImage
              className="object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/640px-ChrisEvans2023.jpg"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-1">
            <span className={clsx(typoGraphy.text24)}>Miles Esther</span>
            <span className={clsx(typoGraphy.text20,"opacity-40")}>Free Account</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardNav;
