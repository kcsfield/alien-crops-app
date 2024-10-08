import React from 'react';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const AboutPage = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold" style={{ color: FOREST_GREEN }}>
      About AlienCrops
    </h2>
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
          LSTM Model for Alien Soil Moisture Prediction
        </h3>
      </div>
      <div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Utilizes LSTM layers to capture temporal dependencies in alien world weather data</li>
          <li>Processes data in 3D format: (samples, timesteps, features)</li>
          <li>Predicts soil moisture levels based on historical alien weather patterns</li>
        </ul>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
          Advanced Model Training Process
        </h3>
      </div>
      <div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Trained for 10 epochs with a batch size of 16</li>
          <li>Uses Mean Squared Error (MSE) as the loss function</li>
          <li>Visualizes training and validation loss to ensure proper learning for alien environments</li>
        </ul>
      </div>
    </div>
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold" style={{ color: DEEP_ORANGE }}>
          SHAP Analysis for Extraterrestrial Model Interpretation
        </h3>
      </div>
      <div>
        <ul className="list-disc pl-5 space-y-2">
          <li>Employs SHAP (SHapley Additive exPlanations) for alien crop model interpretation</li>
          <li>Visualizes feature importance using color-coded dots</li>
          <li>Helps identify key factors influencing soil moisture predictions on alien planets</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutPage;