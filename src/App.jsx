import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RegisterMasjid from './pages/RegisterMasjid';
import UpdateMasjidTiming from './pages/UpdateMasjidTiming';
import ForgotPassword from './pages/ForgotPassword';
import UpdateMasjidTimingForAdmin from './pages/UpdateMasjidTimingForAdmin';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useSelector((state) => state.user.user.userInfo);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home onOpenSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} onCloseSidebar={() => setIsSidebarOpen(false)} />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route
          path="/registerMasjid"
          element={
            <ProtectedRoute allowedRoles={['admin', 'superAdmin']}>
              <RegisterMasjid />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateMasjidTiming"
          element={
            <ProtectedRoute allowedRoles={['admin', 'superAdmin']}>
              <UpdateMasjidTiming />
            </ProtectedRoute>
          }
        />
        <Route
          path="/updateMasjidTimingAdmin"
          element={
            <ProtectedRoute allowedRoles={['admin', 'superAdmin']}>
              <UpdateMasjidTimingForAdmin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;