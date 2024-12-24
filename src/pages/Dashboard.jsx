import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
        <button
          onClick={handleLogout}
          className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
