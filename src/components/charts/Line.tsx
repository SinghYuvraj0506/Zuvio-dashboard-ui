import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

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
  yDataKey: string | string[];
  showY?: boolean;
  type?: "natural" | "linear";
  showGrid?: boolean;
};

const LineChartType: React.FC<BarChartProps> = ({
  chartConfig,
  chartData,
  xDataKey,
  yDataKey,
  showY = true,
  type = "natural",
  showGrid = false,
}) => {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={showGrid} horizontal={showGrid} />
        <XAxis
          dataKey={xDataKey}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        {showY && (
          <YAxis
            tickLine={false}
            tickMargin={25}
            axisLine={false}
          />
        )}
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />

        {Array.isArray(yDataKey) ? (
          yDataKey?.map((e) => (
            <Line
              dataKey={e}
              type={type}
              stroke={`var(--color-${e})`}
              strokeWidth={2}
              dot={{
                fill: `var(--color-${e})`,
              }}
              activeDot={{
                r: 6,
              }}
            />
          ))
        ) : (
          <Line
            dataKey={yDataKey}
            type={type}
            stroke={`var(--color-${yDataKey})`}
            strokeWidth={2}
            dot={{
              fill: `var(--color-${yDataKey})`,
            }}
            activeDot={{
              r: 6,
            }}
          />
        )}
      </LineChart>
    </ChartContainer>
  );
};

export default LineChartType;
