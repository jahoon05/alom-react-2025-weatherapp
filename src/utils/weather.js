export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData) return [];

  const { time, temperature_2m, weather_code } = weatherData.hourly;

  return time.map((timestamp, index) => ({
    time: timestamp, 
    hour: timestamp.split("T")[1], 
    temperature: temperature_2m[index], 
    weatherCode: weather_code[index],
    description: getWeatherDescription(weather_code[index]),
  }));
};

export const formatDailyData = (weatherData) => {
  if (!weatherData || !weatherData.daily) return [];

  const { time, temperature_2m_max, weather_code } = weatherData.daily;

  return time.map((date, index) => ({
    date,
    temperatureMax: temperature_2m_max?.[index] ?? null,
    weatherCode: weather_code[index],
    description: getWeatherDescription(weather_code[index]),
  }));
};