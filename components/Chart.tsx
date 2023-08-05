import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { dataFetch } from "../api";
const screenWidth = Dimensions.get("window").width;

const chartConfig={
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
}
const Chart: React.FC<{scope: string}> = ({scope}) => {
    const [chartData, setChartData] = useState<any>();
    const fetchChart = async ()=>{
        const data = await dataFetch.chart.parkingDaylyCars(scope);
        if(!data.chart) return;
        setChartData(data.chart);
    }
    useEffect(() => {
        fetchChart();
    }, []);


    const data = {
        labels: ["8h", "9h", "10h", "11h", "12h", "13h"],
        datasets: [
          {
            data: [10, 40, 34, 23, 17, 10],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Rainy Days"] // optional
      };
    return (
        <LineChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
/>
    )
}

export default Chart;