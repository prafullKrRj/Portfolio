import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, Smartphone, Briefcase, School, Award, Code, Star, ExternalLink, Building, BrainCircuit, Dumbbell, Cat, Ruler, ChevronDown, Flame, GitCommit, Target, Zap } from 'lucide-react';

// --- Data for your portfolio ---
const portfolioData = {
    name: "Prafull Kumar",
    tagline: "Android Developer & Mobile Innovator",
    email: "prafullkumar384@gmail.com",
    links: {
        github: "https://github.com/prafullKrRj",
        linkedin: "https://www.linkedin.com/in/prafull-kumar-rj/",
        gplayDeveloper: "https://play.google.com/store/apps/developer?id=Prafull+Kumar", // Updated Publisher Link
        leetcode: "https://leetcode.com/u/prafullkumar/", // Updated LeetCode username
        resume: "./Resume.pdf"
    },
    about: "I am a passionate Android Developer specializing in Kotlin and Jetpack Compose. With a strong foundation in clean architecture (MVVM) and modern development practices, I transform complex ideas into scalable, user-centric mobile applications. I thrive on solving intricate problems and am constantly exploring the integration of AI within the mobile ecosystem to build smarter, more intuitive experiences.",
    experience: [
        {
            role: "Android Development Intern",
            company: "Warewe Consultancy Pvt. Ltd.",
            period: "May 2024 – Present",
            description: [
                "Led the end-to-end development of three distinct Android applications, from concept and design to deployment on the Google Play Store.",
                "Engineered utility apps like a TDEE Calculator and Ring Sizer using Kotlin and Jetpack Compose, focusing on precise calculations and intuitive UI.",
                "Systematically optimized app performance using Android Profiler, achieving significant reductions in memory footprint and ensuring a fluid, responsive UI."
            ],
            internApps: [
                {
                    title: "Dog Translator Simulator",
                    link: "https://play.google.com/store/apps/details?id=translate.dog.language",
                    icon: <Cat size={20} className="text-amber-400" />
                },
                {
                    title: "Cat Translator Simulator",
                    link: "https://play.google.com/store/apps/details?id=com.cattranslator.cattranslator",
                    icon: <Cat size={20} className="text-purple-400" />
                },
                {
                    title: "Ring Sizer",
                    link: "https://play.google.com/store/apps/details?id=com.home.ringsizer",
                    icon: <Ruler size={20} className="text-sky-400" />
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
            icon: <Building size={32} className="text-blue-400" />
        },
        {
            title: "TrainX - Smart Workout Tracker",
            description: "An intelligent workout tracking app leveraging Room for robust offline storage and the Gemini AI API to provide users with personalized fitness recommendations and plans.",
            tech: ["Kotlin", "Jetpack Compose", "Room DB", "Gemini AI", "MVVM"],
            link: "https://github.com/prafullKrRj/TrainX-Smart-Workout-Tracker",
            icon: <Dumbbell size={32} className="text-green-400" />
        },
        {
            title: "Codeforcesly CF Helper",
            description: "A feature-rich companion app for Codeforces competitors. Includes user profile tracking, contest schedules, problem visualization, and friend management, all built with a modern tech stack.",
            tech: ["Kotlin", "Jetpack Compose", "Room DB", "Dagger Hilt", "Retrofit"],
            link: "https://play.google.com/store/apps/details?id=com.prafull.codeforcesly",
            icon: <Code size={32} className="text-purple-400" />
        }
    ],
    leetcodeStats: {
        username: "prafullkumar",
        totalSolved: 621,
        easy: 185,
        medium: 350,
        hard: 86,
        streak: 152,
        rating: 1750,
    },
    githubStats: {
        contributions: 1245,
        streak: 210,
    },
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

const Section = ({ id, title, icon, children }) => (
    <section id={id} className="mb-16 scroll-mt-24 md:scroll-mt-16">
        <div className="flex items-center mb-8">
            {icon}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 ml-4 tracking-wide">{title}</h2>
        </div>
        {children}
    </section>
);

const Card = ({ link, children, className = '' }) => (
    <div className={`block group p-1 bg-gradient-to-br from-white/10 to-white/0 rounded-xl transition-all duration-300 hover:!bg-gradient-to-br hover:from-white/20 hover:to-white/5 ${className}`}>
        <div className="bg-slate-900/80 backdrop-blur-lg rounded-lg p-6 h-full border border-slate-800 transition-all duration-300 group-hover:border-blue-400/50">
            <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
            {children}
        </div>
    </div>
);

const ProjectCard = ({ project }) => (
    <Card link={project.link} className="relative">
        <div className="flex justify-between items-start mb-4">
            {project.icon}
            <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300 z-10" size={20} />
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
                <span key={t} className="bg-blue-900/60 text-blue-300 text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>
            ))}
        </div>
    </Card>
);

const ExperienceCard = ({ exp }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-slate-900/80 backdrop-blur-lg rounded-lg border border-slate-800 transition-all duration-300 hover:border-blue-400/50">
            <div className="p-6">
                <h3 className="text-lg font-bold text-slate-200">{exp.role} at <span className="text-blue-400">{exp.company}</span></h3>
                <p className="text-sm text-slate-500 font-mono mb-3">{exp.period}</p>
                <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                    {exp.description.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 text-sm text-blue-400 font-semibold mt-4 hover:text-blue-300 transition-colors">
                    <span>View Published Apps</span>
                    <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
            </div>
            {isOpen && (
                <div className="border-t border-slate-800 p-6">
                    <h4 className="font-bold text-slate-300 mb-3">Internship Projects:</h4>
                    <div className="space-y-3">
                        {exp.internApps.map(app => (
                            <a key={app.title} href={app.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-md bg-slate-800/50 hover:bg-slate-800 transition-colors">
                                {app.icon}
                                <span className="text-slate-300 font-medium">{app.title}</span>
                                <ExternalLink className="ml-auto text-slate-500" size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const LeetCodeStats = ({ stats }) => {
    const total = stats.totalSolved;
    const easyP = (stats.easy / total) * 100;
    const mediumP = (stats.medium / total) * 100;
    const hardP = (stats.hard / total) * 100;

    return (
        <Card link={portfolioData.links.leetcode} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">LeetCode Profile</h3>
                    <p className="font-mono text-blue-400">{stats.username}</p>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <Target size={24} className="text-slate-400" />
                            <div>
                                <p className="font-bold text-2xl text-white">{stats.totalSolved}</p>
                                <p className="text-sm text-slate-500">Problems Solved</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Flame size={24} className="text-orange-400" />
                            <div>
                                <p className="font-bold text-2xl text-white">{stats.streak}</p>
                                <p className="text-sm text-slate-500">Day Streak</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-slate-300 font-semibold mb-2">Solved Distribution</p>
                    <div className="w-full bg-slate-800 rounded-full h-4 flex overflow-hidden mb-4">
                        <div className="bg-green-500" style={{ width: `${easyP}%` }}></div>
                        <div className="bg-yellow-500" style={{ width: `${mediumP}%` }}></div>
                        <div className="bg-red-500" style={{ width: `${hardP}%` }}></div>
                    </div>
                    <div className="text-xs text-slate-400 space-y-1">
                        <p><span className="font-bold text-green-400">Easy:</span> {stats.easy}</p>
                        <p><span className="font-bold text-yellow-400">Medium:</span> {stats.medium}</p>
                        <p><span className="font-bold text-red-400">Hard:</span> {stats.hard}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

const GitHubStats = ({ stats }) => {
    const generateHeatmap = () => {
        let weeks = [];
        for (let i = 0; i < 52; i++) {
            let days = [];
            for (let j = 0; j < 7; j++) {
                const intensity = Math.random();
                let colorClass = 'bg-slate-800';
                if (intensity > 0.9) colorClass = 'bg-green-400';
                else if (intensity > 0.7) colorClass = 'bg-green-600';
                else if (intensity > 0.4) colorClass = 'bg-green-800';
                else if (intensity > 0.1) colorClass = 'bg-green-900';
                days.push(<div key={j} className={`w-3 h-3 rounded-sm ${colorClass}`}></div>);
            }
            weeks.push(<div key={i} className="flex flex-col gap-1">{days}</div>);
        }
        return weeks;
    };
    return (
        <Card link={portfolioData.links.github} className="relative">
            <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors duration-300">GitHub Activity</h3>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                    <div className="flex gap-1 overflow-hidden">
                        {generateHeatmap()}
                    </div>
                </div>
                <div className="flex-shrink-0 space-y-4">
                    <div className="flex items-center gap-3">
                        <GitCommit size={20} className="text-slate-400" />
                        <div>
                            <p className="font-bold text-xl text-white">{stats.contributions}</p>
                            <p className="text-xs text-slate-500">Total Contributions</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Zap size={20} className="text-yellow-400" />
                        <div>
                            <p className="font-bold text-xl text-white">{stats.streak}</p>
                            <p className="text-xs text-slate-500">Longest Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

// --- Main App Component ---

export default function App() {
    const { name, tagline, email, links, about, experience, personalProjects, leetcodeStats, githubStats, skills, education, achievements } = portfolioData;

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const navLinks = [
        { href: "#experience", label: "Experience" },
        { href: "#stats", label: "Stats" },
        { href: "#projects", label: "Projects" },
        { href: "#skills", label: "Skills" },
    ];

    return (
        <div className="bg-slate-900 text-slate-300 font-sans leading-normal selection:bg-blue-500/30" style={{'--x': `${mousePosition.x}px`, '--y': `${mousePosition.y}px`}}>
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                 style={{ background: `radial-gradient(600px at var(--x) var(--y), rgba(29, 78, 216, 0.15), transparent 80%)`}}>
            </div>

            <div className="container mx-auto max-w-screen-xl px-6 md:px-12 relative z-10">
                <div className="lg:flex lg:justify-between lg:gap-16">

                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">{name}</h1>
                            <h2 className="mt-3 text-lg md:text-xl font-medium tracking-tight text-slate-200">{tagline}</h2>
                            <p className="mt-4 max-w-md leading-normal text-slate-400">{about}</p>
                            <nav className="hidden lg:block mt-12">
                                <ul className="space-y-4">
                                    {navLinks.map(link => (
                                        <li key={link.href}>
                                            <a href={link.href} className="group flex items-center py-2">
                                                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
                                                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex items-center gap-5 mt-8">
                            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-white transition-colors duration-300"><Github size={24} /></a>
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors duration-300"><Linkedin size={24} /></a>
                            <a href={links.gplayDeveloper} target="_blank" rel="noopener noreferrer" aria-label="Google Play Developer" className="text-slate-400 hover:text-white transition-colors duration-300"><Smartphone size={24} /></a>
                            <a href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="text-slate-400 hover:text-white transition-colors duration-300"><Code size={24} /></a>
                            <a href={`mailto:${email}`} aria-label="Email" className="text-slate-400 hover:text-white transition-colors duration-300"><Mail size={24} /></a>
                            <a href={links.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume" className="text-slate-400 hover:text-white transition-colors duration-300"><FileText size={24} /></a>
                        </div>
                    </header>

                    <main className="pt-24 lg:w-3/5 lg:py-24">
                        <Section id="experience" title="Experience" icon={<Briefcase className="text-slate-400" />}>
                            {experience.map(exp => <ExperienceCard key={exp.company} exp={exp} />)}
                        </Section>

                        {/* <Section id="stats" title="Coding Stats" icon={<Zap className="text-slate-400" />}>
                            <div className="space-y-6">
                                <LeetCodeStats stats={leetcodeStats} />
                                <GitHubStats stats={githubStats} />
                            </div>
                        </Section> */}

                        <Section id="projects" title="Personal Apps & Projects" icon={<Star className="text-slate-400" />}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {personalProjects.map(p => <ProjectCard key={p.title} project={p} />)}
                            </div>
                        </Section>

                        <Section id="skills" title="Skills" icon={<BrainCircuit className="text-slate-400" />}>
                            <div className="bg-slate-900/80 backdrop-blur-lg rounded-lg border border-slate-800 p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-slate-200 mb-3 text-md">Languages & Databases</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.languages.map(s => <span key={s} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">{s}</span>)}
                                            {skills.databases.map(s => <span key={s} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">{s}</span>)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-200 mb-3 text-md">Tools & Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.tools.map(s => <span key={s} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">{s}</span>)}
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <h4 className="font-bold text-slate-200 mb-3 text-md">Android Development</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.android.map(s => <span key={s} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1.5 rounded-md">{s}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section id="education" title="Education" icon={<School className="text-slate-400" />}>
                            <Card link={"https://www.aitpune.com/"} className="relative">
                                <h3 className="text-lg font-bold text-slate-200">{education.institution}</h3>
                                <p className="text-slate-400">{education.degree}</p>
                                <p className="text-sm text-slate-500 font-mono">{education.period}</p>
                                <p className="text-sm text-slate-500 font-mono mt-1">{education.gpa}</p>
                            </Card>
                        </Section>

                        <Section id="achievements" title="Achievements" icon={<Award className="text-slate-400" />}>
                            {achievements.map(ach => (
                                <div key={ach.title} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                                    <h3 className="text-lg font-bold text-slate-200">{ach.title}</h3>
                                    <p className="text-slate-400 font-semibold">{ach.issuer}</p>
                                    <p className="text-slate-500 text-sm mt-1">{ach.description}</p>
                                </div>
                            ))}
                        </Section>

                        <footer className="text-center text-sm text-slate-500 py-8">
                            <p>Designed & Built by Prafull Kumar.</p>
                            <p>Inspired by modern web design trends. Built with React & Tailwind CSS.</p>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}