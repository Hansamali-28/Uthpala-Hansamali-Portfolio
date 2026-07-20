import type {
  NavLink,
  SocialLink,
  SkillCategory,
  Project,
  ExperienceItem,
  CertificateItem,
  GalleryItem,
  Achievement,
  Testimonial,
  AboutStat,
  TimelineEntry,
} from "@/types";

export const SITE = {
  name: "Uthpala Hansamali",
  initials: "UH",
  title: "Health ICT Undergraduate & Data Analytics Enthusiast",
  tagline:
    "Turning healthcare data into meaningful insights through Health ICT and Data Analytics.",
  email: "uthpalahansamali2002@gmail.com",
  location: "Colombo, Sri Lanka",
  cvUrl: "D.D.G.U.H.DUNUVILA.pdf", // CV url or path to the CV file
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const HERO_ROLES: string[] = [
  "Health ICT Undergraduate",
  "Business Management Student",
  "AI & Data Analytics Learner",
  "Nursing Science Background"
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Hansamali-28", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/uthpala-hansamali-170a64295/", icon: "linkedin" },
  { label: "Email", href: "mailto:uthpalahansamali2002@gmail.com", icon: "email" },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=100085108966773", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/uthpala_hansamali_?igsh=ZWx2d3UzdzB0ZXA1", icon: "instagram" },
];

export const ABOUT_INTRO = `I'm a Health ICT undergraduate and Business Management student 
focused on building data-driven healthcare solutions where clinical understanding meets clean 
software engineering. With a background in nursing training, I bring real-world insight into 
healthcare workflows and patient care, helping me design more practical and effective systems.

I’m especially passionate about Data Analytics, while actively developing my skills in AI, machine learning, and full-stack development to support healthcare digital transformation.`;

export const ABOUT_TIMELINE: TimelineEntry[] = [
  {
    year: "2023 - Present ",
    title: "BHSc(Hons) in Health Information and Communication Technology ",
    description:
      "Began undergraduate studies in Health Information and Communication Technology, focusing on how digital systems transform patient care.",
  },
  {
    year: "2026",
    title: "University Capstone Project: Building an  EHR System",
    description:
      "Currently collaborating in a team to design and develop a full-stack Electronic Health Record (EHR) system.",
  },
   {
    year: "2026",
    title: "Focusing on AI & Data Analytics ",
    description:
      "Explored machine learning and data analytics tools like Power BI and Tableau to build predictive healthcare solutions.",
  },
  {
  year: "2024-2025",
  title: "Business Management Coursework",
  description:
   "Completed a certificate program covering core management principles, strategy, and business operations to complement my background in Healthcare ICT."},
  {
  year: "2020 - 2022",
  title: "Advanced Level Education",
  description: "Completed G.C.E. Advanced Level in Technology Stream at B/Mahiyangana National Collage.",
}
 

];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    items: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "Server",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    title: "Healthcare Technology",
    icon: "HeartPulse",
    items: [
      { name: "Electronic Medical Records" },
      { name: "Health Information Systems" },
      { name: "Medical Data Standards" },
    ],
  },
  {
    title: "Data & AI",
    icon: "BrainCircuit",
    items: [
      { name: "Data Analytics" },
      { name: "Machine Learning" },
      { name: "Power BI" },
      { name: "Tableau" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Android Studio" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "codeplay",
    title: "CodePlay",
    description:
      "An interactive coding playground for students to write, run, and share code snippets directly in the browser.",
    longDescription:
      "CodePlay is a lightweight in-browser code editor with live preview, built to help beginner programmers experiment with HTML, CSS, and JavaScript without any setup.",
    image: "/images/projects/codeplay.png",
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/uthpalahansamali/codeplay",
    liveUrl: "https://codey-next-three.vercel.app/",
  },
  {
    id: "Gizmo",
    title: " Gizmo",
    description:
      " e-commerce platform for mobile phone shopping, featuring product listings, shopping cart, and secure checkout.",
    longDescription:
      "Gizmo is a modern e-commerce platform designed for mobile phone shopping, offering a seamless user experience with intuitive product browsing, a robust shopping cart, and a secure checkout process.",
    image: "/images/projects/gizmo.png",
    tags: ["HTML", "MySQL", "CSS"],
    githubUrl: "",
    liveUrl: "https://www.linkedin.com/posts/uthpala-hansamali-170a64295_turning-an-idea-into-reality-gizmo-during-ugcPost-7442167773340004352-4iJX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeGieQBEBHYzTAmorSWPwPZWpxGwAyNDXU",
  },
  /*
  {
    id: "medical-appointment-system",
    title: "Medical Appointment System",
    description:
      "A booking platform that lets patients schedule appointments with doctors based on real-time availability.",
    longDescription:
      "Patients can search doctors by specialty, view live availability, and book, reschedule, or cancel appointments, while clinics get an admin dashboard to manage schedules and reduce no-shows.",
    image: "/images/projects/medical-appointment.svg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/uthpalahansamali/medical-appointment-system",
    liveUrl: "https://appointments-demo.uthpala.dev",
    featured: true,
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Dashboard",
    description:
      "A data visualization dashboard tracking hospital KPIs like bed occupancy, patient inflow, and department performance.",
    longDescription:
      "Built with Power BI-style visual thinking translated into a custom React dashboard, giving hospital administrators real-time insight into occupancy trends, patient inflow, and resource allocation.",
    image: "/images/projects/healthcare-dashboard.svg",
    tags: ["React", "Power BI", "Data Analytics"],
    githubUrl: "https://github.com/uthpalahansamali/healthcare-dashboard",
  },
  {
    id: "disease-prediction-ai",
    title: "Disease Prediction AI",
    description:
      "A machine learning model that predicts the likelihood of common diseases from patient symptoms and history.",
    longDescription:
      "Trained on public clinical datasets, this model uses classification algorithms to estimate disease risk from reported symptoms, wrapped in a simple web interface for quick screening demonstrations.",
    image: "/images/projects/disease-prediction.svg",
    tags: ["Python", "Machine Learning", "Flask"],
    githubUrl: "https://github.com/uthpalahansamali/disease-prediction-ai",
    featured: true,
  },
  {
    id: "health-monitoring-app",
    title: "Health Monitoring Mobile App",
    description:
      "A mobile app for tracking vitals like heart rate, sleep, and steps, with reminders for medication and checkups.",
    longDescription:
      "Designed for everyday self-monitoring, the app logs vitals over time, visualizes trends, and sends gentle reminders for medication schedules and upcoming checkups.",
    image: "/images/projects/health-monitoring.svg",
    tags: ["Android Studio", "Java", "Firebase"],
    githubUrl: "https://github.com/uthpalahansamali/health-monitoring-app",
  },
  {
    id: "electronic-health-record",
    title: "Electronic Health Record System",
    description:
      "A secure EHR system for storing and retrieving patient medical history across multiple healthcare providers.",
    longDescription:
      "Focused on interoperability and security, this EHR prototype allows authorized clinicians to access a unified patient history, lab results, and prescriptions across different care settings.",
    image: "/images/projects/electronic-health-record.svg",
    tags: ["Next.js", "PHP", "MySQL"],
    githubUrl: "https://github.com/uthpalahansamali/electronic-health-record",
  },*/
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "BHSc(Hons) in Health Information and Communication Technology",
    organization: "Gampaha Wickramarachchi University of Indigenous Medicine",
    period: "2023 — Present",
    description:
      "currently pursuing a BSc (Hons) in Health Information and Communication Technology, focusing on healthcare systems, digital health solutions, data management, and the integration of ICT in modern healthcare services. Gaining practical and theoretical knowledge in health informatics, operating systems, programming.",
    location: "yakkala, Sri Lanka",
      type: "education",
  },
  {
    id: "exp-2",
    role: "Certificate in Business Management Studies",
    organization: "Gampaha Wickramarachchi University of Indigenous Medicine",
    period: "2024 —2025",
    description:
      "Completed a certificate program covering core management principles, strategy, and business operations to complement my background in Healthcare ICT." ,
    location: "yakkala, Sri Lanka",
    type: "certification",
  },
  {
    id: "exp-3",
    role: "EHR Unit-Internship",
    organization: "Hemas Hospital (Wattala)",
    period: " 2025 july- 2025 August",
    description:
      "Internship in the EHR unit focusing on electronic patient records, data entry, system support, and healthcare data management processes.",
    location: "Wattala, Sri Lanka",
    type: "work",
  },
  {
    id: "exp-3",
    role: "Development Officer - Internship",
    organization: "Base Hospital - Mahiyangana",
    period: " 2024 March- 2024  April",
    description:
      "Undertook a training placement as a Development Officer, contributing to administrative support and hospital development activities while gaining hands-on experience in healthcare operations and workflow management.",
    location: "Mahiyangana, Sri Lanka",
    type: "work",
  },
  {
    id: "exp-3",
    role: "Training Nurse - Internship",
    organization: "Sethma Hospital (Gampaha)",
    period: "2023 September - 2024 March",
    description:
      "Completed a clinical training internship as a Training Nurse, gaining hands-on experience in patient care, ward assistance, vital signs monitoring, basic clinical procedures, and maintaining patient records under supervision in a hospital environment.",
    location: "Gampaha, Sri Lanka",
    type: "work",
  },
  {
    id: "exp-3",
    role: "Certificate in Nursing Course",
    organization: "Small & Medium Indusrial Development Foundation (SMIDF)",
    period: "2022 - 2023",
    description:
      "Completed a certificate course in Nursing, gaining foundational knowledge in patient care, clinical procedures, and healthcare ethics.",
    location: "Kurunegala, Sri Lanka",
    type: "certification",
  },
  {
    id: "exp-4",
    role: "Advanced Level Examination",
    organization: "B/Mahiyangana National College",
    location: "Mahiyangana, Sri Lanka",
    period: "2019 May — 2022 February",
    description:
      "G.C.E Advanced Level studies completed at B/Mahiyangana National College.",
    type: "education",
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-3",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2026",
    image: "/images/certificates/introduction-to-data-science.png",
  },
  /*{
    id: "cert-1",
    title: "Full-Stack Web Development",
    issuer: "Online Learning Platform",
    date: "2025",
    image: "/images/certificates/cert-fullstack.svg",
  },
  {
    id: "cert-2",
    title: "Machine Learning Foundations",
    issuer: "Online Learning Platform",
    date: "2025",
    image: "/images/certificates/cert-ml.svg",
  },
  
  {
    id: "cert-4",
    title: "Health Information Systems",
    issuer: "University Certification",
    date: "2024",
    image: "/images/certificates/cert-his.svg",
  },
  {
    id: "cert-5",
    title: "React & Next.js Developer",
    issuer: "Online Learning Platform",
    date: "2024",
    image: "/images/certificates/cert-react.svg",
  },
  {
    id: "cert-6",
    title: "Database Design & MySQL",
    issuer: "Online Learning Platform",
    date: "2023",
    image: "/images/certificates/cert-mysql.svg",
  },*/
];

export const ABOUT_STATS: AboutStat[] = [
  { label: "Projects", value: PROJECTS.length, suffix: "+" },
  { label: "Certificates", value: CERTIFICATES.length, suffix: "+" },
  {
    label: "Skills",
    value: SKILL_CATEGORIES.reduce((total, category) => total + category.items.length, 0),
    suffix: "+",
  },
  {
    label: "Years Learning",
    value: Math.max(1, new Date().getFullYear() - 2022),
    suffix: "+",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
 {
  id: "g1",
  title: "Python Workshop",
  category: "Workshops",
  span: "row-span-2",
  images: [
    { src: "/images/gallery/mindmester1.jpg", alt: "SCR project workshop" },
    { src: "/images/gallery/mindmester2.jpg", alt: "SCR project workshop" },
    { src: "/images/gallery/mindmester3.jpg", alt: "SCR project workshop" },
    { src: "/images/gallery/workshop-4.jpg", alt: "SCR project workshop" },
    
  ],
},
  {
    id: "g2",
    title: "AI Workshop",
    category: "Workshops",
    images: [
      { src: "/images/gallery/AIworkshop1.jpeg", alt: "AI workshop (TAS)" },
      { src: "/images/gallery/AIworkshop2.jpeg", alt: "AI workshop (TAS)" },
      { src: "/images/gallery/AIworkshop3.jpeg", alt: "AI workshop (TAS)" },
      { src: "/images/gallery/gallery-6.svg", alt: "AI workshop (TAS)"},
    
    ],
  },
  {
    id: "g3",
    title: "Achievement Event",
    category: "Achievements",
    images: [
      { src: "/images/gallery/gallery-3.svg", alt: "Certificate award ceremony" },
    ],
  },
  {
    id: "g4",
    title: "Campus Life",
    category: "Campus",
    images: [
      { src: "/images/gallery/gallery-7.svg", alt: "Campus life" },
    ],
  },
  {
    id: "g5",
    title: "Hackathon Win",
    category: "Hackathons",
    images: [
      { src: "/images/gallery/gallery-8.svg", alt: "Team hackathon win" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  //{ label: "Hackathons", value: 6 },
  { label: "Projects", value: PROJECTS.length, suffix: "+" },
  { label: "GitHub Repositories", value: 32, suffix: "+" },
  { label: "Certificates", value: CERTIFICATES.length, suffix: "+" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Ishara Perera",
    role: "Lecturer, Health ICT Department",
    avatar: "/images/testimonials/avatar-1.svg",
    quote:
      "Uthpala consistently connects technical solutions back to real patient and clinician needs — a rare quality in a student developer.",
  },
  {
    id: "t2",
    name: "Nadeesha Fernando",
    role: "Hackathon Team Lead",
    avatar: "/images/testimonials/avatar-2.svg",
    quote:
      "Working alongside Uthpala during our hospital dashboard hackathon project, I saw someone who plans carefully and codes cleanly under pressure.",
  },
  {
    id: "t3",
    name: "Kasun Jayawardena",
    role: "Freelance Client",
    avatar: "/images/testimonials/avatar-3.svg",
    quote:
      "The appointment booking site Uthpala built for our clinic just works — fast, simple, and our front desk staff picked it up in a day.",
  },
];
