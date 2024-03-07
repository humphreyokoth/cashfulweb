import { AppShell, Button, Group, Text } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserAccountData,getAuthToken, } from '../utils/api';

const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuthData = async () => {
      try {
        
        const token = getAuthToken();

       
        if (token) {
          const userData = await fetchUserAccountData(token);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error fetching auth data:', error);
        setIsAuthenticated(false);
      }
    };

    fetchAuthData();
  }, []);

  const handleLogout = () => {
   
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AppShell>
      <AppShell.Brand>
        <Text>Cashful</Text>
      </AppShell.Brand>
      <AppShell.Control align="end">
        <Group>
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/account-dashboard">Dashboard</Link>
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/payment-configuration">Payment Configuration</Link>
            </>
          )}
        </Group>
      </AppShell.Control>
    </AppShell>
  );
};

export default Navigation;