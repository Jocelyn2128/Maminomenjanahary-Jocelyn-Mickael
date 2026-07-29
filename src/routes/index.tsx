import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";
import portrait from "@/assets/portrait.png";

const SITE_URL = "https://slick-sync-studio.lovable.app";
const TITLE =
  "Portfolio — Full Stack Developer, Mobile & UI/UX Designer";
const DESCRIPTION =
  "Portfolio d'un Full Stack Developer basé à Antananarivo : React, Next.js, React Native, Node.js et UI/UX Design. Projets sélectionnés, expériences et services.";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "portfolio, full stack developer, react, next.js, react native, ui ux designer, madagascar",
      },
      { name: "author", content: "Portfolio" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: SITE_URL + portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SITE_URL + portrait },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      {
        rel: "preload",
        as: "image",
        href: portrait,
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Portfolio",
          jobTitle: "Full Stack Developer & UI/UX Designer",
          url: SITE_URL,
          image: SITE_URL + portrait,
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
            "UI/UX Design",
          ],
        }),
      },
    ],
  }),
});
