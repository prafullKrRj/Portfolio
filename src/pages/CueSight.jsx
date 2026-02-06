import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Chart } from 'chart.js/auto';
import styles from '../App.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const workflowSteps = [
  {
    id: 'capture',
    title: '1. Data Capture',
    icon: '📷',
    description:
      'A lightweight camera module captures the wearer’s perspective and streams it securely to the companion phone.'
  },
  {
    id: 'processing',
    title: '2. ML Processing',
    icon: '🧠',
    description:
      'On-device ML models interpret facial cues and emotion signals without sending video to the cloud.'
  },
  {
    id: 'feedback',
    title: '3. Feedback Delivery',
    icon: '🔔',
    description:
      'Users receive discreet prompts through audio, haptics, or a subtle watch overlay.'
  },
  {
    id: 'insights',
    title: '4. Analytics & Insights',
    icon: '📊',
    description:
      'Personal analytics highlight emotional patterns and confidence progress over time.'
  }
];

const weeklySeries = {
  current: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [2.8, 3.1, 3.5, 3.2, 2.9, 3.8, 4.1],
    color: '#60a5fa'
  },
  previous: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [3.2, 3.0, 2.7, 3.1, 3.3, 3.5, 3.4],
    color: '#22c55e'
  }
};

export default function CueSight() {
  const [activeStep, setActiveStep] = useState(workflowSteps[0].id);
  const [activeWeek, setActiveWeek] = useState('current');
  const donutRef = useRef(null);
  const lineRef = useRef(null);
  const donutChart = useRef(null);
  const lineChart = useRef(null);

  useEffect(() => {
    if (!donutRef.current || !lineRef.current) return;

    donutChart.current = new Chart(donutRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Positive', 'Neutral', 'Curious', 'Concerned'],
        datasets: [
          {
            data: [45, 35, 15, 5],
            backgroundColor: ['#22c55e', '#60a5fa', '#f59e0b', '#ef4444'],
            borderColor: '#09090b',
            borderWidth: 4,
            hoverOffset: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#e2e8f0', padding: 16 }
          }
        }
      }
    });

    lineChart.current = new Chart(lineRef.current, {
      type: 'line',
      data: {
        labels: weeklySeries.current.labels,
        datasets: [
          {
            label: 'Confidence Level',
            data: weeklySeries.current.values,
            borderColor: weeklySeries.current.color,
            backgroundColor: 'rgba(96, 165, 250, 0.12)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: weeklySeries.current.color,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#94a3b8' },
            grid: { color: 'rgba(148, 163, 184, 0.2)' }
          },
          x: {
            ticks: { color: '#94a3b8' },
            grid: { display: false }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });

    return () => {
      donutChart.current?.destroy();
      lineChart.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!lineChart.current) return;

    const series = weeklySeries[activeWeek];
    lineChart.current.data.labels = series.labels;
    lineChart.current.data.datasets[0].data = series.values;
    lineChart.current.data.datasets[0].borderColor = series.color;
    lineChart.current.data.datasets[0].pointBackgroundColor = series.color;
    lineChart.current.update();
  }, [activeWeek]);

  const activeWorkflow = workflowSteps.find(step => step.id === activeStep);

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
            <p className={styles.cardEyebrow}>Interactive Report</p>
            <h1 className={styles.sectionHeading}>CueSight</h1>
            <p className={styles.pageSubheading}>
              A privacy-first assistive concept that transforms visual social cues into confident, real-time guidance.
            </p>
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>How It Works</h2>
          <div className={styles.workflowGrid}>
            <div className={styles.workflowSteps}>
              {workflowSteps.map(step => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={`${styles.workflowButton} ${activeStep === step.id ? styles.workflowActive : ''}`}
                >
                  <span>{step.icon}</span>
                  <span>{step.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.workflowDetails}>
              <span className={styles.workflowIcon}>{activeWorkflow.icon}</span>
              <div>
                <h3>{activeWorkflow.title}</h3>
                <p>{activeWorkflow.description}</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Analytics</h2>
          <div className={styles.analyticsGrid}>
            <div className={styles.chartCard}>
              <h3>Daily Emotion Distribution</h3>
              <div className={styles.chartContainer}>
                <canvas ref={donutRef}></canvas>
              </div>
            </div>
            <div className={styles.chartCard}>
              <h3>Weekly Interaction Patterns</h3>
              <div className={styles.chartContainer}>
                <canvas ref={lineRef}></canvas>
              </div>
              <div className={styles.chartActions}>
                <button
                  type="button"
                  className={activeWeek === 'current' ? styles.primaryButton : styles.secondaryButton}
                  onClick={() => setActiveWeek('current')}
                >
                  This Week
                </button>
                <button
                  type="button"
                  className={activeWeek === 'previous' ? styles.primaryButton : styles.secondaryButton}
                  onClick={() => setActiveWeek('previous')}
                >
                  Last Week
                </button>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionCard}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={styles.sectionHeading}>Privacy-First by Design</h2>
          <p className={styles.mutedText}>
            All processing stays on-device. No facial data or video is stored or transmitted, and only anonymized emotion
            events are recorded for personal insights.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
