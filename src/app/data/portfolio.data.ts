import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';
import { Stat } from '../models/stat.model';

/** Central content for the portfolio — edit values here to update the site. */
export const PROFILE = {
  name: 'Swaraj Chandra Biswas',
  role: 'Full Stack Developer & ML Engineer',
  photo: 'assets/images/profile/swaraj.jpg',
  resumeUrl: 'assets/docs/resume-swaraj-chandra-biswas.pdf',
  tagline:
    'Results-driven Full Stack Developer and ML Engineer building scalable web, mobile, and AI-driven applications. I specialize in full-stack development, machine learning, and NLP, turning complex problems into clean, production-ready software.',
  about: [
    "I'm a Full Stack Developer and Machine Learning engineer with a B.Sc. in Computer Science & Engineering from KUET (CGPA: 3.37/4.00). I currently serve as an Assistant Software Engineer at Millennium Information Solution Ltd., building end-to-end web applications, following prior research and development experience at Shanghai BDCOM. My work spans full-stack development, applied machine learning, and natural language processing.",
    'I work fluently across backend, frontend, and mobile ecosystems, leveraging frameworks such as Spring Boot, FastAPI, and Flask alongside database systems including MySQL, Oracle SQL, PostgreSQL, and Firebase. I pair strong engineering fundamentals with research experience in NLP and deep learning, and I stay sharp through competitive programming, having solved 700+ problems across multiple platforms.',
  ],
  email: 'swarajchbiswas44@gmail.com',
  location: 'Bangladesh',
  github: 'https://github.com/Swaraj44',
  linkedin: 'https://www.linkedin.com/in/swaraj-chandra-biswas/',
};

export const STATS: Stat[] = [
  { value: '900+', label: 'Problems Solved' },
  { value: '10+', label: 'Major Projects' },
  { value: '1010th', label: 'CodeJam Farewell Round A, 2023' },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Assistant Software Engineer',
    company: 'Millennium Information Solution Ltd.',
    period: 'Jan 2026 – Present',
    description:
      'Designing and developing full-stack web applications end-to-end, from RESTful API design and database modeling to responsive, user-focused front-end interfaces. Working within an agile team to ship scalable, production-grade software while continuously improving performance, security, and maintainability.',
    tech: ['Spring Boot', 'FastAPI', 'Python', 'JavaScript', 'MySQL', 'Oracle SQL'],
  },
  {
    role: 'Research & Development Engineer',
    company: 'Shanghai BDCOM Information Technology Co. Ltd.',
    period: 'Jun 2025 – Aug 2025',
    description:
      'Contributed to research and development initiatives, prototyping and evaluating technical solutions through hands-on experimentation. Supported product innovation via analysis, documentation, and collaborative problem-solving on emerging technologies.',
    tech: ['C/C++','Linux', 'Research & Development', 'Prototyping', 'Technical Analysis'],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'fa-solid fa-code',
    items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'PHP'],
  },
  {
    title: 'Web & Mobile Development',
    icon: 'fa-solid fa-laptop-code',
    items: ['HTML', 'CSS', 'Spring Boot', 'FastAPI', 'Flask', 'Laravel', 'Android (Java)', 'iOS (Swift)'],
  },
  {
    title: 'Machine Learning',
    icon: 'fa-solid fa-brain',
    items: [
      'Natural Language Processing (NLP)',
      'TensorFlow',
      'PyTorch',
      'HuggingFace',
      'Ollama',
      'vLLM',
      'LangChain',
      'OpenClaw',
    ],
  },
  {
    title: 'Databases',
    icon: 'fa-solid fa-database',
    items: ['MySQL', 'Oracle SQL', 'PostgreSQL (Vector DB)', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: ['GitHub', 'Docker', 'Keycloak', 'Flowise', 'Portainer', 'GitLab CI/CD'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'PandaMart — E-Commerce Platform',
    description:
      'A full-stack e-commerce web application built with React (Vite) and Next.js, powered by an Express.js and MongoDB REST API. Features secure authentication, a searchable product catalog, shopping cart, checkout, order tracking, and an admin dashboard for product uploads, all within a responsive, mobile-friendly UX.',
    image: 'assets/images/projects/pandamart.png',
    tech: ['React', 'Next.js', 'Express.js', 'MongoDB', 'REST API'],
    githubUrl: 'https://github.com/Swaraj44/PandaMart',
  },
  {
    title: 'Ababil AI — Voice-Based Banking Automation',
    description:
      'A voice-enabled banking automation platform built in Java with Spring Boot and AI MCP tooling to drive hands-free financial transactions. Supports own-account and interbank fund transfers, credit card payments, and mobile recharges, all secured with OTP-based verification for safe, conversational banking.',
    image: 'assets/images/projects/digital_banking_with_ai.png',
    tech: ['Java', 'Spring Boot', 'AI MCP', 'Voice Automation', 'OTP Security'],
    githubUrl: 'https://github.com/Swaraj44',
  },
  {
    title: 'BillForge — Automated Billing System',
    description:
      "BuildForge KUET Teachers' Edition — automated large-scale teacher billing by extracting and structuring unstructured billing data using OOP principles. Built with Python (Tkinter) and FastAPI for bill generation and English-to-Bangla (BDT) conversion. Integrated SQLite and SMTP services. Won 2nd Best Innovative Ideas by KUET, 2024.",
    image: 'assets/images/projects/billforge.png',
    tech: ['Python', 'Tkinter', 'FastAPI', 'SQLite', 'SMTP'],
    githubUrl: 'https://github.com/Swaraj44/BillForge',
  },
  {
    title: 'BanglaNERFusion — Transformer Ensembles with CRF for Bangla NER',
    description:
      'Designed a Transformer-based ensemble architecture combined with CRF for Bangla Named Entity Recognition. Achieved 97.6% accuracy with 90.5% F1 score using PyTorch and HuggingFace. Won 3rd Best Abstract at the IEEE CS BDC Summer Symposium.',
    image: 'assets/images/projects/nlpEns.jpg',
    tech: ['BanglaBERT', 'RemBERT', 'CRF Layer', 'Transformers', 'PyTorch'],
    demoUrl: 'https://huggingface.co/spaces/Swaraj66/NER_Ensemble_Model_With_CRF',
  },
  {
    title: 'University of Oxford Management System',
    description:
      'A full-featured web-based university management system built with Laravel, providing dedicated panels for administrators, teachers, and students. Streamlines admission applications, result publishing, and academic workflow management with enhanced transparency and accessibility.',
    image: 'assets/images/projects/oxlaravel.png',
    tech: ['Laravel', 'PHP', 'MySQL', 'Web Application'],
    githubUrl: 'https://github.com/Swaraj44/University_of_Oxford_Management_System',
  },
  {
    title: 'University Management System — Android App',
    description:
      'An Android-based university management system featuring dedicated panels for administrators, teachers, and students. Integrates Firebase authentication for secure login and provides real-time chat functionality, streamlining essential academic and administrative activities.',
    image: 'assets/images/projects/OxfordAndroid.jpg',
    tech: ['Java', 'Android Studio', 'Firebase', 'Real-time Chat'],
    githubUrl: 'https://github.com/Swaraj44/University-of-Oxford-Management-System',
  },
  {
    title: 'Backgammon Game — AI Powered',
    description:
      'A Python-based Backgammon game enhanced with AI, applying advanced game theory techniques including heuristic search, alpha-beta pruning, and fuzzy logic for strategic decision-making and competitive gameplay.',
    image: 'assets/images/projects/backgammon-game.svg',
    tech: ['Python', 'Game Theory', 'Heuristic Search', 'Alpha-Beta Pruning', 'Fuzzy Logic'],
    githubUrl: 'https://github.com/Swaraj44/Backgammon-Game',
  },
  {
    title: 'Day Optimizer — iOS App',
    description:
      'An iOS productivity app built with Swift for daily activity optimization. Features note-taking, iCloud integration for cloud sync, and real-time weather updates using a Weather API, combining task management with contextual weather insights for improved planning.',
    image: 'assets/images/projects/dayoptimizer.png',
    tech: ['Swift', 'iOS', 'Firebase Realtime Database', 'Weather API'],
    githubUrl: 'https://github.com/Swaraj44/iOS-Project---Day-Optimizer',
  },
  {
    title: 'University Management System — CLI Tool',
    description:
      'A lightweight CLI-based university management system built in C for handling student records, course management, and administrative tasks. Designed for simplicity and speed in managing academic workflows.',
    image: 'assets/images/projects/versitycli.png',
    tech: ['C', 'File I/O', 'Data Structures', 'Command-line Interface'],
    githubUrl: 'https://github.com/Swaraj44/University-Management-System',
  },
  {
    title: 'Compiler Project — Custom Programming Language',
    description:
      'Designed and implemented a custom programming language with a compiler built using Flex and Bison. Covers lexical analysis, syntax parsing, and semantic checks, providing a strong foundation in compiler design principles and language processing.',
    image: 'assets/images/projects/compiller.png',
    tech: ['Flex', 'Bison', 'C', 'Compiler Design'],
    githubUrl: 'https://github.com/Swaraj44/Compiler-Project',
  },
];
