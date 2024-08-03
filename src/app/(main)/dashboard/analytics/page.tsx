"use client"

import { Cards, SmallCards } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { containers, typoGraphy } from "@/lib/cssConfig";
import {
  AnalyticsCardData,
  AnalyticsData2,
  CountrySales,
} from "@/lib/dummyData";
import clsx from "clsx";
import { ChartColumnBig } from "lucide-react";
import React from "react";




const page = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <section className={clsx(containers.basicCont)}>
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <span className="p-3 dark:border-[#FFFFFF1A] border-[#0606061A] border rounded-full">
              <ChartColumnBig color="#6A6A6A" />
            </span>
            Sales by country
          </div>

          <div className="flex flex-col gap-6 w-1/2">
            {/* table head ----- */}
            <div
              className={clsx(
                "grid grid-cols-4 gap-4 text-lightgray02 dark:text-gray02",
                typoGraphy.text18
              )}
            >
              {["Country    ", "Sales", "Value", "Bounce"]?.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </div>

            {/* table body */}
            <div className="flex flex-col gap-5">
              {CountrySales?.map((e) => (
                <div
                  className={clsx("grid grid-cols-4 gap-4", typoGraphy.text20)}
                  key={e?.sales}
                >
                  <span className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_252_1812)">
                        <path
                          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                          fill="#F0F0F0"
                        />
                        <path
                          d="M2.4813 4.69385C1.53869 5.92024 0.827922 7.33376 0.414062 8.86933H6.65678L2.4813 4.69385ZM23.5873 8.86933C23.1734 7.3338 22.4626 5.92029 21.52 4.6939L17.3447 8.86933H23.5873ZM0.414062 15.1302C0.827969 16.6657 1.53873 18.0792 2.4813 19.3056L6.65664 15.1302H0.414062ZM19.3065 2.48037C18.0801 1.53776 16.6667 0.826992 15.1311 0.413086V6.65576L19.3065 2.48037ZM4.69483 21.519C5.92122 22.4616 7.33473 23.1724 8.87027 23.5863V17.3437L4.69483 21.519ZM8.87022 0.413086C7.33469 0.826992 5.92117 1.53776 4.69483 2.48032L8.87022 6.65571V0.413086ZM15.1311 23.5863C16.6667 23.1724 18.0802 22.4616 19.3065 21.5191L15.1311 17.3437V23.5863ZM17.3447 15.1302L21.52 19.3056C22.4626 18.0793 23.1734 16.6657 23.5873 15.1302H17.3447Z"
                          fill="#0052B4"
                        />
                        <path
                          d="M23.8984 10.4348H13.5652V0.101578C13.0462 0.0339565 12.5234 2.60722e-05 12 0C11.4694 0 10.9471 0.034875 10.4348 0.101578V10.4348H0.101578C0.0339565 10.9538 2.60722e-05 11.4766 0 12C0 12.5306 0.034875 13.0529 0.101578 13.5652H10.4348V23.8984C11.4738 24.0339 12.5261 24.0339 13.5652 23.8984V13.5652H23.8984C23.966 13.0462 24 12.5234 24 12C24 11.4695 23.9651 10.9471 23.8984 10.4348Z"
                          fill="#D80027"
                        />
                        <path
                          d="M15.1297 15.1307L20.4845 20.4855C20.7307 20.239 20.966 19.982 21.1899 19.7151L16.6054 15.1306H15.1297V15.1307ZM8.86878 15.1307H8.86869L3.51392 20.4854C3.76039 20.7316 4.01742 20.9669 4.28431 21.1908L8.86878 16.6062V15.1307ZM8.86878 8.8698V8.86971L3.51397 3.51485C3.2678 3.76131 3.03245 4.01835 2.80859 4.28524L7.39311 8.86976H8.86878V8.8698ZM15.1297 8.8698L20.4845 3.5149C20.2381 3.26873 19.9811 3.0334 19.7142 2.80957L15.1297 7.39409V8.8698Z"
                          fill="#D80027"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_252_1812">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    {e?.country}
                  </span>
                  <span>{e?.sales}</span>
                  <span>{e?.value}</span>
                  <span>{e?.bounce}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* small card section */}
      <section className="grid grid-cols-4 gap-4">
        {AnalyticsData2?.map((e) => (
          <SmallCards {...e} key={e?.head} />
        ))}
      </section>

      {/* Cards section --------------------- */}
      <section className="grid grid-cols-3 gap-4">
        {AnalyticsCardData?.map((e) => (
          <Cards {...e} key={e?.head} />
        ))}
      </section>
    </div>
  );
};

export default DashboardWrapper(
  page,
  ["Dashboard", "Analytics"],
  "Analyse your performance"
);
