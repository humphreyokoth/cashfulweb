import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import PaymentConfiguration from './pages/PaymentConfiguration';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <Router>
       <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment-configuration" element={<PaymentConfiguration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
};

export default App;
