import React, { ReactNode } from "react";
import Navigation from "@/components/navigation/Index";
import Footer from "@/components/footer/Index";

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main>
      <Navigation />
      {children}
      <Footer/>
    </main>
  );
};

export default layout;
