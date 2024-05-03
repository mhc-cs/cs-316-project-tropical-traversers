import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AccountProvider } from './app/context/AuthContext'; // Import AccountProvider
import LogIn from './app/login/page';
import ProfilePage from './app/driverProfilePage/page';

const App: React.FC = () => {
  return (
    <AccountProvider>
      <Router>
        <Routes>
          <Route path="./login/page" element={<LogIn />} />
          <Route path="./driverProfilePage/page" element={<ProfilePage />} />
        </Routes>
      </Router>
    </AccountProvider>
  );
};

export default App;
