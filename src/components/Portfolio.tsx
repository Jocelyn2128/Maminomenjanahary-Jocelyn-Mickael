import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Smartphone,
  Palette,
  Database,
  Server,
  Layers,
  Rocket,
  Zap,
  Send,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import portrait from "@/assets/portrait.png";
import projHr from "@/assets/project-hr.jpg";
import projKolo from "@/assets/project-kolo.png";
import projMoodle from "@/assets/project-moodle.jpg";
import projArise from "@/assets/project-arise.png";
import projEmail from "@/assets/project-email.jpg";

import { useI18n } from "@/i18n/context";

const NAV_IDS = [
  "about",
  "skills",
  "experience",
  "projects",
  "services",
  "contact",
] as const;

const SKILL_ICONS = [
  Code2,
  Server,
  Smartphone,
  Palette,
  Database,
  Layers,
] as const;
const SERVICE_ICONS = [Rocket, Smartphone, Palette, Zap] as const;

const PROJECT_META = [
  {
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    image: projHr,
    imageAlt:
      "Capture du projet Application RH de gestion des ressources humaines",
    github: "#",
    demo: "#",
  },
  {
    tech: ["React", "Tailwind", "Framer Motion"],
    image: projKolo,
    imageAlt: "Capture du site vitrine Kolo Disagara",
    imageFrameClassName: "flex items-center justify-center p-6 md:p-10",
    imageClassName: "h-full w-full object-contain",
    github: "#",
    demo: "https://kolo-disagara.com",
  },
  {
    tech: ["Moodle", "PHP", "MySQL", "SCSS"],
    image: projMoodle,
    imageAlt: "Capture de la plateforme e-learning Moodle Fanainga",
    github: "#",
    demo: "https://formation.fanainga.mg",
  },
  {
    tech: ["React Native", "Expo", "TypeScript"],
    image: projArise,
    imageAlt: "Capture de l'application mobile Arise en React Native",
    imageFrameClassName: "flex items-center justify-center p-6 md:p-10",
    imageClassName: "h-full w-full object-contain",
    github: "#",
    demo: "#",
  },
  {
    tech: ["Node.js", "EJS", "Nodemailer"],
    image: projEmail,
    imageAlt: "Capture du système d'emails transactionnels Pro",
    github: "#",
    demo: "#",
  },
] as const;

type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  description: string;
};

type ContactFormStatus =
  "idle" | "sending" | "success" | "error" | "missing-config";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useCursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    // Skip the pointer glow entirely on touch devices / reduced-motion users —
    // avoids a mousemove listener on mobile where it's invisible anyway.
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouch || reduced) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id={id}
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="mb-8 flex min-w-0 items-end justify-between gap-6 sm:mb-10 md:mb-12">
          <div className="min-w-0">
            <div className="mb-4 flex min-w-0 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
              <span className="h-px w-6 shrink-0 bg-foreground/40 sm:w-10" />[
              {eyebrow}]
            </div>
            <h2
              className="text-3xl font-normal leading-[1.06] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h2>
          </div>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const cursor = useCursorGlow();
  const { t } = useI18n();
  const [contactStatus, setContactStatus] = useState<ContactFormStatus>("idle");

  const stats = [
    { value: "20+", label: t("about.stats.projects") },
    { value: "13+", label: t("about.stats.technologies") },
    { value: "2+", label: t("about.stats.experience") },
    { value: "99%", label: t("about.stats.satisfaction") },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      items: ["Node.js", "Express", "Java Spring", "REST APIs", "EJS"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      items: ["React Native", "Expo", "iOS & Android", "Push Notifications"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      items: ["Figma", "Design Systems", "Prototyping", "Motion Design"],
    },
    {
      icon: Database,
      title: t("skills.databases"),
      items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Supabase"],
    },
    {
      icon: Layers,
      title: "DevOps & Tools",
      items: ["Git", "Docker", "CI/CD", "Vercel", "Linux"],
    },
  ];

  const experiences: ExperienceItem[] = Array.from({ length: 4 }, (_, i) => ({
    date: t(`experience.items.${i}.date`),
    role: t(`experience.items.${i}.role`),
    company: t(`experience.items.${i}.company`),
    description: t(`experience.items.${i}.description`),
  }));

  const projects = Array.from({ length: 5 }, (_, i) => ({
    ...PROJECT_META[i],
    title: t(`projects.items.${i}.title`),
    tag: t(`projects.items.${i}.tag`),
    description: t(`projects.items.${i}.description`),
  }));

  const services = [
    {
      icon: SERVICE_ICONS[0],
      title: t("services.items.0.title"),
      description: t("services.items.0.description"),
    },
    {
      icon: SERVICE_ICONS[1],
      title: t("services.items.1.title"),
      description: t("services.items.1.description"),
    },
    {
      icon: SERVICE_ICONS[2],
      title: t("services.items.2.title"),
      description: t("services.items.2.description"),
    },
    {
      icon: SERVICE_ICONS[3],
      title: t("services.items.3.title"),
      description: t("services.items.3.description"),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-60 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, var(--glass-tint), transparent 40%)`,
        }}
      />

      <Nav />

      <main>
        <header className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 left-[8%] border-l border-dashed border-foreground/15 md:left-[18%]" />
            <div className="absolute inset-y-0 right-[8%] border-l border-dashed border-foreground/15 md:right-[18%]" />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-2 select-none whitespace-nowrap text-center text-[28vw] leading-none tracking-tighter text-foreground/95 opacity-80 sm:text-[26vw] md:bottom-4 md:text-[22vw] md:opacity-90"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
            }}
          >
            {t("hero.decorative")}
          </div>
          <div className="relative mx-auto flex max-w-6xl items-center justify-center px-4 text-center text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:px-6 sm:text-xs sm:tracking-[0.24em]">
            [ {t("hero.location")} ]
          </div>
          <motion.div
            style={{ y: heroY }}
            className="relative mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-8 px-4 sm:mt-10 sm:gap-10 sm:px-6 md:mt-16 md:grid-cols-[minmax(0,1.1fr)_minmax(14rem,0.9fr)_minmax(0,1.1fr)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1
                className="text-[clamp(2.4rem,16vw,4rem)] font-normal leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {t("hero.line1")} <br />
                {t("hero.line2")} <br />
                {t("hero.line3")} <br />
                {t("hero.line4")} <br />
                <em className="font-medium">{t("hero.lineEm")}</em>
              </h1>
              <a
                href="#projects"
                className="mt-8 inline-flex max-w-full items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground sm:mt-10 sm:text-sm sm:tracking-[0.22em]"
              >
                [ {t("hero.cta")} ]
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs"
            >
              <div
                className="relative overflow-hidden bg-cream/90 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
                style={{ background: "var(--cream)" }}
              >
                <img
                  src={portrait}
                  alt="Portrait de Maminomenjanahary Jocelyn Mickael, développeur Full Stack à Antananarivo"
                  width={800}
                  height={1000}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(min-width: 768px) 20rem, 15rem"
                  className="block h-auto w-full object-cover"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              <div
                className="absolute -right-2 -top-3 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/40 text-[9px] uppercase tracking-widest sm:-right-4 sm:-top-4 sm:h-16 sm:w-16 sm:text-[10px]"
                style={{
                  background: "var(--background)",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {t("hero.badge")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="min-w-0 md:pt-10"
            >
              <div
                className="text-4xl font-normal leading-none tracking-tight sm:text-6xl md:text-7xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                20<sup className="text-2xl align-super">+</sup>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground md:max-w-xs">
                {t("hero.subtitle")}
                <br />
                {t("hero.description")}
              </p>
              <div className="mt-7 space-y-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:text-xs sm:tracking-[0.22em]">
                <div>— {t("hero.tech1")}</div>
                <div>— {t("hero.tech2")}</div>
                <div>— {t("hero.tech3")}</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto mt-12 flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:px-6 sm:text-xs sm:tracking-[0.22em] md:mt-20 lg:mt-24">
            <span>{t("hero.bottomLeft")}</span>
            <span>{t("hero.bottomRight")}</span>
          </div>
        </header>

        <Section
          id="about"
          eyebrow={t("about.eyebrow")}
          title={
            <>
              {t("about.titleStart")}{" "}
              <span className="text-gradient">{t("about.titleCode")}</span>{" "}
              {t("about.titleAnd")}{" "}
              <span className="text-gradient">{t("about.titleDesign")}</span>
              {t("about.titleEnd")}
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            <p className="min-w-0 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("about.p1")}
            </p>
            <p className="min-w-0 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("about.p2")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:mt-14 sm:gap-4 md:mt-16 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass min-w-0 rounded-2xl p-5 sm:p-6"
              >
                <div
                  className="text-3xl font-semibold text-gradient sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow={t("skills.eyebrow")}
          title={<>{t("skills.title")}</>}
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative min-w-0 overflow-hidden rounded-2xl glass p-5 transition-all hover:border-primary/40 sm:p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <s.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold sm:text-xl">
                  {s.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="max-w-full rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow={t("experience.eyebrow")}
          title={<>{t("experience.title")}</>}
        >
          <div className="relative">
            <div
              className="absolute left-3 top-2 bottom-2 w-px sm:left-4 md:left-1/2"
              style={{ background: "var(--gradient-brand)", opacity: 0.4 }}
            />
            <div className="space-y-8">
              {experiences.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative grid min-w-0 grid-cols-1 gap-4 pl-9 sm:pl-12 md:grid-cols-2 md:gap-12 md:pl-0 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div
                    className={`hidden md:block ${i % 2 === 0 ? "text-right" : ""}`}
                  >
                    {i % 2 === 0 && <ExperienceCard e={e} />}
                  </div>
                  <div className="relative min-w-0 md:pl-0">
                    <div
                      className="absolute -left-9 top-6 h-4 w-4 rounded-full border-2 border-background sm:-left-12 md:left-1/2 md:-translate-x-1/2"
                      style={{ background: "var(--gradient-brand)" }}
                    />
                    <div className="md:hidden">
                      <ExperienceCard e={e} />
                    </div>
                    {i % 2 === 1 && (
                      <div className="hidden md:block">
                        <ExperienceCard e={e} />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow={t("projects.eyebrow")}
          title={
            <>
              {t("projects.titleStart")}{" "}
              <span className="text-gradient">{t("projects.titleAccent")}</span>
              {t("projects.titleEnd")}
            </>
          }
        >
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.1 }}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl glass transition-all hover:border-primary/40 sm:rounded-3xl ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] ${
                    "imageFrameClassName" in p
                      ? ((p as any).imageFrameClassName ?? "")
                      : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                      "imageClassName" in p
                        ? ((p as any).imageClassName ?? "object-cover")
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute right-3 top-3 rounded-full glass p-2 opacity-100 transition-opacity sm:right-4 sm:top-4 sm:p-3 md:opacity-0 md:group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6 md:p-8">
                  <div className="text-xs uppercase tracking-[0.12em] text-primary sm:tracking-wider">
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-4 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-4">
                    <div className="flex min-w-0 flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="max-w-full rounded-full border border-foreground/10 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-muted-foreground">
                      <Github className="h-4 w-4" />
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow={t("services.eyebrow")}
          title={<>{t("services.title")}</>}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex min-w-0 flex-col gap-4 overflow-hidden rounded-2xl glass p-5 transition-all hover:border-primary/40 min-[420px]:flex-row min-[420px]:items-start sm:gap-6 sm:p-8"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <s.icon className="h-6 w-6 text-background" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow={t("contact.eyebrow")}
          title={
            <>
              {t("contact.titleStart")}{" "}
              <span className="text-gradient">{t("contact.titleAccent")}</span>
              {t("contact.titleEnd")}
            </>
          }
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,1fr)] md:gap-8">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setContactStatus("idle");

                if (
                  !EMAILJS_SERVICE_ID ||
                  !EMAILJS_TEMPLATE_ID ||
                  !EMAILJS_PUBLIC_KEY
                ) {
                  setContactStatus("missing-config");
                  return;
                }

                const form = e.currentTarget;
                const formData = new FormData(form);
                setContactStatus("sending");

                try {
                  const response = await fetch(
                    "https://api.emailjs.com/api/v1.0/email/send",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        service_id: EMAILJS_SERVICE_ID,
                        template_id: EMAILJS_TEMPLATE_ID,
                        user_id: EMAILJS_PUBLIC_KEY,
                        template_params: {
                          from_name: formData.get("name"),
                          from_email: formData.get("email"),
                          subject: formData.get("subject"),
                          message: formData.get("message"),
                          to_email: "mami2003nomenjanahary@gmail.com",
                        },
                      }),
                    },
                  );

                  if (!response.ok) {
                    throw new Error("EmailJS request failed");
                  }

                  form.reset();
                  setContactStatus("success");
                } catch {
                  setContactStatus("error");
                }
              }}
              className="glass min-w-0 rounded-2xl p-5 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field
                  label={t("contact.form.name")}
                  name="name"
                  placeholder={t("contact.form.namePlaceholder")}
                />
                <Field
                  label={t("contact.form.email")}
                  name="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                />
              </div>
              <Field
                label={t("contact.form.subject")}
                name="subject"
                placeholder={t("contact.form.subjectPlaceholder")}
              />
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t("contact.form.message")}
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="min-h-36 w-full resize-y rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              {contactStatus !== "idle" && (
                <p
                  role="status"
                  className={`mt-4 text-sm ${
                    contactStatus === "success"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {contactStatus === "sending" && t("contact.form.sending")}
                  {contactStatus === "success" && t("contact.form.success")}
                  {contactStatus === "error" && t("contact.form.error")}
                  {contactStatus === "missing-config" &&
                    t("contact.form.missingConfig")}
                </p>
              )}
              <button
                type="submit"
                disabled={contactStatus === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                {contactStatus === "sending"
                  ? t("contact.form.sendingButton")
                  : t("contact.form.submit")}
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="flex min-w-0 flex-col gap-4">
              <ContactCard
                icon={Mail}
                label="Email"
                value="mami2003nomenjanahary@gmail.com"
              />
              <ContactCard
                icon={Phone}
                label={t("contact.details.phone")}
                value="+261 34 87 464 53"
              />
              <ContactCard
                icon={MapPin}
                label={t("contact.details.location")}
                value="Antananarivo, MG"
              />
              <div className="glass min-w-0 rounded-2xl p-5 sm:p-6">
                <div className="mb-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:tracking-wider">
                  {t("contact.details.social")}
                </div>
                <div className="flex flex-wrap gap-3">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 transition-all hover:border-primary hover:bg-primary/10"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function ExperienceCard({ e }: { e: ExperienceItem }) {
  return (
    <div className="glass min-w-0 rounded-2xl p-5 sm:p-6">
      <div className="text-xs font-medium uppercase tracking-[0.12em] text-primary sm:tracking-wider">
        {e.date}
      </div>
      <h3 className="mt-2 text-lg font-semibold sm:text-xl">{e.role}</h3>
      <div className="text-sm text-muted-foreground">{e.company}</div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {e.description}
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="mt-4 min-w-0 md:mt-0">
      <label className="mb-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:tracking-wider">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="glass flex min-w-0 items-center gap-4 rounded-2xl p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.12em] text-muted-foreground sm:tracking-wider">
          {label}
        </div>
        <div className="text-sm font-medium break-words">{value}</div>
      </div>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
      aria-label={t("nav.ariaLabel")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 text-lg"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="truncate italic">{t("nav.brand")}</span>
        </a>
        <div className="hidden min-w-0 items-center gap-4 px-2 py-1.5 md:flex lg:gap-6">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              [{t("nav." + id)}]
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-foreground/40 px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background md:inline-flex lg:px-5 lg:tracking-[0.22em]"
          >
            [ {t("nav.contactButton")} ]
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            aria-label={t("lang.switchTo")}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass text-foreground text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="glass ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-x-0 top-[64px] z-40 mx-3 max-h-[calc(100dvh-5rem)] origin-top overflow-y-auto rounded-2xl glass p-4 transition-all sm:mx-4 sm:rounded-3xl sm:p-6 md:hidden ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <ul className="flex min-w-0 flex-col gap-1">
          {NAV_IDS.map((id, idx) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block min-w-0 rounded-xl px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-foreground/5 sm:px-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                <span className="mr-2 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:tracking-[0.2em]">
                  0{idx + 1}
                </span>
                [{t("nav." + id)}]
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 flex w-full items-center justify-center rounded-full border border-foreground/40 px-5 py-3 text-center text-xs uppercase tracking-[0.14em] sm:tracking-[0.22em]"
        >
          [ {t("nav.contactMobile")} ]
        </a>
      </div>
    </nav>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { t } = useI18n();
  useEffect(() => {
    const stored =
      (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    setTheme(stored);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const r = document.documentElement;
    r.classList.remove("dark", "light");
    r.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label={t("theme.toggle")}
      className="ml-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-105 sm:ml-2"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative mt-20 border-t border-foreground/10">
      <div
        className="absolute inset-x-0 -top-40 h-40 opacity-40"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex min-w-0 flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div
            className="text-xl font-semibold text-gradient sm:text-2xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {t("footer.title")}
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. {t("footer.credit")}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
