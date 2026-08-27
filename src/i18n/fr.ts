import type { Translations } from "./types";

const fr: Translations = {
  nav: {
    brand: "Mon porte folio",
    about: "À propos",
    skills: "Compétences",
    stack: "Compétences",
    experience: "Parcours",
    journey: "Parcours",
    projects: "Projets",
    services: "Services",
    contact: "Contact",
    contactButton: "Contact",
    contactMobile: "Me contacter",
    ariaLabel: "Navigation principale",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
  },
  theme: {
    toggle: "Basculer le thème",
  },
  lang: {
    switchTo: "Passer en anglais",
  },
  hero: {
    decorative: "portfolio",
    location: "Antananarivo, Madagascar",
    line1: "Concevoir",
    line2: "l'avenir,",
    line3: "façonner",
    line4: "les idées,",
    lineEm: "magnifier le code.",
    cta: "Voir le portfolio",
    subtitle: "Full Stack Developer, Mobile Engineer & UI/UX Designer.",
    description: "Chaque projet est livré avec clarté, précision et style.",
    tech1: "React · Next.js · Node",
    tech2: "React Native · Expo",
    tech3: "Figma · Motion Design",
    bottomLeft: "Full Stack Capabilities",
    bottomRight: "Design · Code · Motion",
    badge: "★ 2026",
  },
  about: {
    eyebrow: "À propos",
    titleStart: "Un artisan du",
    titleCode: "code",
    titleAnd: "et du",
    titleDesign: "design",
    titleEnd: ".",
    p1: "Développeur Full Stack passionné, je transforme des idées en produits digitaux à fort impact. Mon approche combine rigueur d'ingénieur et sensibilité de designer : chaque interface est pensée pour être belle, rapide et intuitive.",
    p2: "J'ai eu la chance de collaborer avec des startups, des ONG et des entreprises pour livrer des applications web et mobiles utilisées au quotidien par des milliers d'utilisateurs.",
    stats: {
      projects: "Projets livrés",
      technologies: "Technologies",
      experience: "Années d'expérience",
      satisfaction: "Clients satisfaits",
    },
  },
  skills: {
    eyebrow: "Compétences",
    title: "Ma stack technique.",
    databases: "Bases de données",
  },
  experience: {
    eyebrow: "Parcours",
    title: "Expériences.",
    items: [
      {
        date: "2024 — Présent",
        role: "Full Stack Developer",
        company: "Freelance",
        description:
          "Conception et développement d'applications web et mobiles pour clients internationaux. Focus sur la performance, l'accessibilité et le design.",
      },
      {
        date: "2023 — 2024",
        role: "Développeur Web & Mobile",
        company: "Fanainga",
        description:
          "Développement de la plateforme e-learning Moodle et de l'application mobile Arise en React Native.",
      },
      {
        date: "2022 — 2023",
        role: "Développeur Frontend",
        company: "Kolo Disagara",
        description:
          "Refonte complète du site vitrine avec React, mise en place d'un design system et intégration CMS.",
      },
      {
        date: "2021 — 2022",
        role: "Développeur Backend Java",
        company: "Projet RH",
        description:
          "Application de gestion des ressources humaines en Java Spring Boot avec API REST sécurisée.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    titleStart: "Projets",
    titleAccent: "sélectionnés",
    titleEnd: ".",
    items: [
      {
        title: "Application RH",
        tag: "Web · Entreprise",
        description:
          "Système complet de gestion des ressources humaines : employés, congés, paie, évaluations.",
      },
      {
        title: "Kolo Disagara",
        tag: "Site vitrine",
        description:
          "Site vitrine artisanal élégant, storytelling visuel et catalogue produit responsive.",
      },
      {
        title: "Moodle Fanainga",
        tag: "Plateforme e-learning",
        description:
          "Plateforme de formation en ligne personnalisée sur Moodle avec thème et modules sur mesure.",
      },
      {
        title: "Arise",
        tag: "Mobile · React Native",
        description:
          "Application mobile cross-platform avec expérience premium, animations fluides et sync temps réel.",
      },
      {
        title: "Système d'emails Pro",
        tag: "Backend · Templates",
        description:
          "Infrastructure d'envoi d'emails transactionnels avec templates responsives et tracking.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Ce que je peux faire pour vous.",
    items: [
      {
        title: "Développement Web",
        description:
          "Sites vitrines, SaaS et plateformes sur mesure avec React et Next.js.",
      },
      {
        title: "Applications Mobile",
        description:
          "Apps iOS & Android performantes en React Native, du concept au store.",
      },
      {
        title: "UI/UX Design",
        description:
          "Interfaces modernes, design systems cohérents et prototypes interactifs.",
      },
      {
        title: "Optimisation & SEO",
        description:
          "Performance web, Core Web Vitals et référencement technique avancé.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    titleStart: "Discutons de votre",
    titleAccent: "projet",
    titleEnd: ".",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "Email",
      emailPlaceholder: "vous@email.com",
      subject: "Sujet",
      subjectPlaceholder: "Sujet du projet",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      submit: "Envoyer le message",
      sendingButton: "Envoi en cours...",
      sending: "Envoi du message en cours...",
      success: "Merci ! Votre message a bien été envoyé.",
      error:
        "Le message n'a pas pu être envoyé. Réessayez ou contactez-moi par email.",
      missingConfig:
        "Le service email n'est pas encore configuré. Ajoutez les variables EmailJS.",
    },
    details: {
      phone: "Téléphone",
      location: "Localisation",
      social: "Réseaux",
    },
  },
  footer: {
    title: "Let's build together.",
    credit: "Conçu & développé avec passion.",
  },
};

export default fr;
