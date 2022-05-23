import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './pages/context';
import { Home } from './pages/home';
import { State } from './pages/state';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/context" element={<Context />} />
        <Route path="/state" element={<State />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
