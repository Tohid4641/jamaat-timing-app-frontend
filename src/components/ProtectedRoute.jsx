import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.user.user.userInfo);

  if (!user) {
    // Redirect to sign-in if the user is not logged in
    return <Navigate to="/signIn" />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect to home if the user does not have the required role
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;