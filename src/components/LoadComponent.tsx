import Image from "next/image";
import React from "react";

const LoadComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image src={"/assets/svg/loading.svg"} alt="" width={40} height={20} />
    </div>
  );
};

export default LoadComponent;
