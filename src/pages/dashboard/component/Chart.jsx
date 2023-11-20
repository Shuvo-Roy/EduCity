import React from "react";
import { BarChart } from "keep-react";
export default function Chart() {
  const BarChartData = [
    {
      name: "2",
      students: 340,
      earning: 140,
      data: "Jan",
    },
    {
      name: "4",
      students: 300,
      earning: 200,
      data: "Feb",
    },
    {
      name: "6",
      students: 170,
      earning: 120,
      data: "Mar",
    },
    {
      name: "8",
      students: 190,
      earning: 130,
      data: "Apr",
    },
    {
      name: "10",
      students: 450,
      earning: 120,
      data: "May",
    },
    {
      name: "12",
      students: 400,
      earning: 213,
      data: "June",
    },
    {
      name: "14",
      students: 250,
      earning: 180,
      data: "Jul",
    },
    {
      name: "16",
      students: 320,
      earning: 150,
      data: "Aug",
    },
    {
      name: "18",
      students: 280,
      earning: 160,
      data: "Sep",
    },
    {
      name: "20",
      students: 390,
      earning: 110,
      data: "Oct",
    },
    {
      name: "22",
      students: 220,
      earning: 90,
      data: "Nov",
    },
    {
      name: "24",
      students: 360,
      earning: 170,
      data: "Dec",
    },
  ];
  return (
    <div className="">
      <div className="px-4">
        <div className="bg-white rounded-xl">
          <div className="p-4">
            <BarChart
              dataKey="students"
              chartData={BarChartData}
              barSize={10}
              showGridLine
              showXaxis
              XAxisDataKey="data"
              showLegend={true}
              showTooltip={true}
              barRadius={[4, 4, 0, 0]}
              secondaryDataKey="earning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
