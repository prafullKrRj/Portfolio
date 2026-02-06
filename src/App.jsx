import { Link, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/Home';
import Codeforcesly from './pages/Codeforcesly';
import RoadmapCreator from './pages/RoadmapCreator';
import CueSight from './pages/CueSight';
import ProjectDetail from './pages/ProjectDetail';

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/#projects', anchor: true },
    { label: 'Background', to: '/#background', anchor: true },
    { label: 'Stats', to: '/#stats', anchor: true },
    { label: 'Apps', to: '/#apps', anchor: true }
];

const SiteNav = () => (
    <header className={styles.navBar}>
        <div className={styles.navContent}>
            <Link to="/" className={styles.navLogo}>Prafull Kumar</Link>
            <nav className={styles.navLinks}>
                {navItems.map(item => item.anchor ? (
                    <a key={item.label} href={item.to} className={styles.navLink}>
                        {item.label}
                    </a>
                ) : (
                    <Link key={item.label} to={item.to} className={styles.navLink}>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
);

const NotFound = () => (
    <main className={styles.page}>
        <div className={styles.contentWrap}>
            <div className={styles.simpleCard}>
                <h1 className={styles.sectionHeading}>Page not found</h1>
                <p className={styles.mutedText}>Return to the main portfolio.</p>
                <Link to="/" className={styles.primaryButton}>Back to home</Link>
            </div>
        </div>
    </main>
);

export default function App() {
    return (
        <div className={styles.appShell}>
            <SiteNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/apps/codeforcesly/*" element={<Codeforcesly />} />
                <Route path="/apps/roadmapcreator/*" element={<RoadmapCreator />} />
                <Route path="/beproject/*" element={<CueSight />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
