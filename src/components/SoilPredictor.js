import React, { useState, useEffect } from 'react';

function SoilPredictor() {
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockData = { moisture: Math.random() * 100 };
      setSoilMoisture(mockData.moisture);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading soil data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Soil Moisture Prediction</h2>
      <p>Predicted soil moisture: {soilMoisture.toFixed(2)}%</p>
    </div>
  );
}

export default SoilPredictor;
