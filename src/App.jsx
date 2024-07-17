import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "./pages/landing"
import ProjectDetail from './pages/projectDetail';
import EventDetail from './pages/eventDetail';
import Contact from './pages/contact';
import GetInvolved from './pages/getInvolved';
import BlogDetail from './pages/blogDetail';
import Navbar from './components/hero/Navbar';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Landing /></>} />
          <Route path="/project/:projectId" element={<><Navbar/><ProjectDetail/></>} />
          <Route path="/event/:eventId" element={<><Navbar/><EventDetail/></>} />
          <Route path="/contact" element={<><Navbar/><Contact/></>} />
          <Route path="/get-involved" element={<><Navbar/><GetInvolved/></>} />
          <Route path="/blog/:id" element={<><Navbar/><BlogDetail/></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}