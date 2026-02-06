import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from '../App.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const highlights = [
  'Profile snapshots with live rating and rank details.',
  'Contest tracking with upcoming and recent schedules.',
  'Problem discovery with focused visualization cues.'
];

export default function Codeforcesly() {
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadProfile = async () => {
      try {
        setStatus('loading');
        const response = await fetch('https://codeforces.com/api/user.info?handles=prafullKrRj', {
          signal: controller.signal
        });
        const data = await response.json();

        if (data.status !== 'OK') {
          throw new Error('Unable to load Codeforces profile.');
        }

        setProfile(data.result[0]);
        setStatus('success');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Live profile data is temporarily unavailable.');
          setStatus('error');
        }
      }
    };

    loadProfile();

    return () => controller.abort();
  }, []);

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
            <h1 className={styles.sectionHeading}>Codeforcesly</h1>
            <p className={styles.pageSubheading}>
              A companion experience for Codeforces competitors, built to surface ratings, contests, and problem discovery in one place.
            </p>
          </div>
          <div className={styles.headerActions}>
            <a
              href="https://github.com/prafullKrRj/CodeForcesly"
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
              <Github size={18} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.prafullkumar.codeforcesly"
              className={styles.secondaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Store Listing
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Product Highlights</h2>
          <ul className={styles.bulletList}>
            {highlights.map(item => (
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
          <h2 className={styles.sectionHeading}>Live Codeforces Snapshot</h2>
          <div className={styles.liveStatsRow}>
            {status === 'loading' && <p className={styles.mutedText}>Fetching profile data...</p>}
            {status === 'error' && <p className={styles.mutedText}>{error}</p>}
            {status === 'success' && profile && (
              <>
                <div>
                  <p className={styles.statNumber}>{profile.rating || '—'}</p>
                  <p className={styles.mutedText}>Current Rating</p>
                </div>
                <div>
                  <p className={styles.statNumber}>{profile.maxRating || '—'}</p>
                  <p className={styles.mutedText}>Peak Rating</p>
                </div>
                <div>
                  <p className={styles.statNumber}>{profile.rank || '—'}</p>
                  <p className={styles.mutedText}>Current Rank</p>
                </div>
                <div>
                  <p className={styles.statNumber}>{profile.contribution ?? '—'}</p>
                  <p className={styles.mutedText}>Contribution</p>
                </div>
              </>
            )}
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Screens</h2>
          <div className={styles.placeholderGrid}>
            <div className={styles.placeholderCard}>Mobile Screen</div>
            <div className={styles.placeholderCard}>Mobile Screen</div>
            <div className={styles.placeholderCard}>Tablet Layout</div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
