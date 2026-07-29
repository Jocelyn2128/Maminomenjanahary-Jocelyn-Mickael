import { a as __toESM } from "../_runtime.mjs";
import { i as motion, n as useTransform, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as portrait_default, r as useI18n } from "./portrait-BOWx7Tqc.mjs";
import { _ as Database, a as Server, c as Phone, d as Menu, f as MapPin, g as Github, h as Layers, i as Smartphone, l as Palette, m as Linkedin, n as X, o as Send, p as Mail, r as Sun, s as Rocket, t as Zap, u as Moon, v as CodeXml, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-VDSMO9UF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var project_hr_default = "/assets/project-hr-C1B0u5w3.jpg";
var project_kolo_default = "/assets/project-kolo-DHg52MSL.png";
var project_moodle_default = "/assets/project-moodle-CeNkqfry.jpg";
var project_arise_default = "/assets/project-arise-4h68woND.png";
var project_email_default = "/assets/project-email-BiUP_eOA.jpg";
var NAV_IDS = [
	"about",
	"skills",
	"experience",
	"projects",
	"services",
	"contact"
];
var SERVICE_ICONS = [
	Rocket,
	Smartphone,
	Palette,
	Zap
];
var PROJECT_META = [
	{
		tech: [
			"Java",
			"Spring Boot",
			"PostgreSQL",
			"React"
		],
		image: project_hr_default,
		github: "#",
		demo: "#"
	},
	{
		tech: [
			"React",
			"Tailwind",
			"Framer Motion"
		],
		image: project_kolo_default,
		imageFrameClassName: "flex items-center justify-center p-6 md:p-10",
		imageClassName: "h-full w-full object-contain",
		github: "#",
		demo: "https://kolo-disagara.com"
	},
	{
		tech: [
			"Moodle",
			"PHP",
			"MySQL",
			"SCSS"
		],
		image: project_moodle_default,
		github: "#",
		demo: "https://formation.fanainga.mg"
	},
	{
		tech: [
			"React Native",
			"Expo",
			"TypeScript"
		],
		image: project_arise_default,
		imageFrameClassName: "flex items-center justify-center p-6 md:p-10",
		imageClassName: "h-full w-full object-contain",
		github: "#",
		demo: "#"
	},
	{
		tech: [
			"Node.js",
			"EJS",
			"Nodemailer"
		],
		image: project_email_default,
		github: "#",
		demo: "#"
	}
];
function useCursorGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const isTouch = window.matchMedia("(hover: none)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (isTouch || reduced) return;
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return pos;
}
function Section({ id, eyebrow, title, children }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-100px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		ref,
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: inView ? {
				opacity: 1,
				y: 0
			} : {},
			transition: {
				duration: .6,
				ease: "easeOut"
			},
			className: "mx-auto max-w-6xl px-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex items-end justify-between gap-6 md:mb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.24em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-foreground/40" }),
						"[",
						eyebrow,
						"]"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-normal leading-[1.05] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl",
					style: { fontFamily: "'Cormorant Garamond', serif" },
					children: title
				})] })
			}), children]
		})
	});
}
function Portfolio() {
	const { scrollYProgress } = useScroll();
	const heroY = useTransform(scrollYProgress, [0, .3], [0, -100]);
	const cursor = useCursorGlow();
	const { t } = useI18n();
	const stats = [
		{
			value: "50+",
			label: t("about.stats.projects")
		},
		{
			value: "20+",
			label: t("about.stats.technologies")
		},
		{
			value: "4+",
			label: t("about.stats.experience")
		},
		{
			value: "100%",
			label: t("about.stats.satisfaction")
		}
	];
	const skills = [
		{
			icon: CodeXml,
			title: "Frontend",
			items: [
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Framer Motion"
			]
		},
		{
			icon: Server,
			title: "Backend",
			items: [
				"Node.js",
				"Express",
				"Java Spring",
				"REST APIs",
				"EJS"
			]
		},
		{
			icon: Smartphone,
			title: "Mobile",
			items: [
				"React Native",
				"Expo",
				"iOS & Android",
				"Push Notifications"
			]
		},
		{
			icon: Palette,
			title: "UI/UX Design",
			items: [
				"Figma",
				"Design Systems",
				"Prototyping",
				"Motion Design"
			]
		},
		{
			icon: Database,
			title: t("skills.databases"),
			items: [
				"PostgreSQL",
				"MongoDB",
				"MySQL",
				"Prisma",
				"Supabase"
			]
		},
		{
			icon: Layers,
			title: "DevOps & Tools",
			items: [
				"Git",
				"Docker",
				"CI/CD",
				"Vercel",
				"Linux"
			]
		}
	];
	const experiences = Array.from({ length: 4 }, (_, i) => ({
		date: t(`experience.items.${i}.date`),
		role: t(`experience.items.${i}.role`),
		company: t(`experience.items.${i}.company`),
		description: t(`experience.items.${i}.description`)
	}));
	const projects = Array.from({ length: 5 }, (_, i) => ({
		...PROJECT_META[i],
		title: t(`projects.items.${i}.title`),
		tag: t(`projects.items.${i}.tag`),
		description: t(`projects.items.${i}.description`)
	}));
	const services = [
		{
			icon: SERVICE_ICONS[0],
			title: t("services.items.0.title"),
			description: t("services.items.0.description")
		},
		{
			icon: SERVICE_ICONS[1],
			title: t("services.items.1.title"),
			description: t("services.items.1.description")
		},
		{
			icon: SERVICE_ICONS[2],
			title: t("services.items.2.title"),
			description: t("services.items.2.description")
		},
		{
			icon: SERVICE_ICONS[3],
			title: t("services.items.3.title"),
			description: t("services.items.3.description")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none fixed inset-0 z-0 opacity-60 transition-opacity",
				style: { background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, var(--glass-tint), transparent 40%)` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-40 md:pb-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-[8%] border-l border-dashed border-foreground/15 md:left-[18%]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-[8%] border-l border-dashed border-foreground/15 md:right-[18%]" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-0 bottom-2 select-none whitespace-nowrap text-center text-[26vw] leading-none tracking-tighter text-foreground/95 opacity-90 md:bottom-4 md:text-[22vw]",
						style: {
							fontFamily: "'Cormorant Garamond', serif",
							fontStyle: "italic"
						},
						children: t("hero.decorative")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex max-w-6xl items-center justify-center px-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:px-6 sm:text-xs sm:tracking-[0.28em]",
						children: [
							"[ ",
							t("hero.location"),
							" ]"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						style: { y: heroY },
						className: "relative mx-auto mt-8 grid max-w-6xl grid-cols-1 items-start gap-8 px-5 sm:mt-10 sm:gap-10 sm:px-6 md:mt-16 md:grid-cols-[1.1fr_0.9fr_1.1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .2,
									duration: .7
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-[2.75rem] font-normal leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
									style: { fontFamily: "'Cormorant Garamond', serif" },
									children: [
										t("hero.line1"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										t("hero.line2"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										t("hero.line3"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										t("hero.line4"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
											className: "font-medium",
											children: t("hero.lineEm")
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground sm:mt-10 sm:text-sm sm:tracking-[0.24em]",
									children: [
										"[ ",
										t("hero.cta"),
										" ]"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: -20,
									rotate: -2
								},
								animate: {
									opacity: 1,
									y: 0,
									rotate: 0
								},
								transition: {
									delay: .35,
									duration: .8
								},
								className: "relative mx-auto w-full max-w-[16rem] sm:max-w-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative overflow-hidden bg-cream/90 p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]",
									style: { background: "var(--cream)" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: portrait_default,
										alt: "Portrait",
										width: 800,
										height: 1e3,
										loading: "eager",
										decoding: "async",
										fetchPriority: "high",
										className: "block h-auto w-full object-cover",
										style: { aspectRatio: "3/4" }
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border border-foreground/40 text-[10px] uppercase tracking-widest",
									style: {
										background: "var(--background)",
										fontFamily: "'Cormorant Garamond', serif"
									},
									children: t("hero.badge")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 30
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									delay: .4,
									duration: .7
								},
								className: "md:pt-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-5xl font-normal leading-none tracking-tight sm:text-6xl md:text-7xl",
										style: { fontFamily: "'Cormorant Garamond', serif" },
										children: ["50", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
											className: "text-2xl align-super",
											children: "+"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground",
										children: [
											t("hero.subtitle"),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											t("hero.description")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 space-y-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs sm:tracking-[0.24em]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["— ", t("hero.tech1")] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["— ", t("hero.tech2")] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["— ", t("hero.tech3")] })
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-6 sm:text-xs sm:tracking-[0.24em] md:mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("hero.bottomLeft") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("hero.bottomRight") })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				id: "about",
				eyebrow: t("about.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t("about.titleStart"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: t("about.titleCode")
					}),
					" ",
					t("about.titleAnd"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: t("about.titleDesign")
					}),
					t("about.titleEnd")
				] }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: t("about.p1")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: t("about.p2")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "glass rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl font-semibold text-gradient md:text-5xl",
							style: { fontFamily: "'Space Grotesk', sans-serif" },
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "skills",
				eyebrow: t("skills.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("skills.title") }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .08 },
						className: "group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity group-hover:opacity-40",
								style: { background: "var(--gradient-brand)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-8 w-8 text-primary",
								strokeWidth: 1.5
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 text-xl font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-muted-foreground",
									children: it
								}, it))
							})
						]
					}, s.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "experience",
				eyebrow: t("experience.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("experience.title") }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-4 top-2 bottom-2 w-px md:left-1/2",
						style: {
							background: "var(--gradient-brand)",
							opacity: .4
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-8",
						children: experiences.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: i % 2 === 0 ? -30 : 30
							},
							whileInView: {
								opacity: 1,
								x: 0
							},
							viewport: { once: true },
							transition: { delay: i * .1 },
							className: `relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `hidden md:block ${i % 2 === 0 ? "text-right" : ""}`,
								children: i % 2 === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { e })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-12 md:pl-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-0 top-6 h-4 w-4 rounded-full border-2 border-background md:left-1/2 md:-translate-x-1/2",
										style: { background: "var(--gradient-brand)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "md:hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { e })
									}),
									i % 2 === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hidden md:block",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceCard, { e })
									})
								]
							})]
						}, e.role))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "projects",
				eyebrow: t("projects.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t("projects.titleStart"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: t("projects.titleAccent")
					}),
					t("projects.titleEnd")
				] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: p.demo,
						target: "_blank",
						rel: "noopener noreferrer",
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i % 2 * .1 },
						className: `group relative flex flex-col overflow-hidden rounded-3xl glass transition-all hover:border-primary/40 ${i === 0 ? "md:col-span-2" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative aspect-[16/10] overflow-hidden ${"imageFrameClassName" in p ? p.imageFrameClassName ?? "" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									loading: "lazy",
									width: 1200,
									height: 800,
									className: `h-full w-full transition-transform duration-700 group-hover:scale-105 ${"imageClassName" in p ? p.imageClassName ?? "object-cover" : "object-cover"}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-4 top-4 rounded-full glass p-3 opacity-0 transition-opacity group-hover:opacity-100",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col gap-4 p-6 md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-primary",
									children: p.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl font-semibold md:text-3xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex flex-wrap items-center justify-between gap-4 pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-foreground/10 px-3 py-1 text-xs text-muted-foreground",
											children: t
										}, t))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-3 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
									})]
								})
							]
						})]
					}, p.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "services",
				eyebrow: t("services.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t("services.title") }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .1 },
						className: "group relative flex items-start gap-6 overflow-hidden rounded-2xl glass p-8 transition-all hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
							style: { background: "var(--gradient-brand)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-6 w-6 text-background",
								strokeWidth: 2
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: s.description
						})] })]
					}, s.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				id: "contact",
				eyebrow: t("contact.eyebrow"),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					t("contact.titleStart"),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: t("contact.titleAccent")
					}),
					t("contact.titleEnd")
				] }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							alert(t("contact.form.success"));
						},
						className: "glass rounded-3xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.name"),
									name: "name",
									placeholder: t("contact.form.namePlaceholder")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t("contact.form.email"),
									name: "email",
									type: "email",
									placeholder: t("contact.form.emailPlaceholder")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: t("contact.form.subject"),
								name: "subject",
								placeholder: t("contact.form.subjectPlaceholder")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground",
									children: t("contact.form.message")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 5,
									placeholder: t("contact.form.messagePlaceholder"),
									className: "w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]",
								style: { boxShadow: "var(--shadow-glow)" },
								children: [t("contact.form.submit"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Mail,
								label: "Email",
								value: "mami2003nomenjanahary@gmail.com"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Phone,
								label: t("contact.details.phone"),
								value: "+261 34 87 464 53"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: MapPin,
								label: t("contact.details.location"),
								value: "Antananarivo, MG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground",
									children: t("contact.details.social")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-3",
									children: [
										Github,
										Linkedin,
										Mail
									].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 transition-all hover:border-primary hover:bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}, i))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function ExperienceCard({ e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-medium uppercase tracking-wider text-primary",
				children: e.date
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 text-xl font-semibold",
				children: e.role
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm text-muted-foreground",
				children: e.company
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted-foreground",
				children: e.description
			})
		]
	});
}
function Field({ label, name, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 md:mt-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required: true,
			name,
			type,
			placeholder,
			className: "w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
		})]
	});
}
function ContactCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass flex items-center gap-4 rounded-2xl p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-medium",
			children: value
		})] })]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { t, lang, setLang } = useI18n();
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: `fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`,
		"aria-label": t("nav.ariaLabel"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2 text-lg",
					style: { fontFamily: "'Cormorant Garamond', serif" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-base",
						children: "✦"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic",
						children: t("nav.brand")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-6 px-2 py-1.5 md:flex",
					children: NAV_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${id}`,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: [
							"[",
							t("nav." + id),
							"]"
						]
					}, id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden rounded-full border border-foreground/40 px-5 py-2 text-xs uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background md:inline-flex",
							children: [
								"[ ",
								t("nav.contactButton"),
								" ]"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(lang === "fr" ? "en" : "fr"),
							"aria-label": t("lang.switchTo"),
							className: "inline-flex h-9 w-9 items-center justify-center rounded-full glass text-foreground text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105",
							children: lang === "fr" ? "EN" : "FR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? t("nav.closeMenu") : t("nav.openMenu"),
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							className: "glass ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-nav",
			role: "dialog",
			"aria-modal": "true",
			className: `fixed inset-x-0 top-[64px] z-40 mx-4 origin-top rounded-3xl glass p-6 transition-all md:hidden ${open ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: NAV_IDS.map((id, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${id}`,
					onClick: () => setOpen(false),
					className: "block rounded-xl px-4 py-3 text-base text-foreground/90 transition-colors hover:bg-foreground/5",
					style: { fontFamily: "'Cormorant Garamond', serif" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: ["0", idx + 1]
						}),
						"[",
						t("nav." + id),
						"]"
					]
				}) }, id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				onClick: () => setOpen(false),
				className: "mt-4 flex w-full items-center justify-center rounded-full border border-foreground/40 px-5 py-3 text-xs uppercase tracking-[0.22em]",
				children: [
					"[ ",
					t("nav.contactMobile"),
					" ]"
				]
			})]
		})]
	});
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const { t } = useI18n();
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("theme") ?? "light";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggle,
		"aria-label": t("theme.toggle"),
		className: "ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full glass text-foreground transition-transform hover:scale-105",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-20 border-t border-foreground/10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 -top-40 h-40 opacity-40",
			style: { background: "var(--gradient-glow)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-between gap-6 md:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-2xl font-semibold text-gradient",
						style: { fontFamily: "'Space Grotesk', sans-serif" },
						children: t("footer.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Portfolio. ",
							t("footer.credit")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3",
						children: [
							Github,
							Linkedin,
							Mail
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				]
			})
		})]
	});
}
var SplitComponent = Portfolio;
//#endregion
export { SplitComponent as component };
