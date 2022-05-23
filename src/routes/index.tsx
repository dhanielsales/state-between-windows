import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Cart } from '../modules/Cart';
import { Catalog } from '../modules/Catalog';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<Navigate to="/cart" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
