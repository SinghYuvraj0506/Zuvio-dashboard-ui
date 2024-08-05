"use client";

import React from "react";
import { Cards, GraphCard, SmallCards } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { containers, typoGraphy } from "@/lib/cssConfig";
import {
  AnalyticsCardData,
  AnalyticsData2,
  ChartsDataAnalytics,
  CountrySales,
} from "@/lib/dummyData";
import clsx from "clsx";
import { ChartColumnBig, SquareActivity } from "lucide-react";
import BarChartType from "@/components/charts/Bar";
import LineChartType from "@/components/charts/Line";
import AreaChartType from "@/components/charts/Area";
import Image from "next/image";
import Mapbox from "@/components/globals/Map";

const page = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <section
        className={clsx(
          containers.basicCont,
          "flex items-center justify-between"
        )}
      >
        <div className="flex flex-col gap-12 w-1/2">
          <div className="flex items-center gap-4">
            <span className="p-3 dark:border-[#FFFFFF1A] border-[#0606061A] border rounded-full">
              <ChartColumnBig color="#6A6A6A" />
            </span>
            Sales by country
          </div>

          <div className="flex flex-col gap-6">
            {/* table head ----- */}
            <table className=" table-auto w-full">
              <thead>
                <tr
                  className={clsx(
                    typoGraphy.text18,
                    "font-normal text-left mb-10"
                  )}
                >
                  <th className="pb-8 font-normal opacity-40">Country</th>
                  <th className="pb-8 font-normal opacity-40">Sales</th>
                  <th className="pb-8 font-normal opacity-40">Bounce</th>
                  <th className="pb-8 font-normal opacity-40">Value</th>
                </tr>
              </thead>

              <tbody>
                {CountrySales?.map((e) => (
                  <tr key={e.country} className="w-full">
                    <td className="flex items-center gap-4 pb-2">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden">
                        <Image
                          src={e.countryFlag}
                          alt=""
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <span className={clsx(typoGraphy.text20)}>
                        {e.country}
                      </span>
                    </td>

                    <td className={clsx(typoGraphy.text18, "pb-3")}>
                      {e.sales}
                    </td>

                    <td className="pb-3">{e.bounce}</td>

                    <td className="pb-3">{e.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-1/2 relative h-[80%]">
          <Mapbox />
        </div>
      </section>

      <section className="w-full grid grid-cols-3 gap-4">
        {ChartsDataAnalytics?.views?.map((e) => (
          <GraphCard
            key={e?.head}
            head={e?.head}
            subhead={e?.span}
            icon={<SquareActivity size={16} />}
            helperText={e?.helpertext}
            GraphContent={
              e?.type === "Bar" ? (
                <BarChartType
                  chartConfig={{
                    views: {
                      label: "Views",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  chartData={ChartsDataAnalytics.chartData}
                  xDataKey={ChartsDataAnalytics.xDataLabel}
                  yDataKey={ChartsDataAnalytics.yDataLabel}
                />
              ) : e?.type === "Line" ? (
                <LineChartType
                  chartConfig={{
                    views: {
                      label: "Views",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  chartData={ChartsDataAnalytics.chartData}
                  xDataKey={ChartsDataAnalytics.xDataLabel}
                  yDataKey={ChartsDataAnalytics.yDataLabel}
                />
              ) : (
                <AreaChartType
                  chartConfig={{
                    views: {
                      label: "Views",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  chartData={ChartsDataAnalytics.chartData}
                  xDataKey={ChartsDataAnalytics.xDataLabel}
                  yDataKey={ChartsDataAnalytics.yDataLabel}
                />
              )
            }
          />
        ))}
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
