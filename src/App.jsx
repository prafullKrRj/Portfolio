import React, {useEffect, useState} from 'react';
import {
    Award,
    BrainCircuit,
    Briefcase,
    Building,
    Cat,
    ChevronDown,
    Code,
    Download,
    Dumbbell,
    ExternalLink,
    FileText,
    Flame,
    GitCommit,
    Github,
    Linkedin,
    Mail,
    Ruler,
    School,
    Smartphone,
    Star,
    Target,
    Zap
} from 'lucide-react';
import styles from './App.module.css';

const portfolioData = {
    name: "Prafull Kumar",
    tagline: "Android Developer & Mobile Innovator",
    email: "prafullkumar384@gmail.com",
    profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQGmV1bcuDACPg/profile-displayphoto-shrink_400_400/B4DZb2bdrZHQAg-/0/1747891117340?e=1759363200&v=beta&t=mTYA8CIg0wwS6QBzWH62y9qWC8assE3KrY25fPB9N_g",
    links: {
        github: "https://github.com/prafullKrRj",
        linkedin: "https://www.linkedin.com/in/prafull-kumar-rj/",
        gplayDeveloper: "https://play.google.com/store/apps/developer?id=Prafull+Kumar",
        resume: "./Resume.pdf"
    },
    about: "I am a passionate Android Developer specializing in Kotlin and Jetpack Compose. With a strong foundation in clean architecture (MVVM) and modern development practices, I transform complex ideas into scalable, user-centric mobile applications. I thrive on solving intricate problems and am constantly exploring the integration of AI within the mobile ecosystem to build smarter, more intuitive experiences.",
    experience: [
        {
            role: "Android Development Intern",
            company: "Warewe Consultancy Pvt. Ltd.",
            period: "February 2025 – Present",
            description: [
                "Led the end-to-end development of three distinct Android applications, from concept and design to deployment on the Google Play Store.",
                "Engineered utility apps like a TDEE Calculator and Ring Sizer using Kotlin and Jetpack Compose, focusing on precise calculations and intuitive UI.",
                "Systematically optimized app performance using Android Profiler, achieving significant reductions in memory footprint and ensuring a fluid, responsive UI."
            ],
            internApps: [
                {
                    title: "Dog Translator Simulator",
                    link: "https://play.google.com/store/apps/details?id=translate.dog.language",
                    icon: <Cat size={20} className={styles.iconAmber}/>
                },
                {
                    title: "Cat Translator Simulator",
                    link: "https://play.google.com/store/apps/details?id=com.cattranslator.cattranslator",
                    icon: <Cat size={20} className={styles.iconPurple}/>
                },
                {
                    title: "Ring Sizer",
                    link: "https://play.google.com/store/apps/details?id=com.home.ringsizer",
                    icon: <Ruler size={20} className={styles.iconSky}/>
                }
            ]
        }
    ],
    personalProjects: [
        {
            title: "PropVault - Estate Management",
            description: "A comprehensive, multi-module Android application for real estate firms, featuring distinct portals for admin and customer management. Built with a scalable MVVM and Clean Architecture foundation.",
            tech: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Clean Architecture"],
            link: "https://github.com/prafullKrRj/PropVault",
            icon: <Building size={32} className={styles.iconBlue}/>
        },
        {
            title: "TrainX - Smart Workout Tracker",
            description: "An intelligent workout tracking app leveraging Room for robust offline storage and the Gemini AI API to provide users with personalized fitness recommendations and plans.",
            tech: ["Kotlin", "Jetpack Compose", "Room DB", "Gemini AI", "MVVM"],
            link: "https://github.com/prafullKrRj/TrainX",
            icon: <Dumbbell size={32} className={styles.iconGreen}/>
        },
        {
            title: "Codeforcesly CF Helper",
            description: "A feature-rich companion app for Codeforces competitors. Includes user profile tracking, contest schedules, problem visualization, and friend management, all built with a modern tech stack.",
            tech: ["Kotlin", "Jetpack Compose", "Room DB", "Dagger Hilt", "Retrofit"],
            link: "https://play.google.com/store/apps/details?id=com.prafullkumar.codeforcesly",
            icon: <Code size={32} className={styles.iconPurple}/>
        }
    ],
    // leetcodeStats: {
    //     username: "prafullkumar",
    //     totalSolved: 621,
    //     easy: 185,
    //     medium: 350,
    //     hard: 86,
    //     streak: 152,
    //     rating: 1750,
    // },
    // githubStats: {
    //     contributions: 1245,
    //     streak: 210,
    // },
    skills: {
        languages: ["Kotlin", "Java", "SQL", "Python"],
        android: ["Jetpack Compose", "MVVM/MVI", "Room", "Dagger Hilt", "Coroutines", "Retrofit", "LiveData", "Koin", "Clean Architecture"],
        databases: ["Room", "Firebase Firestore", "MySQL", "MongoDB"],
        tools: ["Android Studio", "Git/GitHub", "Postman", "IntelliJ", "VS Code", "Spring Boot"]
    },
    education: {
        institution: "Army Institute of Technology, Pune",
        degree: "Bachelor of Engineering, Computer Engineering",
        period: "2022 – 2026",
        gpa: "Current GPA: 8.67/10"
    },
    achievements: [
        {
            title: "1st Place, App Development Contest 3.0",
            issuer: "GDSC AIT Pune",
            description: "Secured top honors in a competitive app development contest, demonstrating strong problem-solving skills and rapid, high-quality implementation."
        }
    ]
};

// --- Reusable Components ---

const Section = ({id, title, icon, children}) => (
    <section id={id} className={styles.section}>
        <div className={styles.sectionHeader}>
            {React.cloneElement(icon, {className: styles.sectionIcon})}
            <h2 className={styles.sectionTitle}>{title}</h2>
        </div>
        {children}
    </section>
);

const Card = ({link, children, className = ''}) => (
    <div className={`${styles.cardWrapper} ${className}`}>
        <div className={styles.cardContent}>
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}></a>}
            {children}
        </div>
    </div>
);

const ProjectCard = ({project}) => (
    <Card link={project.link} className={styles.projectCard}>
        <div className={styles.projectHeader}>
            {project.icon}
            <ExternalLink className={styles.externalLinkIcon} size={20}/>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.techContainer}>
            {project.tech.map(t => (
                <span key={t} className={styles.techTag}>{t}</span>
            ))}
        </div>
    </Card>
);

const ExperienceCard = ({exp}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.experienceCard}>
            <div className={styles.experienceContent}>
                <h3 className={styles.experienceTitle}>
                    {exp.role} at <span className={styles.companyName}>{exp.company}</span>
                </h3>
                <p className={styles.period}>{exp.period}</p>
                <ul className={styles.descriptionList}>
                    {exp.description.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={styles.dropdownButton}
                >
                    <span>View Published Apps</span>
                    <ChevronDown
                        className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ''}`}
                        size={16}
                    />
                </button>
            </div>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    <h4 className={styles.dropdownTitle}>Internship Projects:</h4>
                    <div className={styles.internAppsContainer}>
                        {exp.internApps.map(app => (
                            <a
                                key={app.title}
                                href={app.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.internAppLink}
                            >
                                {app.icon}
                                <span className={styles.internAppTitle}>{app.title}</span>
                                <ExternalLink className={styles.externalLinkIconSmall} size={16}/>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

// Enhanced Resume Button Component
const ResumeButton = () => {
    const handleResumeClick = () => {
        window.open('./Resume.pdf', '_blank');
    };

    return (
        <div className={styles.resumeWrapper}>
            <button onClick={handleResumeClick} className={styles.resumeButton}>
                <div className={styles.resumeIconWrapper}>
                    <FileText size={20} />
                </div>
                <div className={styles.resumeContent}>
                    <span className={styles.resumeText}>View Resume</span>
                    <span className={styles.resumeSubtext}>Download PDF</span>
                </div>
                <div className={styles.resumeArrow}>
                    <Download size={18} />
                </div>
            </button>
            <div className={styles.resumeGlow}></div>
        </div>
    );
};

// --- Main App Component ---

export default function App() {
    const {
        name,
        tagline,
        email,
        profileImage,
        links,
        about,
        experience,
        personalProjects,
        // leetcodeStats,
        // githubStats,
        skills,
        education,
        achievements
    } = portfolioData;

    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({x: event.clientX, y: event.clientY});
        };
        
        const handleScroll = () => {
            const sections = ['experience', 'stats', 'projects', 'skills'];
            const scrollPosition = window.scrollY + 200;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        {href: "#experience", label: "Experience", id: "experience"},
        // Remove stats from navigation
        // {href: "#stats", label: "Stats", id: "stats"},
        {href: "#projects", label: "Projects", id: "projects"},
        {href: "#skills", label: "Skills", id: "skills"},
    ];

    return (
        <div className={styles.appContainer} style={{'--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px`}}>
            <div className={styles.spotlight}></div>

            <div className={styles.mainLayout}>
                <div className={styles.gridContainer}>

                    <header className={styles.header}>
                        <div>
                            <div className={styles.profileSection}>
                                <div className={styles.profileImageContainer}>
                                    <div className={styles.profileImageWrapper}>
                                        <img 
                                            src={profileImage} 
                                            alt="Prafull Kumar" 
                                            className={styles.profileImage}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                        <div className={styles.profileImageOverlay}></div>
                                        <div className={styles.profileImageBorder}></div>
                                    </div>
                                    <div className={styles.profileStatus}>
                                        <div className={styles.statusDot}></div>
                                        <span className={styles.statusText}>Available for work</span>
                                    </div>
                                </div>
                                <div className={styles.profileContent}>
                                    <h1 className={styles.mainTitle}>{name}</h1>
                                    <h2 className={styles.tagline}>{tagline}</h2>
                                </div>
                            </div>
                            <p className={styles.aboutText}>{about}</p>
                            <ResumeButton />
                            <nav className={styles.desktopNav}>
                                <ul className={styles.navList}>
                                    {navLinks.map(link => (
                                        <li key={link.href}>
                                            <a 
                                                href={link.href} 
                                                className={`${styles.navLink} ${activeSection === link.id ? styles.navActive : ''}`}
                                            >
                                                <span className={styles.navIndicator}></span>
                                                <span className={styles.navText}>{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className={styles.socialLinks}>
                            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                               className={styles.socialLink}><Github size={24}/></a>
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                               className={styles.socialLink}><Linkedin size={24}/></a>
                            <a href={links.gplayDeveloper} target="_blank" rel="noopener noreferrer"
                               aria-label="Google Play Developer" className={styles.socialLink}><Smartphone size={24}/></a>
                            <a href={`mailto:${email}`} aria-label="Email" className={styles.socialLink}><Mail
                                size={24}/></a>
                        </div>
                    </header>

                    <main className={styles.mainContent}>
                        <Section id="experience" title="Experience" icon={<Briefcase/>}>
                            {experience.map(exp => <ExperienceCard key={exp.company} exp={exp}/>)}
                        </Section>

                        {/* Comment out stats section */}
                        {/* <Section id="stats" title="Coding Stats" icon={<Zap/>}>
                            <div className={styles.statsContainer}>
                                <LeetCodeStats stats={leetcodeStats}/>
                                <GitHubStats stats={githubStats}/>
                            </div>
                        </Section> */}

                        <Section id="projects" title="Personal Apps & Projects" icon={<Star/>}>
                            <div className={styles.projectsGrid}>
                                {personalProjects.map(p => <ProjectCard key={p.title} project={p}/>)}
                            </div>
                        </Section>

                        <Section id="skills" title="Skills" icon={<BrainCircuit/>}>
                            <div className={styles.skillsCard}>
                                <div className={styles.skillsGrid}>
                                    <div>
                                        <h4 className={styles.skillsSubtitle}>Languages & Databases</h4>
                                        <div className={styles.skillsContainer}>
                                            {skills.languages.map(s => <span key={s}
                                                                             className={styles.skillTag}>{s}</span>)}
                                            {skills.databases.map(s => <span key={s}
                                                                             className={styles.skillTag}>{s}</span>)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className={styles.skillsSubtitle}>Tools & Technologies</h4>
                                        <div className={styles.skillsContainer}>
                                            {skills.tools.map(s => <span key={s}
                                                                         className={styles.skillTag}>{s}</span>)}
                                        </div>
                                    </div>
                                    <div className={styles.skillsFullWidth}>
                                        <h4 className={styles.skillsSubtitle}>Android Development</h4>
                                        <div className={styles.skillsContainer}>
                                            {skills.android.map(s => <span key={s}
                                                                           className={styles.skillTag}>{s}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section id="education" title="Education" icon={<School/>}>
                            <Card link={"https://www.aitpune.com/"} className={styles.educationCard}>
                                <h3 className={styles.educationTitle}>{education.institution}</h3>
                                <p className={styles.educationDegree}>{education.degree}</p>
                                <p className={styles.educationPeriod}>{education.period}</p>
                                <p className={styles.educationGpa}>{education.gpa}</p>
                            </Card>
                        </Section>

                        <Section id="achievements" title="Achievements" icon={<Award/>}>
                            {achievements.map(ach => (
                                <div key={ach.title} className={styles.achievementCard}>
                                    <h3 className={styles.achievementTitle}>{ach.title}</h3>
                                    <p className={styles.achievementIssuer}>{ach.issuer}</p>
                                    <p className={styles.achievementDescription}>{ach.description}</p>
                                </div>
                            ))}
                        </Section>

                        <footer className={styles.footer}>
                            <p>Designed & Built by Prafull Kumar.</p>
                            <p>Inspired by modern web design trends. Built with React & CSS Modules.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}