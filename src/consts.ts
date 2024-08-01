import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Madterasu",
  EMAIL: "Madterasu@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Di sini kalian bakal nemu berbagai artikel tentang topik-topik yang aku gemari. Mulai dari ngoding, Linux, sampai tips-tips keren seputar dunia informatika. Yuk, cek artikel-artikelnya dan semoga bermanfaat!",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Di sini kalian bisa lihat berbagai proyek yang udah aku kerjakan, lengkap dengan link ke repository dan demo-demo-nya. Yuk, cek proyek-proyekku dan semoga bisa menginspirasi kalian! 😸🔗🚀",
};

export const SOCIALS: Socials = [
  { 
    NAME: "Instagram",
    HREF: "https://instagram.com/madterasu",
  },
  { 
    NAME: "Github",
    HREF: "https://github.com/madterasu"
  },
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/madterasu",
  }
];
