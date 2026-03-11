import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import AnimatedGlobe from './AnimatedGlobe';

const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'visible',
        paddingTop: 'var(--nav-height)',
        paddingBottom: '5rem',
      }}
    >
      {/* Small floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${6 + i * 4}px`,
            height: `${6 + i * 4}px`,
            top: `${15 + i * 16}%`,
            left: `${8 + i * 18}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${7 + i * 2}s`,
          }}
        />
      ))}

      <div className="section-container" style={{ width: '100%' }}>
        <div className="hero-layout">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-text"
          >
            {/* Greeting chip */}
            <motion.div variants={itemVariants}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  marginBottom: '1.5rem',
                }}
              >
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1rem',
                color: 'var(--text)',
              }}
            >
              Shemir Ahmed{' '}
              <span className="gradient-text">Butt</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                marginBottom: '1rem',
              }}
            >
              Full Stack{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}></span>{' '}
              Developer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                maxWidth: '500px',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              I craft exceptional digital experiences through clean code, innovative
              solutions, and cutting-edge technologies. Let&apos;s build something
              amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch <EmailIcon sx={{ fontSize: 20 }} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Animated Globe */}
          <motion.div
            className="hero-globe"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          >
            <AnimatedGlobe />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDownwardIcon sx={{ color: 'var(--accent)', fontSize: 22 }} />
        </motion.div>
      </motion.div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 2rem;
          min-height: calc(100vh - var(--nav-height));
        }
        .hero-text {
          position: relative;
          z-index: 2;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .hero-text h1 {
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .hero-text p {
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        .hero-globe {
          position: relative;
          width: 100%;
          height: 500px;
        }
        @media (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 0.5rem;
            min-height: auto;
            padding: 1.5rem 0 3rem;
          }
          .hero-text {
            order: 1;
            padding: 0 0.5rem;
          }
          .hero-text > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-text h1 {
            font-size: 2rem !important;
          }
          .hero-text p {
            font-size: 0.9rem !important;
            max-width: 100% !important;
            padding: 0 0.25rem;
          }
          .hero-globe {
            order: 2;
            height: 300px;
          }
        }
        @media (max-width: 480px) {
          .hero-text h1 {
            font-size: 1.6rem !important;
          }
          .hero-text p {
            font-size: 0.85rem !important;
          }
          .hero-globe {
            height: 250px;
          }
        }
        @media (max-width: 360px) {
          .hero-text h1 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
