import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const contactItems = [
  {
    icon: <EmailIcon sx={{ fontSize: 24 }} />,
    label: 'Email',
    value: 'shemir.butt2001@gmail.com',
    href: 'mailto:shemir.butt2001@gmail.com',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 24 }} />,
    label: 'Phone',
    value: '+92 327 9949039',
    href: 'tel:+923279949039',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
    label: 'Location',
    value: 'Pakistan',
    href: null,
  },
];

const socials = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Shemir2001/' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/' },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3
              className="contact-heading"
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '1.25rem',
                lineHeight: 1.3,
              }}
            >
              Let&apos;s Work{' '}
              <span className="gradient-text">Together</span>
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Drop me a message and let&apos;s
              make it happen!
            </p>

            <motion.a
              href="mailto:shemir.butt2001@gmail.com"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <EmailIcon sx={{ fontSize: 20 }} />
              Send Email
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </motion.a>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {socials.map((s) => (
                <Tooltip key={s.label} title={s.label} arrow>
                  <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      href={s.href}
                      target="_blank"
                      sx={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        '&:hover': {
                          background: 'var(--accent)',
                          color: '#fff',
                          borderColor: 'var(--accent)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {s.icon}
                    </IconButton>
                  </motion.div>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="card accent-border-glow"
              style={{
                padding: '2rem',
                borderRadius: '20px',
              }}
            >
              <h4
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '1.5rem',
                }}
              >
                Contact Information
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          textDecoration: 'none',
                          color: 'var(--text)',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'var(--accent-glow)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent)',
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)',
                              marginBottom: '0.1rem',
                            }}
                          >
                            {item.label}
                          </div>
                          <div style={{
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}>
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                      >
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'var(--accent-glow)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent)',
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-muted)',
                              marginBottom: '0.1rem',
                            }}
                          >
                            {item.label}
                          </div>
                          <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text)' }}>
                            {item.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .contact-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .contact-heading {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
