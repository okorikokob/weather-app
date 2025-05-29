import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

// Weather icons based on condition
const weatherIcons = {
  clear: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  cloudy: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
  rain: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
  snow: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
  default: "https://cdn-icons-png.flaticon.com/512/3313/3313998.png",
};

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      // Step 1: Get coordinates from Open-Meteo Geocoding API
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Step 2: Get weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const { temperature, weathercode } = weatherData.current_weather;

      // Step 3: Determine icon
      let icon = weatherIcons.default;
      if (weathercode === 0) icon = weatherIcons.clear;
      else if ([1, 2, 3].includes(weathercode)) icon = weatherIcons.cloudy;
      else if ([51, 53, 61, 63].includes(weathercode)) icon = weatherIcons.rain;
      else if ([71, 73, 75].includes(weathercode)) icon = weatherIcons.snow;

      // Step 4: Set result
      setResult({
        city: name,
        temp: temperature,
        icon,
      });

      setError("");
    } catch (err) {
      setResult(null);
      setError("❌ Error fetching weather data");
      console.error(err);
    }
  };

  return (
    <AppContainer>
      <Card>
        <Title>🌤️ Weather Point</Title>

        <InputWrapper>
          <label htmlFor="city">City:</label>
          <Input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          < StyledButton  onClick={getWeather}>Search</ StyledButton >
        </InputWrapper>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {result && (
          <ResultBox>
            <CityName>{result.city}</CityName>
            <Temperature>
              <WeatherIcon src={result.icon} alt="weather" />
              {result.temp}°C
            </Temperature>
          </ResultBox>
        )}

       
      </Card>
    </AppContainer>
  );
};

export default WeatherApp;







const AppContainer = styled.div`
  min-height: 100vh;
  background: #cfe3e9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
  color: #023336;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 2px solid #4da674;
  border-radius: 8px;
  font-size: 16px;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #4da674;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #3c8b5e;
  }
`;

const ResultBox = styled.div`
  margin-top: 30px;
`;

const CityName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  gap: 10px;
`;

const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
`;
