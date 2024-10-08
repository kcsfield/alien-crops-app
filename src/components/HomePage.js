import React from 'react';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const HomePage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center" style={{ color: FOREST_GREEN }}>
      Welcome to AlienCrops
    </h2>
    <p className="text-center text-xl">
      Revolutionizing agriculture with AI-driven predictions for optimal crop management.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
            Advanced Weather Analysis
          </h3>
        </div>
        <div>
          <p>Cutting-edge predictions using state-of-the-art LSTM neural networks.</p>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
            Precision Soil Moisture Forecasting
          </h3>
        </div>
        <div>
          <p>Innovative algorithms to forecast soil conditions for optimal alien crop growth.</p>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;