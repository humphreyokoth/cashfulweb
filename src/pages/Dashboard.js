import Dashboard  from '../components/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const DashboardPage = () => {
  return (
    // <ProtectedRoute>
      <Dashboard />
    // </ProtectedRoute>
  );
};

export default DashboardPage;