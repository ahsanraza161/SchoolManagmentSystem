import { Suspense } from 'react';
import { Outlet, Navigate, useRoutes, Routes, Route } from 'react-router-dom';

import DashboardLayout from '../layouts/dashboard';

import App from '../pages/app';
import Teacher from '../pages/teachers';
import Student from '../pages/Students';
import Login from '../pages/login';
import PageNotFound from '../pages/page-not-found';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: 'adminpanel',
      element: (
        <DashboardLayout>
          <Routes>
            <Route path="/dashboard" element={<App />} />
            <Route path="/teacher">
              <Suspense fallback={<p>Loading...</p>}>
                <Teacher />
              </Suspense>
              <Outlet /> 
            </Route>
            <Route path="/student" element={<Student />} />
          </Routes>
        </DashboardLayout>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/404',
      element: <PageNotFound />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}