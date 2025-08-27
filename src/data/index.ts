import { Coffee, Code2, Sparkles, Award, Code, Database, Heart, Server, Smartphone, Target, Users } from 'lucide-react';
import pic from '../../public/tamzidislam.jpg'

export const stats = [
    { label: "Years Experience", value: "3+", icon: Code2 },
    { label: "Projects Completed", value: "20+", icon: Sparkles },
    { label: "Technologies", value: "15+", icon: Coffee },
];

export const quickFacts = [
    "🚀 Full-Stack Developer",
    "🌍 Based in Bangladesh",
    "💡 Problem Solver",
    "📚 Lifelong Learner",
    "☕ Coffee Enthusiast"
];

export const personalInfo = {
    profilepic: pic,
    fullName: "Md.Tamzid Islam",
    nickname: "Tamzid",
    location: "Dhaka, Bangladesh",
    occupation: "Software Engineer",
    languages: ["Bengali (Native)", "English (Fluent)", "Hindi (Conversational)"],
    interests: ["Open Source", "Machine Learning", "Mobile Development", "Cloud Computing"],
    hobbies: ["Photography", "Reading Tech Blogs", "Playing Chess", "Traveling"],
    careerobjective: "I craft digital experiences through code, specializing in modern web technologies. Passionate about building scalable applications that make a difference."
};

export const skills = [
    {
        category: 'Frontend Development',
        icon: Code,
        color: 'text-blue-500',
        description: 'Creating responsive and interactive user interfaces',
        skills: [
            { name: 'JavaScript/TypeScript', level: 95, experience: '4+ years' },
            { name: 'React', level: 90, experience: '3+ years' },
            { name: 'Next.js', level: 85, experience: '2+ years' },
            { name: 'Tailwind CSS', level: 90, experience: '3+ years' },
            { name: 'HTML/CSS', level: 95, experience: '5+ years' }
        ]
    },
    {
        category: 'Backend Development',
        icon: Server,
        color: 'text-green-500',
        description: 'Building robust and scalable server-side applications',
        skills: [
            { name: 'Python', level: 90, experience: '3+ years' },
            { name: 'Django/DRF', level: 85, experience: '2+ years' },
            { name: 'FastAPI', level: 80, experience: '1+ years' },
            { name: 'Node.js', level: 85, experience: '2+ years' },
            { name: 'Express.js', level: 85, experience: '2+ years' }
        ]
    },
    {
        category: 'Database & Cloud',
        icon: Database,
        color: 'text-purple-500',
        description: 'Managing data storage and cloud infrastructure',
        skills: [
            { name: 'PostgreSQL', level: 85, experience: '2+ years' },
            { name: 'MongoDB', level: 80, experience: '2+ years' },
            { name: 'AWS', level: 75, experience: '1+ years' },
            { name: 'Docker', level: 80, experience: '1+ years' },
            { name: 'Redis', level: 70, experience: '1+ years' }
        ]
    },
    {
        category: 'Mobile & Emerging Tech',
        icon: Smartphone,
        color: 'text-orange-500',
        description: 'Exploring mobile development and new technologies',
        skills: [
            { name: 'React Native', level: 70, experience: '1+ years' },
            { name: 'Go', level: 75, experience: '1+ years' },
            { name: 'GraphQL', level: 65, experience: '6 months' },
            { name: 'WebRTC', level: 60, experience: '6 months' },
            { name: 'Socket.io', level: 75, experience: '1+ years' }
        ]
    }
];

export const achievements = [
    {
        icon: Award,
        title: "20+ Projects Completed",
        description: "Successfully delivered various web applications and systems"
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Worked with cross-functional teams and mentored junior developers"
    },
    {
        icon: Target,
        title: "Problem Solver",
        description: "Known for finding creative solutions to complex technical challenges"
    },
    {
        icon: Heart,
        title: "Open Source Contributor",
        description: "Active contributor to open-source projects and community initiatives"
    }
];

export const timeline = [
    {
        year: "2024",
        title: "Senior Full-Stack Developer",
        description: "Leading development of complex web applications with modern tech stacks"
    },
    {
        year: "2023",
        title: "Full-Stack Developer",
        description: "Expanded expertise in cloud technologies and microservices architecture"
    },
    {
        year: "2022",
        title: "Frontend Developer",
        description: "Started professional career with focus on React and modern JavaScript"
    },
    {
        year: "2021",
        title: "Computer Science Student",
        description: "Began learning programming and web development fundamentals"
    }
];


export const projects = [
    {
        id: 1,
        title: "Munemi Global",
        shortDescription: "A comprehensive business platform built with modern web technologies",
        fullDescription: "Munemi Global is a full-featured business platform that streamlines operations and enhances customer engagement. Built with a focus on performance and user experience, it features real-time data processing, advanced analytics, and seamless integrations.",
        image: "/api/placeholder/600/400",
        category: "Business Platform",
        status: "Live",
        year: "2024",
        duration: "6 months",
        team: "Solo Project",
        technologies: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Axios", "React Router DOM", "Framer Motion"],
            backend: ["Express.js", "Node.js", "MongoDB", "JWT", "Bcrypt"],
            tools: ["Git", "VS Code", "Postman", "MongoDB Compass"]
        },
        features: [
            "Responsive design across all devices",
            "Real-time data synchronization",
            "Advanced user authentication",
            "Interactive dashboard with analytics",
            "SEO optimized pages",
            "Performance monitoring"
        ],
        challenges: [
            "Implementing real-time features with WebSocket",
            "Optimizing database queries for large datasets",
            "Creating responsive design for complex layouts"
        ],
        results: [
            "50% improvement in user engagement",
            "40% faster page load times",
            "Zero security vulnerabilities"
        ],
        link: "https://munemiglobal.com",
        github: "#",
        featured: true
    },
    {
        id: 2,
        title: "Imranslab Education LMS",
        shortDescription: "A complete Learning Management System with advanced features",
        fullDescription: "A comprehensive Learning Management System designed for educational institutions and online educators. Features include course management, student progress tracking, interactive assignments, and detailed analytics for instructors.",
        image: "/api/placeholder/600/400",
        category: "Education Technology",
        status: "Live",
        year: "2024",
        duration: "8 months",
        team: "2 Developers",
        technologies: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Axios", "React Router DOM", "Chart.js"],
            backend: ["Django REST Framework", "JWT", "PostgreSQL", "Celery", "Redis"],
            tools: ["Docker", "Git", "Nginx", "Gunicorn"]
        },
        features: [
            "Complete course management system",
            "Student progress tracking",
            "Interactive quizzes and assignments",
            "Real-time notifications",
            "Detailed analytics dashboard",
            "Multi-role user management"
        ],
        challenges: [
            "Building scalable course content delivery",
            "Implementing complex user role management",
            "Creating interactive learning components"
        ],
        results: [
            "500+ active students enrolled",
            "95% user satisfaction rate",
            "60% reduction in administrative workload"
        ],
        link: "https://education.imranslab.org",
        github: "#",
        featured: true
    },
    {
        id: 3,
        title: "Personal Portfolio",
        shortDescription: "Modern portfolio website showcasing projects and skills",
        fullDescription: "A modern, responsive portfolio website built to showcase my projects, skills, and professional journey. Features smooth animations, dark/light theme support, and optimized performance.",
        image: "/api/placeholder/600/400",
        category: "Personal Brand",
        status: "Live",
        year: "2024",
        duration: "2 months",
        team: "Solo Project",
        technologies: {
            frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
            backend: ["Static Site", "Netlify"],
            tools: ["Vite", "Git", "Figma", "Lighthouse"]
        },
        features: [
            "Responsive design with mobile-first approach",
            "Smooth animations and transitions",
            "Dark/Light theme toggle",
            "SEO optimized",
            "Fast loading performance",
            "Contact form integration"
        ],
        challenges: [
            "Creating smooth animations without performance impact",
            "Implementing theme switching functionality",
            "Optimizing for search engines"
        ],
        results: [
            "100% Lighthouse performance score",
            "Fully accessible (WCAG compliant)",
            "Sub-second loading times"
        ],
        link: "https://tizdev.netlify.app",
        github: "#",
        featured: false
    },
    {
        id: 4,
        title: "Task Management API",
        shortDescription: "RESTful API for task and project management",
        fullDescription: "A robust RESTful API built with FastAPI for managing tasks and projects. Features include user authentication, real-time updates, file uploads, and comprehensive documentation.",
        image: "/api/placeholder/600/400",
        category: "Backend Service",
        status: "Development",
        year: "2024",
        duration: "3 months",
        team: "Solo Project",
        technologies: {
            frontend: ["Swagger UI", "React Admin Dashboard"],
            backend: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic"],
            tools: ["Docker", "Redis", "Celery", "pytest"]
        },
        features: [
            "Complete CRUD operations for tasks",
            "User authentication with JWT",
            "Real-time notifications",
            "File upload and management",
            "Automated API documentation",
            "Background task processing"
        ],
        challenges: [
            "Implementing efficient database relationships",
            "Setting up background task processing",
            "Creating comprehensive API documentation"
        ],
        results: [
            "99.9% API uptime",
            "Sub-100ms response times",
            "Comprehensive test coverage (95%)"
        ],
        link: "#",
        github: "#",
        featured: false
    }
];



export const resumeData = {
    personalInfo: {
        name: "Md. Tamzid Islam",
        title: "Software Engineer",
        email: "tamjidzihan@gmail.com",
        linkedin: "linkedin.com/in/tamjid-islam",
        portfolio: "tizdev.netlify.app"
    },
    experience: [
        {
            title: "Full Stack Developer",
            company: "Freelance",
            period: "2022 - Present",
            description: "Developed and maintained web applications using React, TypeScript, Python, and modern cloud technologies."
        }
    ],
    education: [
        {
            degree: "Computer Science & Engineering",
            institution: "University",
            period: "2020 - 2024",
            description: "Focused on software engineering, algorithms, and modern web technologies."
        }
    ],
    skills: {
        "Programming Languages": ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
        "Frontend Technologies": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
        "Backend Technologies": ["Django", "FastAPI", "Node.js", "Express.js"],
        "Databases": ["PostgreSQL", "MongoDB", "Redis"],
        "Cloud & DevOps": ["AWS", "Docker", "Git", "Linux"]
    }
};



export const blogPosts = [
    {
        id: 1,
        title: "Building Scalable React Applications with TypeScript",
        excerpt: "Learn how to structure large React applications using TypeScript, implementing best practices for maintainability and performance.",
        date: "2024-01-15",
        readTime: "8 min read",
        tags: ["React", "TypeScript", "Best Practices"],
        published: true
    },
    {
        id: 2,
        title: "Mastering Django REST Framework for Modern APIs",
        excerpt: "A comprehensive guide to building robust APIs with Django REST Framework, covering authentication, serialization, and optimization.",
        date: "2024-01-02",
        readTime: "12 min read",
        tags: ["Django", "Python", "API", "Backend"],
        published: true
    },
    {
        id: 3,
        title: "Cloud Deployment Strategies with AWS and Docker",
        excerpt: "Explore different approaches to deploying containerized applications on AWS, with practical examples and cost optimization tips.",
        date: "2023-12-20",
        readTime: "10 min read",
        tags: ["AWS", "Docker", "DevOps", "Cloud"],
        published: true
    },
    {
        id: 4,
        title: "Modern State Management in React Applications",
        excerpt: "Compare different state management solutions for React, from Context API to Redux Toolkit and Zustand.",
        date: "2023-12-08",
        readTime: "6 min read",
        tags: ["React", "State Management", "Redux"],
        published: true
    },
    {
        id: 5,
        title: "Getting Started with Go for Backend Development",
        excerpt: "An introduction to Go programming language for backend developers, covering basics, web frameworks, and database integration.",
        date: "2023-11-25",
        readTime: "15 min read",
        tags: ["Go", "Backend", "Web Development"],
        published: false
    },
    {
        id: 6,
        title: "Database Design Patterns for Modern Applications",
        excerpt: "Essential database design patterns and when to use them, with examples in PostgreSQL and MongoDB.",
        date: "2023-11-10",
        readTime: "9 min read",
        tags: ["Database", "PostgreSQL", "MongoDB", "Design Patterns"],
        published: false
    }
];