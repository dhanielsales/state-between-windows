import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './pages/context';
import { State } from './pages/state';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/context" element={<Context />} />
        <Route path="/state" element={<State />} />
        <Route path="*" element={<Navigate to="/state" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
