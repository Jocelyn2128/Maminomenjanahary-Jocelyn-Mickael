import type { Translations } from "./types";

const en: Translations = {
  nav: {
    brand: "Mon porte folio",
    about: "About",
    skills: "Stack",
    stack: "Stack",
    experience: "Journey",
    journey: "Journey",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
    contactButton: "Contact",
    contactMobile: "Get in touch",
    ariaLabel: "Main navigation",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  theme: {
    toggle: "Toggle theme",
  },
  lang: {
    switchTo: "Switch to French",
  },
  hero: {
    decorative: "portfolio",
    location: "Antananarivo, Madagascar",
    line1: "Design",
    line2: "the future,",
    line3: "shape",
    line4: "ideas,",
    lineEm: "elevate the code.",
    cta: "View the portfolio",
    subtitle: "Full Stack Developer, Mobile Engineer & UI/UX Designer.",
    description:
      "Every project is delivered with clarity, precision, and style.",
    tech1: "React · Next.js · Node",
    tech2: "React Native · Expo",
    tech3: "Figma · Motion Design",
    bottomLeft: "Full Stack Capabilities",
    bottomRight: "Design · Code · Motion",
    badge: "★ 2026",
  },
  about: {
    eyebrow: "About",
    titleStart: "A craftsman of",
    titleCode: "code",
    titleAnd: "and",
    titleDesign: "design",
    titleEnd: ".",
    p1: "Full Stack Developer passionate about turning ideas into high-impact digital products. My approach combines engineering rigor with designer sensitivity: every interface is crafted to be beautiful, fast, and intuitive.",
    p2: "I've had the opportunity to collaborate with startups, NGOs, and companies to deliver web and mobile applications used daily by thousands of users.",
    stats: {
      projects: "Projects delivered",
      technologies: "Technologies",
      experience: "Years of experience",
      satisfaction: "Satisfied clients",
    },
  },
  skills: {
    eyebrow: "Skills",
    title: "My tech stack.",
    databases: "Databases",
  },
  experience: {
    eyebrow: "Journey",
    title: "Experience.",
    items: [
      {
        date: "2024 — Present",
        role: "Full Stack Developer",
        company: "Freelance",
        description:
          "Design and development of web and mobile applications for international clients. Focus on performance, accessibility, and design.",
      },
      {
        date: "2023 — 2024",
        role: "Web & Mobile Developer",
        company: "Fanainga",
        description:
          "Development of the Moodle e-learning platform and the Arise mobile application in React Native.",
      },
      {
        date: "2022 — 2023",
        role: "Frontend Developer",
        company: "Kolo Disagara",
        description:
          "Full redesign of the showcase site with React, implementation of a design system, and CMS integration.",
      },
      {
        date: "2021 — 2022",
        role: "Java Backend Developer",
        company: "Projet RH",
        description:
          "Human resources management application built with Java Spring Boot with a secure REST API.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    titleStart: "Selected",
    titleAccent: "projects",
    titleEnd: ".",
    items: [
      {
        title: "HR Application",
        tag: "Web · Enterprise",
        description:
          "Complete human resources management system: employees, leaves, payroll, evaluations.",
      },
      {
        title: "Kolo Disagara",
        tag: "Showcase site",
        description:
          "Elegant artisanal showcase site with visual storytelling and responsive product catalog.",
      },
      {
        title: "Moodle Fanainga",
        tag: "E-learning platform",
        description:
          "Customized online training platform built on Moodle with bespoke theme and modules.",
      },
      {
        title: "Arise",
        tag: "Mobile · React Native",
        description:
          "Cross-platform mobile application with premium experience, smooth animations, and real-time sync.",
      },
      {
        title: "Pro Email System",
        tag: "Backend · Templates",
        description:
          "Transactional email infrastructure with responsive templates and tracking.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What I can do for you.",
    items: [
      {
        title: "Web Development",
        description:
          "Showcase sites, SaaS, and custom platforms built with React and Next.js.",
      },
      {
        title: "Mobile Applications",
        description:
          "High-performance iOS & Android apps in React Native, from concept to store.",
      },
      {
        title: "UI/UX Design",
        description:
          "Modern interfaces, consistent design systems, and interactive prototypes.",
      },
      {
        title: "Optimization & SEO",
        description:
          "Web performance, Core Web Vitals, and advanced technical SEO.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    titleStart: "Let's talk about your",
    titleAccent: "project",
    titleEnd: ".",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      subject: "Subject",
      subjectPlaceholder: "Project subject",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send message",
      sendingButton: "Sending...",
      sending: "Sending your message...",
      success: "Thank you! Your message has been sent.",
      error: "The message could not be sent. Please try again or email me.",
      missingConfig:
        "The email service is not configured yet. Add the EmailJS variables.",
    },
    details: {
      phone: "Phone",
      location: "Location",
      social: "Social",
    },
  },
  footer: {
    title: "Let's build together.",
    credit: "Designed & developed with passion.",
  },
};

export default en;
