"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    { month: "January", revenue: 186 },
    { month: "February", revenue: 305 },
    { month: "March", revenue: 237 },
    { month: "April", revenue: 73 },
    { month: "May", revenue: 209 },
    { month: "June", revenue: 214 },
    { month: "July", revenue: 156 },
    { month: "August", revenue: 187 },
    { month: "September", revenue: 87 },
    { month: "October", revenue: 243 },
    { month: "November", revenue: 289 },
    { month: "December", revenue: 123 },
];

const chartConfig = {
    revenue: {
        label: "Total Revenue",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

export function BarChartDemo() {
    return (
        <ChartContainer config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={chartData}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={value => value.slice(0, 3)}
                />
                <YAxis
                    dataKey="revenue"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={true}
                    content={<ChartTooltipContent hideIndicator />}
                />
                <Bar
                    dataKey="revenue"
                    fill="hsl(var(--primary))"
                    radius={8}
                />
            </BarChart>
        </ChartContainer>
    );
}
