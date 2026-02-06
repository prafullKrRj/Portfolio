import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import styles from '../App.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  'Topic-first roadmap generation with offline persistence.',
  'Structured learning tracks that adapt to available time.',
  'Exportable roadmaps for quick sharing and revisions.'
];

export default function RoadmapCreator() {
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
            <p className={styles.cardEyebrow}>App Portfolio</p>
            <h1 className={styles.sectionHeading}>Roadmap Creator</h1>
            <p className={styles.pageSubheading}>
              A clean planning surface for learners who want structured paths without noisy templates.
            </p>
          </div>
          <a
            href="/apps/roadmapcreator/privacyPolicy.html"
            className={styles.secondaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
            <ExternalLink size={18} />
          </a>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>What it delivers</h2>
          <ul className={styles.bulletList}>
            {features.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Status</h2>
          <p className={styles.mutedText}>Currently polishing the next iteration of the roadmap builder UX.</p>
        </motion.section>
      </div>
    </main>
  );
}
