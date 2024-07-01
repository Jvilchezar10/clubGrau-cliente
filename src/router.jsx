// src/router.jsx
import { Routes, Route } from 'react-router-dom';
import ImageGrid from './components/ImageGrid';
import ImageDetails from './components/ImageDetails';
import AppointmentForm from './components/AppointmentForm';
import Confirmation from './components/Confirmation';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<ImageGrid />} />
    <Route path="/details/:id" element={<ImageDetails />} />
    <Route path="/appointment" element={<AppointmentForm />} />
    <Route path="/confirmation" element={<Confirmation />} />
  </Routes>
);

export default AppRouter;
