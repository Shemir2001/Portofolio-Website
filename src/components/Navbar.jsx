import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'box-shadow 0.3s ease',
          boxShadow: scrolled ? 'var(--shadow)' : 'none',
        }}
      >
        <div
          className="section-container"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'var(--text)',
              letterSpacing: '-0.5px',
            }}
            whileHover={{ scale: 1.05 }}
          >
            SHEMIR<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.a>

          {/* Desktop Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  position: 'relative',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  color:
                    activeSection === link.href.slice(1)
                      ? 'var(--accent)'
                      : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease',
                }}
                whileHover={{ color: 'var(--accent)' }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '3px',
                      borderRadius: '2px',
                      background: 'var(--accent)',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <IconButton
                onClick={toggleTheme}
                sx={{
                  color: 'var(--accent)',
                  ml: 1,
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </motion.div>
          </div>

          {/* Mobile Buttons */}
          <div className="mobile-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <IconButton onClick={toggleTheme} sx={{ color: 'var(--accent)' }}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </motion.div>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: 'var(--text)' }}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'var(--surface)',
            borderLeft: '1px solid var(--border)',
            padding: '1.5rem',
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)' }}>
            Menu
          </span>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'var(--text)' }}>
            <CloseIcon />
          </IconButton>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.08, ease: 'easeOut' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                padding: '1rem 1.25rem',
                textDecoration: 'none',
                color:
                  activeSection === link.href.slice(1)
                    ? 'var(--accent)'
                    : 'var(--text)',
                fontWeight: 500,
                fontSize: '1.05rem',
                borderRadius: '12px',
                background:
                  activeSection === link.href.slice(1)
                    ? 'var(--accent-glow)'
                    : 'transparent',
                transition: 'background 0.3s ease',
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
          }}
        >
          © 2025 Shemir Ahmed Butt
        </div>
      </Drawer>

      {/* Responsive styles */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
