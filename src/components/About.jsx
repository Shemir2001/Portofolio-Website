import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import shameer from '../assets/shameer.jpeg';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';

const stats = [
  { icon: <WorkIcon sx={{ fontSize: 28 }} />, value: '2+', label: 'Years Experience' },
  { icon: <CodeIcon sx={{ fontSize: 28 }} />, value: '10+', label: 'Projects Completed' },
  { icon: <SchoolIcon sx={{ fontSize: 28 }} />, value: 'BS CS', label: 'Computer Science' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about crafting digital experiences that make a difference
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="about-grid"
        >
          {/* Image */}
          <motion.div variants={leftVariants} style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              style={{
                position: 'relative',
                width: '280px',
                maxWidth: '100%',
                aspectRatio: '1',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow behind image */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, var(--accent), transparent, var(--accent))',
                  opacity: 0.6,
                  zIndex: 0,
                }}
              />
              <img
                src={shameer}
                alt="Shemir Ahmed Butt"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: '3px solid var(--border)',
                }}
              />
              {/* Decorative corner dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  zIndex: 2,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div variants={rightVariants}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--accent)',
              }}
            >
              Passionate Full Stack Developer
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '1rem',
                lineHeight: 1.8,
                fontSize: '0.95rem',
              }}
            >
              Versatile and detail-oriented Full Stack MERN Developer with hands-on
              experience in building modern and scalable web applications. Proficient in
              React, Next.js, Node.js, Express, and MongoDB, with a strong understanding
              of RESTful APIs, database design, and UI/UX principles.
            </p>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: 1.8,
                fontSize: '0.95rem',
              }}
            >
              Experienced in cloud deployment (AWS, Firebase) and version control with
              Git/GitHub. Adept at working in Agile environments, collaborating across
              cross-functional teams, and delivering high-quality software solutions.
            </p>

            {/* Stats */}
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card"
                  style={{
                    textAlign: 'center',
                    padding: '1.25rem 0.75rem',
                  }}
                >
                  <div style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 3rem;
          align-items: center;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
          .about-grid h3,
          .about-grid p {
            text-align: center;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
