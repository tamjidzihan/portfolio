import { Coffee, Code2, Sparkles, Award, Code, Database, Heart, Server, Smartphone, Target, Users, Github, Linkedin, Mail, Globe, Calendar, Star, Zap, Briefcase, MapPin, Phone } from 'lucide-react';
import profilePic from '/tamzidislam.jpg'
import blog from '/blog.png'
import imranslablms from '/imranslablms.png'
import munemi from '/munemi.png'
import beakling from '/beakling.png'
import resume from '../Assets/MD.Tamzid_Islam.pdf'


export const stats = [
    { label: "Years Experience", value: "3+", icon: Code2 },
    { label: "Projects Completed", value: "20+", icon: Sparkles },
    { label: "Technologies", value: "15+", icon: Coffee },
];

export const links = [
    { icon: Github, href: "https://github.com/tamjidzihan", label: 'GitHub' },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tamzid-islam/", label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tamjidzihan@gmail.com', label: 'Email' }
];


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
    fullName: "Md.Tamzid Islam Zihan",
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
            backend: ["Express.js", "Node.js", "MySQL", "JWT", "Bcrypt"],
            tools: ["Git", "VS Code", "Postman", "PHP SQL"]
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
        github: "https://github.com/tamjidzihan",
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
        year: "2025",
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
        github: "https://github.com/imranslab-inc/bedrock/tree/imranslab-edu",
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
            frontend: ["Next", "React", "TypeScript", "Tailwind CSS"],
            backend: ["Node.js", "MarkDown"],
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
        shortDescription: "Curated e-commerce platform for children's books, toys, and learning products",
        fullDescription: "Beakling is a modern e-commerce platform dedicated to fostering imagination and learning in children. It offers curated collections of eBooks, innovative toys, and enriching child-friendly products. The platform focuses on high-quality offerings, expert guidance, and a seamless shopping experience for parents and kids alike.",
        image: beakling,
        category: "E-commerce",
        status: "Default",
        year: "2025",
        duration: "6 months",
        team: "Full-stack Developer",
        technologies: {
            frontend: ["React", "Typescript", "Tailwind CSS", "React Router Dom", "Framer Motion"],
            backend: ["Django", "Django REST framework", "PostgresSQL"],
            tools: ["Vercel", "GitHub Actions", "Cloudinary"]
        },
        features: [
            "Curated eBook and toy collections",
            "Personalized product recommendations",
            "Wishlist and gift features",
            "Secure checkout and payment integration",
            "Responsive and mobile-friendly design",
            "SEO-optimized product catalog"
        ],
        challenges: [
            "Building a scalable product catalog system",
            "Ensuring smooth checkout and payment flow",
            "Managing placeholder-to-production content migration"
        ],
        results: [
            "Successfully launched live e-commerce site",
            "Improved user engagement with curated recommendations",
            "Established brand presence across social media platforms"
        ],
        link: "https://www.beakling.com",
        github: "#",
        featured: false
    }

];

export const toolkit = [
    {
        category: "Frontend",
        technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        category: "Backend",
        technologies: ["Node.js", "Python", "Django", "FastAPI", "Express.js"],
        color: "from-green-500 to-emerald-500"
    },
    {
        category: "Database",
        technologies: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma"],
        color: "from-purple-500 to-pink-500"
    },
    {
        category: "Tools & Cloud",
        technologies: ["AWS", "Docker", "Git", "VS Code", "Postman"],
        color: "from-orange-500 to-red-500"
    }
]


export const resumeData = {
    personalInfo: {
        name: "Md. Tamzid Islam",
        title: "Software Engineer",
        email: "tamjidzihan@gmail.com",
        linkedin: "www.linkedin.com/in/tamzid-islam",
        github: "https://github.com/tamjidzihan",
        resume: resume
    },
    experience: [
        {
            title: "Software Engineer",
            company: "imransLab",
            period: "2025 - Present",
            description: "Developed and maintained web applications using React, TypeScript, Python, and modern cloud technologies."
        },
        {
            title: "Junior Web Developer",
            company: "Wreef Ai",
            period: "2023 - 2024",
            description: "Developed and maintained web applications using React, TypeScript, Python, and modern cloud technologies."
        },
        {
            title: "Freelance",
            company: "Up Work, Fiver",
            period: "2022 - 2023",
            description: "Developed and maintained web applications using React, TypeScript, Python, and modern cloud technologies."
        }
    ],
    education: [
        {
            degree: "Electronics And Communication Engineering",
            institution: "East West Unibersity",
            period: "2011 - 2015",
            description: "Focused on networking, algorithms, and modern web technologies."
        }
    ],
    skills: {
        "Programming Languages": ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
        "Frontend Technologies": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
        "Backend Technologies": ["Django", "FastAPI", "Node.js", "Express.js"],
        "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
        "Cloud & DevOps": ["AWS", "Docker", "Git", "Linux"]
    }
};



export const blogPosts = [
    {
        id: 1,
        title: "The Rise of Edge Computing and Its Impact on Modern Technology",
        excerpt: "React, developed by Facebook (now Meta) in 2013, has become one of the most popular libraries for building user interfaces. Its component-based architecture, performance optimizations, and strong community support make it an excellent choice for modern web development.",
        date: "2024-12-11",
        readTime: "5 min read",
        link: "https://bytebybyteblog.vercel.app/blogs/the-rise-of-edge-computing-and-its-impact-on-modern-technology",
        tags: ["React", "TypeScript", "Web Development"],
        published: true
    },
    {
        id: 2,
        title: "Understanding AI LLM and Machine Learning",
        excerpt: "Artificial Intelligence (AI), Machine Learning (ML), and Large Language Models (LLM) are rapidly evolving fields that are shaping the future of technology.",
        date: "2024-01-02",
        readTime: "12 min read",
        link: "https://bytebybyteblog.vercel.app/blogs/understanding-ai-llm-and-machine-learning",
        tags: ["Artificial", "Intelligence", "Machine learning", "models"],
        published: true
    },
    {
        id: 3,
        title: "Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR) in Next.js",
        excerpt: "Server-Side Rendering is a technique where the server generates the full HTML content of a page at request time and sends it to the client. This allows for better SEO and faster page loads for the initial visit since the content is rendered on the server.",
        date: "2024-12-20",
        readTime: "10 min read",
        link: "https://bytebybyteblog.vercel.app/blogs/server-side-rendering-(ssr)-vs.-client-side-rendering-(csr)-in-next.js",
        tags: ["AWS", "Docker", "DevOps", "Cloud"],
        published: true
    },
    {
        id: 4,
        title: "DeepSeek Breaking the AI Monopoly",
        excerpt: "The AI landscape is shifting rapidly, and at the forefront of this change is DeepSeek. You’ve probably heard about it, seen it mentioned in tech circles,",
        date: "2024-12-08",
        readTime: "6 min read",
        link: "https://bytebybyteblog.vercel.app/blogs/deepseek-breaking-the-ai-monopoly",
        tags: ["ai", "Deep Learning", "Open Source"],
        published: true
    },
    {
        id: 5,
        title: "8 Frontend Tools to Become a Better Developer",
        excerpt: "As the web development field continues to evolve, front-end developers are constantly looking for tools that can streamline their workflows, enhance productivity, and ensure the delivery of high-quality applications.",
        date: "2024-01-25",
        readTime: "15 min read",
        tags: ["Webdev", "llm", "Programming"],
        published: false
    },
    {
        id: 6,
        title: "Deno 2 The Next Evolution in JavaScript Runtimes. Is It Better Than Nodejs.",
        excerpt: "Since its release in 2020, Deno has emerged as a promising alternative to Node.js, aiming to fix many of its predecessor's limitations.",
        date: "2023-11-10",
        readTime: "9 min read",
        tags: ["Javascript", "Deno", "Node.js", "Development"],
        published: false
    }
];



export const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'tamjidzihan@gmail.com',
        href: 'mailto:tamjidzihan@gmail.com',
        description: 'Professional inquiries welcome',
        availability: '24/7'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+880 1746-963565',
        href: 'tel:+8801234567890',
        description: 'Business hours preferred',
        availability: '9 AM - 6 PM (GMT+6)'
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Dhaka, Bangladesh',
        href: '#',
        description: 'Remote work available globally',
        availability: 'Flexible timezone'
    }
];

export const socialLinks = [
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/tamjid-islam',
        href: 'https://linkedin.com/in/tamjid-islam',
        description: 'Professional network'
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/tamzid-islam',
        href: 'https://github.com/tamzid-islam',
        description: 'Code repositories'
    },
    {
        icon: Globe,
        label: 'Portfolio',
        value: 'tizdev.netlify.app',
        href: 'https://tizdev.netlify.app',
        description: 'Live projects showcase'
    }
];

export const businessInfo = [
    {
        icon: Award,
        title: 'Experience Level',
        value: '3+ Years',
        description: 'Professional development experience'
    },
    {
        icon: Users,
        title: 'Clients Served',
        value: '20+',
        description: 'Successful project deliveries'
    },
    {
        icon: Briefcase,
        title: 'Project Types',
        value: 'Web & Mobile',
        description: 'Full-stack applications'
    }
];

export const services = [
    'Full-Stack Web Development',
    'React & TypeScript Applications',
    'Backend API Development',
    'Database Design & Optimization',
    'Cloud Deployment & DevOps',
    'Technical Consulting'
];