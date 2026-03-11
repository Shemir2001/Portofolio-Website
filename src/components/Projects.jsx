import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

import ecomm from '../assets/e-commece.png';
import job from '../assets/job.png';
import portofolio from '../assets/portofolio.png';

const projects = [
  {
    title: 'Fully Featured Instutive E-Commerce Store with Admin Dashboard',
    description:
      'Full-stack e-commerce solution with real-time inventory management, Stripe payment processing, and a responsive storefront.',
    tech: ['NEXT.JS', 'Node.js', 'MongoDB', 'Stripe'],
    image: ecomm,
    github: 'https://github.com/Shemir2001/mobile-bazar',
    live: 'https://mobileacessoriesbazar.vercel.app/',
  },
  {
    title: 'AI Powered Job & Scholarship Platform with enriched Fully Featured Admin Dashboard',
    description:
      'AI-powered platform connecting job seekers with opportunities and top-tier universities, featuring smart search and application tracking.',
    tech: ['Next.js', 'React.js', 'Job API'],
    image: job,
    github: 'https://github.com/Shemir2001/job-vision',
    live: 'https://job-vision-omega.vercel.app/',
  },
  {
    title: 'Dakhla Web Application',
    description:
      'An online platform with same functionality and features like indeed.',
    tech: ['Node.js', 'Next.js', 'React.js', 'PostgreSQL'],
    image: portofolio,
    github: 'https://github.com/Shemir2001/GAP',
    live: 'https://dakhla-five.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the projects I&apos;ve built recently
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className="card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Image with overlay */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '200px',
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Action buttons shown at top-right */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      display: 'flex',
                      gap: '0.5rem',
                    }}
                  >
                    <Tooltip title="View Code" arrow>
                      <IconButton
                        href={project.github}
                        target="_blank"
                        size="small"
                        sx={{
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          backdropFilter: 'blur(4px)',
                          '&:hover': {
                            background: 'var(--accent)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Live Demo" arrow>
                      <IconButton
                        href={project.live}
                        target="_blank"
                        size="small"
                        sx={{
                          background: 'rgba(0,0,0,0.6)',
                          color: '#fff',
                          backdropFilter: 'blur(4px)',
                          '&:hover': {
                            background: 'var(--accent)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <LaunchIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div
                    style={{
                      marginTop: 'auto',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: 'var(--accent-glow)',
                          color: 'var(--accent)',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 500,
                          fontSize: '0.7rem',
                          height: '24px',
                          border: '1px solid transparent',
                          '&:hover': { borderColor: 'var(--accent)' },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
