import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type BarChartProps = {
  chartData: any;
  chartConfig: ChartConfig;
  xDataKey: string;
  yDataKey: string;
  showY?: boolean;
  barThickness?: number;
  horizontal?: boolean;
};

const BarChartType: React.FC<BarChartProps> = ({
  chartConfig,
  chartData,
  xDataKey,
  yDataKey,
  showY = true,
  barThickness = 28,
  horizontal = false,
}) => {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        layout={horizontal ? "vertical" : "horizontal"}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        {horizontal ? (
          <>
            {showY && (
              <XAxis
                dataKey={yDataKey}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
            )}

            <YAxis
              dataKey={xDataKey}
              type="category"
              tickMargin={15}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xDataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            {showY && (
              <YAxis
                dataKey={yDataKey}
                tickLine={false}
                tickMargin={25}
                axisLine={false}
              />
            )}
          </>
        )}

        <Bar
          dataKey={yDataKey}
          barSize={barThickness}
          fill={`var(--color-${yDataKey})`}
          radius={8}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default BarChartType;
