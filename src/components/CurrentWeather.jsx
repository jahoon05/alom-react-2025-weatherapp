import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>데이터 로딩 중입니다...</div>;
  }

  if (!weatherData || !weatherData.hourly) {
    return <div>날씨 데이터를 불러올 수 없습니다.</div>;
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const currentHourStr = `${year}-${month}-${day}T${hour}`;

  const index = weatherData.hourly.time.findIndex((t) =>
    t.startsWith(currentHourStr)
  );

  const temperature =
    index !== -1 ? weatherData.hourly.temperature_2m[index] : "N/A";
  const description =
    index !== -1
      ? getWeatherDescription(weatherData.hourly.weather_code[index])
      : "알 수 없음";

  // console.log("📅 현재 시간:", now);
  // console.log("🔍 시각 문자열:", currentHourStr);
  // console.log("🧭 찾은 인덱스:", index);

  return (
    <CurrentWeatherWrapper>
      <Temperature>{temperature}°C</Temperature>
      <WeatherCode>{description}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;