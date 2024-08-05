import React from "react";
import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type BarChartProps = {
    chartData:any,
    chartConfig:ChartConfig,
    dataKey:string,
    nameKey:string,
}

const PieChartType:React.FC<BarChartProps> = ({chartConfig, chartData, dataKey, nameKey}) => {
  return (
    <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius={50}
            />
          </PieChart>
        </ChartContainer>
  );
};

export default PieChartType;
