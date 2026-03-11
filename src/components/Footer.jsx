import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  const socials = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: <EmailIcon />, label: 'Email', href: 'mailto:shemir.butt2001@gmail.com' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '2.5rem 0',
      }}
    >
      <div className="section-container">
        {/* Gradient line */}
        <div
          style={{
            width: '80px',
            height: '3px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, var(--accent), var(--accent-light))',
            margin: '0 auto 2rem',
          }}
        />

        {/* Social icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          {socials.map((s) => (
            <Tooltip key={s.label} title={s.label} arrow>
              <motion.div whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}>
                <IconButton
                  href={s.href}
                  target="_blank"
                  size="small"
                  sx={{
                    color: 'var(--text-muted)',
                    '&:hover': { color: 'var(--accent)' },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              </motion.div>
            </Tooltip>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            flexWrap: 'wrap',
          }}
        >
          © {new Date().getFullYear()} Shemir Ahmed Butt. Made with{' '}
          <FavoriteIcon sx={{ fontSize: 16, color: 'var(--accent)' }} /> in Pakistan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
