import React, { useState } from 'react';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center" style={{ color: FOREST_GREEN }}>
        {isLogin ? 'Log In to AlienCrops' : 'Sign Up for AlienCrops'}
      </h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <input type="password" placeholder="Password" className="w-full border rounded px-3 py-2" />
        {!isLogin && (
          <input type="password" placeholder="Confirm Password" className="w-full border rounded px-3 py-2" />
        )}
        <button className="w-full px-4 py-2 rounded text-white" style={{ backgroundColor: DEEP_ORANGE }}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      <div className="text-center">
        <button 
          onClick={() => setIsLogin(!isLogin)} 
          className="text-blue-500 hover:text-blue-700"
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Log In'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;