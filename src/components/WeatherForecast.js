import React, { useState, useEffect } from 'react';

function WeatherForecast() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = {
        temperature: Math.round(Math.random() * 30),
        humidity: Math.round(Math.random() * 100),
        description: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
      };
      setForecast(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Weather Forecast</h2>
      <p>Temperature: {forecast.temperature}°C</p>
      <p>Humidity: {forecast.humidity}%</p>
      <p>Description: {forecast.description}</p>
    </div>
  );
}

export default WeatherForecast;
