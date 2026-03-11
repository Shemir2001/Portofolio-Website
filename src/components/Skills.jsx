import { motion } from 'framer-motion';
import Chip from '@mui/material/Chip';
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiPython,
  SiJavascript,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGitAlt /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              custom={catIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                {/* Category header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '28px',
                      borderRadius: '2px',
                      background: 'linear-gradient(to bottom, var(--accent), var(--accent-light))',
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--text)',
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.15 + i * 0.06 }}
                    >
                      <Chip
                        icon={
                          <span
                            style={{
                              fontSize: '1rem',
                              display: 'flex',
                              alignItems: 'center',
                              color: 'var(--accent)',
                            }}
                          >
                            {skill.icon}
                          </span>
                        }
                        label={skill.name}
                        sx={{
                          background: 'var(--bg)',
                          color: 'var(--text)',
                          border: '1px solid var(--border)',
                          fontFamily: 'Poppins, sans-serif',
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          padding: '0.2rem 0.15rem',
                          height: 'auto',
                          '& .MuiChip-icon': {
                            marginLeft: '8px',
                          },
                          '&:hover': {
                            borderColor: 'var(--accent)',
                            background: 'var(--accent-glow)',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
