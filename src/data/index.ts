import { Coffee, Code2, Sparkles, Award, Code, Database, Heart, Server, Smartphone, Target, Users, Github, Linkedin, Mail, Globe, Calendar, Star, Zap } from 'lucide-react';
import profilePic from '/tamzidislam.jpg'
import blog from '/blog.png'
import imranslablms from '/imranslablms.png'
import munemi from '/munemi.png'

export const stats = [
    { label: "Years Experience", value: "3+", icon: Code2 },
    { label: "Projects Completed", value: "20+", icon: Sparkles },
    { label: "Technologies", value: "15+", icon: Coffee },
];

export const links = [
    { icon: Github, href: "https://github.com/tamjidzihan", label: 'GitHub' },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tamzid-islam/", label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tamjidzihan@gmail.com', label: 'Email' }
]


export const contactLinks = [
    {
        icon: Mail,
        label: 'Email',
        href: 'mailto:tamjidzihan@gmail.com',
        text: 'tamjidzihan@gmail.com'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: "https://www.linkedin.com/in/tamzid-islam/",
        text: 'linkedin.com/in/tamjid-islam'
    },
    {
        icon: Globe,
        label: 'Portfolio',
        href: 'https://tizdev.netlify.app',
        text: 'tizdev.netlify.app'
    }
];





export const quickFacts = [
    "👨‍💻 Full-Stack Developer",
    "🌍 Based in Bangladesh",
    "💡 Problem Solver",
    "📚 Lifelong Learner",
    "🎮 Gamer"
];

export const personalInfo = {
    profilepic: profilePic,
    fullName: "Md.Tamzid Islam",
    nickname: "Tamzid",
    location: "Dhaka, Bangladesh",
    occupation: "Software Engineer",
    languages: ["Bengali (Native)", "English (Fluent)", "Hindi (Conversational)"],
    interests: ["Open Source", "Machine Learning", "Mobile Development", "Cloud Computing"],
    hobbies: ["Reading Tech Blogs", "Playing Chess", "Gamming", "Traveling"],
    careerobjective: "I craft digital experiences through code, specializing in modern web technologies. Passionate about building scalable applications that make a difference."
};


export const featuredprojects = [
    { name: "Munemi Global", image: munemi, tech: "React + Node.js", type: "Business Platform" },
    { name: "Imranslab LMS", image: imranslablms, tech: "React + Django", type: "Education System" },
    { name: "Byte-by-Byte", image: blog, tech: "Next + TypeScript", type: "Personal Blog" }
]


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
            { name: 'Django/DRF', level: 85, experience: '4+ years' },
            { name: 'FastAPI', level: 80, experience: '3+ years' },
            { name: 'Node.js', level: 85, experience: '3+ years' },
            { name: 'Express.js', level: 85, experience: '3+ years' }
        ]
    },
    {
        category: 'Database & Cloud',
        icon: Database,
        color: 'text-purple-500',
        description: 'Managing data storage and cloud infrastructure',
        skills: [
            { name: 'PostgreSQL', level: 85, experience: '4+ years' },
            { name: 'MongoDB', level: 80, experience: '3+ years' },
            { name: 'AWS', level: 75, experience: '1+ years' },
            { name: 'Docker', level: 80, experience: '1+ years' },
            { name: 'Redis', level: 70, experience: '6 months' }
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
        year: "2025",
        title: "Software Engineer",
        company: "imransLab",
        description: "Leading development of complex web applications with modern tech stacks"
    },
    {
        year: "2023",
        title: "Frontend Developer",
        company: "Wreef AI",
        description: "Started professional career with focus on React and modern JavaScript"
    },
    {
        year: "2022",
        title: "Freelancer",
        description: "Worked on various projects building responsive websites and web applications"
    },
    {
        year: "2021",
        title: "Started learning progarmming",
        description: "Began learning programming and web development fundamentals"
    }
];

export const projectStats = [
    { label: "Total Projects", value: "20+", icon: Code },
    { label: "Technologies Used", value: "15+", icon: Zap },
    { label: "Years Experience", value: "3+", icon: Calendar },
    { label: "Client Satisfaction", value: "100%", icon: Star }
];

export const projects = [
    {
        id: 1,
        title: "Munemi Global",
        shortDescription: "A comprehensive business platform built with modern web technologies",
        fullDescription: "Munemi Global is a full-featured business platform that streamlines operations and enhances customer engagement. Built with a focus on performance and user experience, it features real-time data processing, advanced analytics, and seamless integrations.",
        image: munemi,
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
        link: "https://www.munemiglobal.com",
        github: "#",
        featured: true
    },
    {
        id: 2,
        title: "Imranslab Education LMS",
        shortDescription: "A complete Learning Management System with advanced features",
        fullDescription: "A comprehensive Learning Management System designed for educational institutions and online educators. Features include course management, student progress tracking, interactive assignments, and detailed analytics for instructors.",
        image: imranslablms,
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
        title: "Byte-by-Byte",
        shortDescription: "Interactive coding challenge platform with real-time collaboration",
        fullDescription: "Byte-by-Byte is an interactive platform where developers can solve coding challenges, participate in pair programming sessions, and track their progress. Features real-time code execution, collaborative editing, and comprehensive analytics.",
        image: blog,
        category: "Education Platform",
        status: "Live",
        year: "2024",
        duration: "4 months",
        team: "Lead Developer",
        technologies: {
            frontend: ["React", "TypeScript", "Monaco Editor", "Socket.io Client", "Tailwind CSS"],
            backend: ["Node.js", "Express", "Socket.io", "Redis", "PostgreSQL"],
            tools: ["Docker", "Jest", "Webpack", "NGINX"]
        },
        features: [
            "Real-time collaborative code editing",
            "Integrated code execution and testing",
            "Progress tracking and analytics",
            "Multi-language support (Python, JavaScript, Java)",
            "User authentication and authorization",
            "Challenge creation and management"
        ],
        challenges: [
            "Implementing real-time synchronization without conflicts",
            "Securing code execution environment",
            "Handling large-scale WebSocket connections"
        ],
        results: [
            "500+ active monthly users",
            "95% user satisfaction rate",
            "200ms average real-time sync latency"
        ],
        link: "https://bytebybyteblog.vercel.app/",
        github: "https://github.com/tamjidzihan/byte_by_byte",
        featured: false
    },
    {
        id: 4,
        title: "Beakling",
        shortDescription: "AI-powered language learning app with speech recognition",
        fullDescription: "Beakling is a modern language learning application that uses AI and speech recognition to help users master new languages. Features personalized learning paths, pronunciation feedback, and immersive conversational practice.",
        image: "/api/placeholder/600/400",
        category: "EdTech",
        status: "Live",
        year: "2024",
        duration: "5 months",
        team: "Full-stack Developer",
        technologies: {
            frontend: ["Vue.js", "Vuetify", "Web Speech API", "Wave.js"],
            backend: ["Python", "FastAPI", "OpenAI API", "MongoDB", "Celery"],
            tools: ["Docker", "Kubernetes", "GCP", "GitLab CI/CD"]
        },
        features: [
            "Real-time speech recognition and feedback",
            "AI-powered conversation practice",
            "Personalized learning curriculum",
            "Progress analytics and insights",
            "Multi-language support (8 languages)",
            "Mobile-responsive design"
        ],
        challenges: [
            "Integrating multiple speech recognition APIs",
            "Reducing latency in real-time audio processing",
            "Creating accurate pronunciation scoring algorithms"
        ],
        results: [
            "10,000+ registered users",
            "40% improvement in learning efficiency",
            "4.8/5 app store rating"
        ],
        link: "https://beakling.com",
        github: "#",
        featured: false
    },
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