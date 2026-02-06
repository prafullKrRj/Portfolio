import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import styles from '../App.module.css';
import { projects } from '../data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(item => item.id === id);

  if (!project) {
    return (
      <main className={styles.page}>
        <div className={styles.contentWrap}>
          <div className={styles.simpleCard}>
            <h1 className={styles.sectionHeading}>Project not found</h1>
            <p className={styles.mutedText}>Return to the portfolio home.</p>
            <Link to="/" className={styles.primaryButton}>Back to home</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.contentWrap}>
        <motion.section
          className={styles.pageHeader}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div>
            <p className={styles.cardEyebrow}>Deep Dive</p>
            <h1 className={styles.sectionHeading}>{project.title}</h1>
            <p className={styles.pageSubheading}>{project.subtitle}</p>
          </div>
          <a
            href={project.repository}
            className={styles.primaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
            <ArrowUpRight size={18} />
          </a>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.heroPlaceholder}>
            <span>Hero Image Placeholder</span>
          </div>
          <p className={styles.projectSummary}>{project.summary}</p>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Technical Stack</h2>
          <div className={styles.tagRow}>
            {project.stack.map(item => (
              <span key={item} className={styles.tag}>{item}</span>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Architecture</h2>
          <ul className={styles.bulletList}>
            {project.architecture.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>
      </div>
    </main>
  );
}
