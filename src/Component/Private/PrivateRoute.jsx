import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ path, element }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/login" />;
}

export default PrivateRoute;
