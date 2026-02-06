import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';
import { projects } from '../data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const profile = {
  name: 'Prafull Kumar',
  tagline: 'Android Developer & Software Engineer',
  summary:
    'I build Android-first products with clean architecture, data-driven UX, and scalable integrations. My focus is on reliable mobile systems, thoughtful performance tuning, and pragmatic backend tooling that supports real users.',
  email: 'prafullkumar384@gmail.com',
  links: {
    github: 'https://github.com/prafullKrRj',
    linkedin: 'https://www.linkedin.com/in/prafull-kumar-rajput/',
    gplayDeveloper: 'https://play.google.com/store/apps/developer?id=Prafull+Kumar',
    resume: './Resume.pdf'
  }
};

const background = {
  role: 'Focus Areas',
  company: 'Android-first apps, backend services, and data tooling',
  period: 'Independent builds & continuous learning',
  highlights: [
    'Android-first product engineering with Jetpack Compose and scalable architecture.',
    'API integrations and backend services that support mobile experiences.',
    'Performance tuning and accessibility checks to keep UX responsive.'
  ],
  education: {
    institution: 'Army Institute of Technology, Pune',
    degree: 'Bachelor of Engineering, Computer Engineering',
    note: 'Academic Program',
    gpa: 'Current GPA: 8.67/10'
  }
};

const skills = {
  backend: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' }
  ],
  mobile: [
    { name: 'Android', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
    { name: 'Kotlin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
    {
      name: 'Jetpack Compose',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg'
    }
  ],
  cloud: [
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' }
  ]
};

const contributionLevels = [
  0, 1, 2, 1, 0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 2, 1, 0, 1, 2, 3, 1, 0, 2, 3, 4, 2, 1, 0,
  1, 2, 1, 0, 2, 3, 1, 2, 3, 4, 2, 1, 0, 1, 2, 3, 2, 1, 0, 2, 3, 4, 3, 2, 1, 0, 1, 2
];

const languageStats = [
  { label: 'Kotlin', value: 42 },
  { label: 'Python', value: 24 },
  { label: 'Java', value: 18 },
  { label: 'TypeScript', value: 16 }
];

const leetcodeProfileUrl = 'https://leetcode.com/prafullkumar/';

const screenshotProjects = [
  { name: 'Codeforcesly', path: '/apps/codeforcesly' }
];

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.contentWrap}>
        <motion.section
          className={styles.heroSection}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <p className={styles.heroEyebrow}>Android Developer Portfolio</p>
            <h1 className={styles.heroTitle}>{profile.name}</h1>
            <p className={styles.heroSubtitle}>{profile.tagline}</p>
          </div>
          <p className={styles.heroSummary}>{profile.summary}</p>
          <div className={styles.heroActions}>
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              View Resume
              <ArrowUpRight size={18} />
            </a>
            <div className={styles.heroLinks}>
              <a className={styles.iconButton} href={profile.links.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </a>
              <a className={styles.iconButton} href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a className={styles.iconButton} href={profile.links.gplayDeveloper} target="_blank" rel="noopener noreferrer">
                <Smartphone size={18} />
              </a>
              <a className={styles.iconButton} href={`mailto:${profile.email}`}>
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.section>

        <div className={styles.bentoGrid}>
          <motion.section
            id="projects"
            className={`${styles.bentoCard} ${styles.bentoWide}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className={styles.cardHeaderRow}>
              <div>
                <p className={styles.cardEyebrow}>Deep Dives</p>
                <h2 className={styles.sectionHeading}>Flagship Repositories</h2>
              </div>
              <Link to="/project/propvault" className={styles.textLink}>
                Explore all
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className={styles.projectGrid}>
              {projects.map(project => (
                <Link key={project.id} to={`/project/${project.id}`} className={styles.projectCard}>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                    <p className={styles.projectSummary}>{project.summary}</p>
                  </div>
                  <div className={styles.tagRow}>
                    {project.stack.slice(0, 3).map(item => (
                      <span key={item} className={styles.tag}>{item}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="stats"
            className={`${styles.bentoCard} ${styles.bentoTall}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.cardEyebrow}>Live Stats</p>
            <h2 className={styles.sectionHeading}>Performance Snapshot</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statTile}>
                <div className={styles.statHeader}>
                  <h3>GitHub</h3>
                  <span className={styles.mutedText}>Contribution pulse</span>
                </div>
                <div className={styles.contributionGrid}>
                  {contributionLevels.map((level, index) => (
                    <span
                      key={`${level}-${index}`}
                      className={`${styles.contributionCell} ${styles[`contributionLevel${level}`]}`}
                    />
                  ))}
                </div>
                <div className={styles.languageList}>
                  {languageStats.map(language => (
                    <div key={language.label} className={styles.languageRow}>
                      <span>{language.label}</span>
                      <div className={styles.languageBar}>
                        <span style={{ width: `${language.value}%` }}></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.statTile}>
                <div className={styles.statHeader}>
                  <h3>LeetCode</h3>
                  <span className={styles.mutedText}>Live profile window</span>
                </div>
                <div className={styles.leetcodeEmbed}>
                  <iframe
                    className={styles.leetcodeFrame}
                    title="LeetCode profile for prafullkumar"
                    src={leetcodeProfileUrl}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <a
                    className={styles.textLink}
                    href={leetcodeProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open LeetCode Profile
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="skills"
            className={styles.bentoCard}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.cardEyebrow}>Skills</p>
            <h2 className={styles.sectionHeading}>Core Stack</h2>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillTitle}>Backend</h3>
              <div className={styles.tagRow}>
                {skills.backend.map(skill => (
                  <span key={skill.name} className={styles.skillTag}>
                    <img className={styles.skillLogo} src={skill.logo} alt={`${skill.name} logo`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillTitle}>Mobile</h3>
              <div className={styles.tagRow}>
                {skills.mobile.map(skill => (
                  <span key={skill.name} className={styles.skillTag}>
                    <img className={styles.skillLogo} src={skill.logo} alt={`${skill.name} logo`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <h3 className={styles.skillTitle}>Cloud & DB</h3>
              <div className={styles.tagRow}>
                {skills.cloud.map(skill => (
                  <span key={skill.name} className={styles.skillTag}>
                    <img className={styles.skillLogo} src={skill.logo} alt={`${skill.name} logo`} loading="lazy" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="background"
            className={styles.bentoCard}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.cardEyebrow}>Profile</p>
            <h2 className={styles.sectionHeading}>Focus & Education</h2>
            <div className={styles.backgroundBlock}>
              <div>
                <h3 className={styles.backgroundTitle}>{background.role}</h3>
                <p className={styles.backgroundMeta}>{background.company}</p>
                <p className={styles.backgroundMeta}>{background.period}</p>
              </div>
              <ul className={styles.bulletList}>
                {background.highlights.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.backgroundBlock}>
              <h3 className={styles.backgroundTitle}>{background.education.institution}</h3>
              <p className={styles.backgroundMeta}>{background.education.degree}</p>
              <p className={styles.backgroundMeta}>{background.education.note}</p>
              <p className={styles.mutedText}>{background.education.gpa}</p>
            </div>
          </motion.section>

          <motion.section
            id="apps"
            className={styles.bentoCard}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className={styles.cardEyebrow}>Apps</p>
            <h2 className={styles.sectionHeading}>Product Screens</h2>
            <div className={styles.appLinks}>
              <Link to="/apps/codeforcesly" className={styles.appLink}>Codeforcesly</Link>
              <Link to="/apps/roadmapcreator" className={styles.appLink}>Roadmap Creator</Link>
              <Link to="/beproject" className={styles.appLink}>CueSight Report</Link>
            </div>
            <div className={styles.screenshotList}>
              <p className={styles.mutedText}>Projects with screenshots:</p>
              <ul className={styles.bulletList}>
                {screenshotProjects.map(project => (
                  <li key={project.name}>
                    <Link to={project.path} className={styles.textLink}>
                      {project.name}
                      <ArrowUpRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        <footer className={styles.footer}>
          <p>Designed & built with React, router-driven sections, and a minimalist Bento layout.</p>
          <p>Focused on building accessible mobile experiences with thoughtful system design.</p>
        </footer>
      </div>
    </main>
  );
}
