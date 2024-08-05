"use client";

import BarChartType from "@/components/charts/Bar";
import LineChartType from "@/components/charts/Line";
import PieChartType from "@/components/charts/Pie";
import { GraphCard } from "@/components/globals/Cards";
import DashboardWrapper from "@/components/hoc/DashboardWrapper";
import { buttons, containers, typoGraphy } from "@/lib/cssConfig";
import { CountrySales, SalesData } from "@/lib/dummyData";
import clsx from "clsx";
import { Banknote, TrendingUp, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full grid grid-cols-3 gap-4">
        <section
          className={clsx(
            containers.basicCont,
            "p-6 flex items-center justify-between"
          )}
        >
          <div className="flex flex-col gap-5">
            <span>Sales</span>

            <div className="flex items-center gap-2">
              <span className="p-2 rounded-full border border-lightgray02 dark:border-gray02 opacity-40">
                <Banknote size={20} />
              </span>
              <span className={clsx(typoGraphy.text32)}>$4.5m</span>
              <span className={clsx(typoGraphy.text16, "text-[#95E49A]")}>
                +14%
              </span>
            </div>
          </div>

          <div className="w-[108px]">
            <BarChartType
              chartData={[
                { number: "5", views: 12 },
                { number: "6", views: 10 },
                { number: "2", views: 5 },
                { number: "3", views: 15 },
              ]}
              barThickness={8}
              showY={false}
              chartConfig={{
                views: {
                  label: "Views",
                  color: "hsl(var(--chart-1))",
                },
              }}
              xDataKey="number"
              yDataKey="views"
            />
          </div>
        </section>
        <section
          className={clsx(
            containers.basicCont,
            "p-6 flex items-center justify-between"
          )}
        >
          <div className="flex flex-col gap-5">
            <span>Customers</span>

            <div className="flex items-center gap-2">
              <span className="p-2 rounded-full border border-lightgray02 dark:border-gray02 opacity-40">
                <User size={20} />
              </span>
              <span className={clsx(typoGraphy.text32)}>4.2k</span>
              <span className={clsx(typoGraphy.text16, "text-[#95E49A]")}>
                +24%
              </span>
            </div>
          </div>

          <div className="w-[108px]">
            <BarChartType
              chartData={[
                { month: "June", views: 12 },
                { month: "July", views: 10 },
                { month: "August", views: 7 },
                { month: "September", views: 15 },
              ]}
              barThickness={12}
              showY={false}
              chartConfig={{
                views: {
                  label: "Views",
                  color: "hsl(var(--chart-1))",
                },
              }}
              xDataKey="month"
              yDataKey="views"
            />
          </div>
        </section>
        <section
          className={clsx(
            containers.basicCont,
            "p-6 flex items-center justify-between"
          )}
        >
          <div className="flex flex-col gap-5">
            <span>Avg. Revenue</span>

            <div className="flex items-center gap-2">
              <span className="p-2 rounded-full border border-lightgray02 dark:border-gray02 opacity-40">
                <TrendingUp size={20} />
              </span>
              <span className={clsx(typoGraphy.text32)}>86%</span>
              <span className={clsx(typoGraphy.text16, "text-[#95E49A]")}>
                +18%
              </span>
            </div>
          </div>

          <div className="w-[108px]">
            <LineChartType
              chartData={[
                { number: "5", views: 12 },
                { number: "6", views: 10 },
                { number: "2", views: 5 },
                { number: "3", views: 15 },
              ]}
              showY={false}
              chartConfig={{
                views: {
                  label: "Views",
                  color: "hsl(var(--chart-1))",
                },
              }}
              xDataKey="number"
              yDataKey="views"
            />
          </div>
        </section>
      </div>

      <div className="w-full grid grid-cols-3 gap-4">
        <section
          className={clsx(containers.basicCont, "col-span-1 p-6 relative")}
        >
          <span className={clsx(typoGraphy.text20)}>Channels</span>

          <PieChartType
            chartData={[
              {
                channel: "facebook",
                sales: 500,
                fill: "var(--color-facebook)",
              },
              { channel: "direct", sales: 250, fill: "var(--color-direct)" },
              {
                channel: "referral",
                sales: 115,
                fill: "var(--color-referral)",
              },
              { channel: "organic", sales: 135, fill: "var(--color-organic)" },
            ]}
            chartConfig={{
              sales: {
                label: "Sales",
              },
              facebook: {
                label: "Facebook",
                color: "hsl(var(--chart-1))",
              },
              direct: {
                label: "Direct",
                color: "hsl(var(--chart-2))",
              },
              referral: {
                label: "Referral",
                color: "hsl(var(--chart-3))",
              },
              organic: {
                label: "Organic",
                color: "hsl(var(--chart-4))",
              },
            }}
            nameKey="channel"
            dataKey="sales"
          />

          <div className="flex flex-col gap-6 absolute bottom-8">
            <p className={clsx(typoGraphy.text18, "opacity-40")}>
              More than 1,200,000 sales are made using referral marketing,
              and 700,000 are from social media.
            </p>

            <button className={clsx(buttons.buttonPurple, "w-max")}>
              Read more
            </button>
          </div>
        </section>

        <section className={clsx("col-span-2")}>
          <GraphCard
            head="Revenue"
            GraphContent={
              <LineChartType
                chartData={[
                  { month: "April", revenue1: 34, revenue2: 12 },
                  { month: "May", revenue1: 28, revenue2: 21 },
                  { month: "June", revenue1: 2, revenue2: 35 },
                  { month: "July", revenue1: 10, revenue2: 10 },
                  { month: "August", revenue1: 74, revenue2: 24 },
                  { month: "September", revenue1: 15, revenue2: 6 },
                  { month: "October", revenue1: 18, revenue2: 15 },
                  { month: "November", revenue1: 56, revenue2: 36 },
                  { month: "December", revenue1: 47, revenue2: 15 },
                ]}
                chartConfig={{
                  revenue1: {
                    label: "Revenue1",
                    color: "hsl(var(--chart-1))",
                  },
                  revenue2: {
                    label: "Revenue2",
                    color: "hsl(var(--chart-2))",
                  },
                }}
                type="linear"
                showGrid={true}
                xDataKey="month"
                yDataKey={["revenue1", "revenue2"]}
                // yDataKey="revenue1"
              />
            }
          />
        </section>
      </div>

      <div className="w-full grid grid-cols-2 gap-4">
        <section
          className={clsx(
            containers.basicCont,
            "col-span-1 p-6 space-y-8 relative"
          )}
        >
          <span className={clsx(typoGraphy.text20)}>Sales by Age</span>
          <BarChartType
            chartData={[
              { age: "16-20", sales: 19 },
              { age: "21-25", sales: 32 },
              { age: "26-30", sales: 55 },
              { age: "31-36", sales: 25 },
              { age: "37-42", sales: 34 },
              { age: "42-50", sales: 18 },
              { age: "50+", sales: 12 },
            ]}
            chartConfig={{
              sales: {
                label: "Sales",
                color: "hsl(var(--chart-1))",
              },
            }}
            horizontal={true}
            xDataKey="age"
            yDataKey="sales"
            barThickness={12}
          />
        </section>
        <section
          className={clsx(
            containers.basicCont,
            "col-span-1 p-6 relative space-y-5"
          )}
        >
          <span className={clsx(typoGraphy.text20)}>Sales by Country</span>
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
              </tr>
            </thead>

            <tbody>
              {CountrySales?.map((e) => (
                <tr key={e.country} className="w-full">
                  <td className="flex items-center gap-4 pb-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden">
                      <Image
                        src={e.countryFlag}
                        alt=""
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <span className={clsx(typoGraphy.text20)}>{e.country}</span>
                  </td>

                  <td className={clsx(typoGraphy.text18, "pb-3")}>{e.sales}</td>

                  <td className="pb-3">
                  {e.bounce}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section
        className={clsx(
          containers.basicCont,
          "col-span-1 p-6 space-y-8 relative"
        )}
      >
        <span className={clsx(typoGraphy.text20)}>Top Selling Products</span>

        <table className=" table-auto w-full">
          <thead>
            <tr
              className={clsx(typoGraphy.text18, "font-normal text-left mb-10")}
            >
              <th className="pb-8 font-normal">PRODUCT</th>
              <th className="pb-8 font-normal">VALUE</th>
              <th className="pb-8 font-normal">ADS SPENT</th>
              <th className="pb-8 font-normal">REFUNDS</th>
            </tr>
          </thead>

          <tbody>
            {SalesData?.map((e) => (
              <tr key={e?.product} className="w-full">
                <td className="flex items-center gap-4 pb-4">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={e?.itemImg}
                      alt=""
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className={clsx(typoGraphy.text20)}>{e?.product}</span>
                    <p className={clsx(typoGraphy.text18, "opacity-40 flex items-center gap-1")}>
                      <span className="dark:text-[#95E49A] text-[#202e1d] opacity-100">
                      {e?.orders} 
                      </span>
                      orders
                    </p>
                  </div>
                </td>

                <td className={clsx(typoGraphy.text18, "pb-3")}>{e?.value}</td>

                <td className="pb-3">
                  {e?.adsSpent}
                </td>

                <td className="pb-3">
                  {e?.refunds}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default DashboardWrapper(
  Page,
  ["Dashboard", "Sales"],
  "Track your Sales"
);
