import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Layout from "./pages/layout/Layout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import type { JSX } from "react";
import './App.css'

function App(): JSX.Element {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route path="/layout" element={<Dashboard />} />
        </Route>
      </Route>

      {/* Not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
