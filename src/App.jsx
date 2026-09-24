import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import ParticleField from './components/ParticleField';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-stone-50 text-gray-700 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-stone-200/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-slate-100/30 rounded-full blur-[100px] pointer-events-none z-0" />
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10 pt-20 pb-12">
        <div key={location.pathname} className="page-enter">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-stone-200 py-8 text-center">
        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} David Andre Vite Mijangos — Engineered with passion.
        </p>
      </footer>
    </div>
  );
}
