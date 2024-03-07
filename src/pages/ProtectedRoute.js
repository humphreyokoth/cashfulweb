import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { fetchUserAccountData,getAuthToken } from '../utils/api';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        // Assuming you have a function to retrieve the user token
        const token = getAuthToken();

        // If token is available, fetch user account data
        if (token) {
          const userData = await fetchUserAccountData(token);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching auth data:', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;