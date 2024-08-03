import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar/Index";
import DashboardNav from "@/components/navigation/DashboardNav";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="flex items-start w-screen h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col w-full h-full bg-[#F5F5F5] dark:bg-transparent">
        <DashboardNav/>
      {children}
      </div>
    </main>
  );
};

export default layout;
