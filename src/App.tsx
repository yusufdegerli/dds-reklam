import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import References from './pages/References';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import StudioPage from './pages/Studio';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Studio Route - MainLayout Dışında Olmalı */}
        <Route path="/studio/*" element={<StudioPage />} />

        {/* Diğer Sayfalar - MainLayout İçinde */}
        <Route
          path="*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/references" element={<References />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;