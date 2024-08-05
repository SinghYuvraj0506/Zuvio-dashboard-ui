import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis,YAxis } from "recharts"

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
};

const AreaChartType: React.FC<BarChartProps> = ({
  chartConfig,
  chartData,
  xDataKey,
  yDataKey,
}) => {
  return (
    <ChartContainer config={chartConfig}>
    <AreaChart
      accessibilityLayer
      data={chartData}
      margin={{
        left: 12,
        right: 12,
      }}
    >
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey={xDataKey}
        tickLine={false}
        axisLine={false}
        tickMargin={8}
        tickFormatter={(value) => value.slice(0, 3)}
      />
       <YAxis
          dataKey={yDataKey}
          tickLine={false}
          tickMargin={25}
          axisLine={false}
        />
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent indicator="line" />}
      />
      <Area
        dataKey={yDataKey}
        type="natural"
        fill={`var(--color-${yDataKey})`}
        fillOpacity={0.4}
        stroke={`var(--color-${yDataKey})`}
      />
    </AreaChart>
  </ChartContainer>
  );
};

export default AreaChartType;
