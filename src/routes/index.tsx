import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import portrait from "@/assets/portrait.png";

const SITE_ORIGIN = "https://jocelyn2128.github.io";
const SITE_PATH = "/Maminomenjanahary-Jocelyn-Mickael";
const SITE_URL = SITE_ORIGIN + SITE_PATH;
const PERSON_NAME = "Maminomenjanahary Jocelyn Mickael";
const TITLE =
  "Maminomenjanahary Jocelyn Mickael | Développeur Full Stack React & Mobile";
const DESCRIPTION =
  "Portfolio de Maminomenjanahary Jocelyn Mickael, développeur Full Stack à Antananarivo: React, Next.js, React Native, Node.js, UI/UX et projets web/mobile.";
const IMAGE_ALT =
  "Portrait de Maminomenjanahary Jocelyn Mickael, développeur Full Stack à Antananarivo";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Maminomenjanahary Jocelyn Mickael, développeur full stack Madagascar, développeur React Antananarivo, React Native, Next.js, Node.js, UI UX design, portfolio développeur",
      },
      { name: "author", content: PERSON_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#17221a" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:site_name", content: "Mon porte folio" },
      { property: "og:locale", content: "fr_MG" },
      { property: "og:image", content: SITE_ORIGIN + portrait },
      { property: "og:image:alt", content: IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SITE_ORIGIN + portrait },
      { name: "twitter:image:alt", content: IMAGE_ALT },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      {
        rel: "preload",
        as: "image",
        href: portrait,
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": SITE_URL + "/#person",
              name: PERSON_NAME,
              alternateName: "Jocelyn2128",
              jobTitle:
                "Développeur Full Stack, Mobile Engineer et UI/UX Designer",
              url: SITE_URL + "/",
              image: SITE_ORIGIN + portrait,
              sameAs: ["https://github.com/Jocelyn2128"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Antananarivo",
                addressCountry: "MG",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "React Native",
                "Node.js",
                "Java Spring Boot",
                "PostgreSQL",
                "Moodle",
                "UI/UX Design",
              ],
            },
            {
              "@type": "WebSite",
              "@id": SITE_URL + "/#website",
              url: SITE_URL + "/",
              name: "Mon porte folio",
              inLanguage: "fr",
              publisher: { "@id": SITE_URL + "/#person" },
            },
            {
              "@type": "ProfilePage",
              "@id": SITE_URL + "/#webpage",
              url: SITE_URL + "/",
              name: TITLE,
              description: DESCRIPTION,
              inLanguage: "fr",
              isPartOf: { "@id": SITE_URL + "/#website" },
              mainEntity: { "@id": SITE_URL + "/#person" },
            },
          ],
        }),
      },
    ],
  }),
});
