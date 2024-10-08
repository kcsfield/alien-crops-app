export const fetchSoilData = async () => {
  // Mock data for now
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        moisture: Math.round(Math.random() * 100),
        ph: (Math.random() * (8 - 5) + 5).toFixed(1),
        nutrients: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)]
      });
    }, 1000);
  });
};

export const fetchWeatherData = async () => {
  // Mock data for now
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        temperature: Math.round(Math.random() * 30),
        humidity: Math.round(Math.random() * 100),
        description: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
      });
    }, 1000);
  });
};