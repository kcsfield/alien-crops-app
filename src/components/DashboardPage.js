import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchSoilData, fetchWeatherData } from '../api';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const DashboardPage = () => {
  const [location, setLocation] = useState('');
  const [soilData, setSoilData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState('season');

  useEffect(() => {
    const fetchData = async () => {
      const soil = await fetchSoilData();
      const weather = await fetchWeatherData();
      setSoilData(soil);
      setWeatherData(weather);
    };
    fetchData();
  }, []);

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    console.log(`Fetching data for location: ${location}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'season':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Current Growing Season
              </h3>
            </div>
            <div>
              <p>Information about the current alien growing season would be displayed here.</p>
            </div>
          </div>
        );
      case 'crops':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Crop Status
              </h3>
            </div>
            <div>
              <p>Details about various alien crops and their current growth status would be shown here.</p>
            </div>
          </div>
        );
      case 'weather':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Extraterrestrial Weather Forecast
              </h3>
            </div>
            <div>
              {weatherData ? (
                <div>
                  <p>Temperature: {weatherData.temperature}°C</p>
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Description: {weatherData.description}</p>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[weatherData]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="temperature" stroke={DEEP_ORANGE} />
                      <Line type="monotone" dataKey="humidity" stroke={FOREST_GREEN} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p>Loading weather data...</p>
              )}
            </div>
          </div>
        );
      case 'soil':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Soil Analysis
              </h3>
            </div>
            <div>
              {soilData ? (
                <div>
                  <p>Soil Moisture: {soilData.moisture}%</p>
                  <p>pH Level: {soilData.ph}</p>
                  <p>Nutrient Content: {soilData.nutrients}</p>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[soilData]}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="moisture" stroke={FOREST_GREEN} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p>Loading soil data...</p>
              )}
            </div>
          </div>
        );
      case 'pests':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Extraterrestrial Pest Monitor
              </h3>
            </div>
            <div>
              <p>Information about current alien pest threats and mitigation strategies would be displayed here.</p>
            </div>
          </div>
        );
      case 'diseases':
        return (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
                Alien Crop Disease Tracker
              </h3>
            </div>
            <div>
              <p>Details about potential alien crop diseases, their symptoms, and treatment options would be shown here.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold" style={{ color: FOREST_GREEN }}>
        AlienCrops Dashboard
      </h2>
      
      <form onSubmit={handleLocationSubmit} className="flex space-x-4">
        <input 
          type="text"
          placeholder="Enter your location" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)}
          className="flex-grow border rounded px-2 py-1"
        />
        <button type="submit" className="px-4 py-2 rounded text-white" style={{ backgroundColor: DEEP_ORANGE }}>
          Update Location
        </button>
      </form>

      <div>
        <div className="flex space-x-2 mb-4">
          {['season', 'crops', 'weather', 'soil', 'pests', 'diseases'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-gray-300' : 'bg-gray-200'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DashboardPage;