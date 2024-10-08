import React from 'react';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const SignUpPage = () => (
  <div className="max-w-md mx-auto space-y-8">
    <h2 className="text-3xl font-bold text-center" style={{ color: FOREST_GREEN }}>
      Join AlienCrops
    </h2>
    <form className="space-y-4">
      <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
      <input type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />
      <input type="password" placeholder="Confirm Password" className="w-full border rounded px-3 py-2" />
      <button className="w-full px-4 py-2 rounded text-white" style={{ backgroundColor: DEEP_ORANGE }}>
        Sign Up
      </button>
    </form>
  </div>
);

export default SignUpPage;