import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Home, FolderKanban, Briefcase, Cpu, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/experience', label: 'Experience', icon: Briefcase },
  { to: '/skills', label: 'Skills', icon: Cpu },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-stone-50/80 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
              <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center font-bold text-white text-sm tracking-tight shadow-md group-hover:shadow-lg group-hover:bg-violet-700 transition-all duration-300">
                DV
              </div>
              <span className="hidden sm:block font-semibold text-gray-900 text-sm tracking-wide">
                David Vite
              </span>
            </NavLink>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-violet-700 bg-violet-100 nav-active'
                        : 'text-stone-500 hover:text-gray-900 hover:bg-stone-100'
                    }`}
                  >
                    <Icon size={16} />
                    {link.label}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-stone-500 hover:text-gray-900 hover:bg-stone-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden bg-stone-50 border-l border-stone-200 shadow-xl transform transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-stone-200">
          <span className="font-semibold text-gray-900 text-sm">Navigation</span>
          <button
            className="p-2 rounded-lg text-stone-500 hover:text-gray-900 hover:bg-stone-100 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1 p-4 mt-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-violet-700 bg-violet-100'
                    : 'text-stone-600 hover:text-gray-900 hover:bg-stone-100'
                }`}
              >
                <Icon size={18} />
                {link.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
