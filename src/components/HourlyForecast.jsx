import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  const displayedHours = hourlyData.slice(0, 24);

  return (
    <HourlyForecastWrapper>
      {displayedHours.map((item, index) => (
        <HourlyItem key={index}>
          <div>{item.hour}</div>
          <div>{item.temperature}°C</div>
          <div>{item.description}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;