export const config = {
    developer: {
        name: "Sanyam",
        fullName: "Sanyam Jain",
        title: "Full-Stack & AI Developer",
        description: "Full-Stack Developer (MERN + TypeScript) and LeetCode Knight (2033) building real-time systems, AI-integrated platforms, and production-grade APIs. I ship real features on live products and love solving hard problems."
    },
    social: {
        github: "sanyamhbtu",
        email: "sanyamjainhbtu@gmail.com",
        location: "Meerut, India"
    },
    about: {
        title: "About Me",
        description: "I'm Sanyam Jain — a Full-Stack Developer and final-year B.Tech CSE student at HBTU Kanpur. I build with the MERN stack and TypeScript, and I integrate LLMs to ship products that feel fast and intelligent. As a LeetCode Knight (peak rating 2033, top 2.1%, 700+ problems in Java), I bring a strong DSA foundation to everything I build. I've shipped production features on a live MERN real-estate platform as an SDE Intern, and led 7+ hackathons including SIH — placing Top 50 at the Coral × WeMakeDevs Hackathon. I'm seeking SDE Intern and Fresher roles at product companies and startups."
    },
    experiences: [
        {
            position: "Software Engineer Intern",
            company: "Winst Realtors Pvt. Ltd.",
            period: "Oct 2025 - Dec 2025",
            location: "Hybrid",
            description: "Shipped production features on a live MERN real-estate platform — cut page load time by 30%, handled 2x peak traffic, and reduced deployment downtime by 40% with end-to-end CI/CD.",
            responsibilities: [
                "Cut page load time 30% via React lazy loading + MongoDB indexing",
                "Set up Nginx, DNS, and CI/CD pipelines end-to-end (40% less downtime)",
                "Drove 25% organic traffic growth with schema markup and SEO",
                "Integrated third-party APIs for property listings and maps"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "Nginx", "CI/CD"]
        },
        {
            position: "Technical Mentor",
            company: "Autorob Workshop, HBTU Kanpur",
            period: "2025 - 2026",
            location: "Kanpur",
            description: "Conducted hands-on technical sessions for 350+ students on robotics, automation, and core engineering — breaking down complex topics into practical, buildable projects.",
            responsibilities: [
                "Taught 350+ students across hands-on sessions",
                "Designed practical robotics and automation modules",
                "Mentored juniors on projects and fundamentals",
                "Led workshops end-to-end"
            ],
            technologies: ["Robotics", "Automation", "Mentorship", "Teaching"]
        },
        {
            position: "B.Tech, Computer Science & Engineering",
            company: "Harcourt Butler Technical University, Kanpur",
            period: "Aug 2023 - May 2027",
            location: "Kanpur",
            description: "Pursuing B.Tech in CSE with a CGPA of 8.06. Member of the Google Developer Program (2025) and HackerRank-certified in Software Engineering, SQL, and Java.",
            responsibilities: [
                "CGPA: 8.06",
                "100xDevs Cohort 3 — Full Stack, DevOps & Blockchain",
                "Google Developer Program Member (2025)",
                "HackerRank Certified — Software Engineering, SQL, Java"
            ],
            technologies: ["DSA", "Web Development", "DevOps", "Blockchain"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Viralis",
            category: "AI Business Automation",
            technologies: "Next.js, Node.js, MongoDB, WebSockets, Gemini API",
            image: "/images/viralis.png",
            description: "Flagship project, built as Team Lead for the Gemini 3 Hackathon. Automates customer support, content creation, and lead follow-ups by orchestrating multiple LLM APIs through a modular microservices architecture. Features a real-time voice pipeline with sub-500ms latency — validated across 10,000+ API calls and 500+ voice sessions."
        },
        {
            id: 2,
            title: "Digital Blockchain Voting System",
            category: "Blockchain / Full Stack",
            technologies: "TypeScript, MERN Stack, Blockchain, JWT, REST APIs",
            image: "/images/votechain.png",
            description: "Tamper-proof e-voting with blockchain audit logs, role-based JWT auth, and encrypted data — every vote publicly verifiable. Optimized MongoDB queries with connection pooling for a 40% API latency reduction, sustaining 1,000+ concurrent users under load testing."
        },
        {
            id: 3,
            title: "Excel.Draw",
            category: "Real-Time Collaboration",
            technologies: "TypeScript, MERN Stack, WebSockets, Redux",
            image: "/images/placeholder.webp",
            description: "A Figma-like collaborative canvas using WebSocket pub/sub for real-time, conflict-free sync. Manages shared state with Redux across 20+ concurrent users drawing on the same board simultaneously."
        },
        {
            id: 4,
            title: "Navigator",
            category: "AI / SRE Tooling",
            technologies: "TypeScript, AI Agents, Coral Protocol, Real-Time",
            image: "/images/navigator.png",
            description: "An AI-powered SRE Incident War Room built for the Coral × WeMakeDevs Hackathon. Placed Top 50 and won a Claude Max subscription. Coordinates incident response with AI agents in a real-time collaborative environment."
        },
        {
            id: 5,
            title: "Redline",
            category: "AI / Product Tooling",
            technologies: "Next.js 14, TypeScript, Tailwind, Claude API",
            image: "/images/redline.png",
            description: "A design-critique facilitation tool built for the Mind the Product × Novus.ai Hackathon. Uses the Claude API to structure and accelerate design feedback. Live at red-line-one.vercel.app."
        }
        
    ],
    contact: {
        email: "sanyamjainhbtu@gmail.com",
        github: "https://github.com/sanyamhbtu",
        linkedin: "https://www.linkedin.com/in/sanyam-jain-1425611b9/",
        leetcode: "https://leetcode.com/u/sanyamhbtu/",
        twitter: "https://x.com/SanyamJain__04"
    },
    skills: {
        develop: {
            title: "FULL-STACK ENGINEER",
            description: "Production web apps with the MERN stack & TypeScript",
            details: "Building responsive, performant, real-time web applications with React, Next.js, Node.js, and TypeScript. Shipping production features on live platforms — from lazy-loaded frontends to indexed databases, REST APIs, and end-to-end CI/CD deployments.",
            tools: ["React", "Next.js", "Node.js", "Express", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "WebSockets", "Tailwind", "Docker", "CI/CD"]
        },
        design: {
            title: "AI & PROBLEM SOLVING",
            description: "LLM integrations & a LeetCode Knight's DSA foundation",
            details: "Integrating LLMs into real products — automation, agents, and voice pipelines. Backed by a strong competitive-programming foundation: LeetCode Knight (2033), 700+ problems solved in Java.",
            tools: ["Gemini", "OpenAI", "Claude", "Groq", "LLM Integrations", "Prompt Engineering", "Java", "DSA", "REST APIs", "Microservices"]
        }
    }
};


