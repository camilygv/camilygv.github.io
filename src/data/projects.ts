export type Project = {
  id: string;
  slug: string;
  published: boolean;
  title: string;
  client: string;
  year: string;
  category:
    | "Branding"
    | "Editorial"
    | "Packaging"
    | "Poster"
    | "Digital"
    | "Identity"
    | "Other";
  role: string;
  summary: string;
  cover: string;
  coverAlt: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
    layout?: "full" | "half" | "wide";
  }[];
  accent: string;
  tools?: string[];
  link?: string;
  showCoverOnDetail?: boolean; // default true
};

export const projects: Project[] = [
  {
    id: "p01",
    slug: "dibuja-borra-repite",
    published: true,
    title: "Dibuja Borra y Repite",
    client: "Independiente",
    year: "2025",
    category: "Identity",
    role: "Identidad de marca, logo, sistema de packaging",
    summary:
      "Guia ilustrada para el proceso creativo de creación, diseño y uso de personajes.",
    cover: "/projects/project-01/cover.jpg",
    coverAlt:
      "Tres bolsas de café en verde y crema con ilustraciones botánicas",
    gallery: [
      {
        src: "/projects/project-01/gallery-01.jpg",
        alt: "Logo principal sobre fondo crema",
        layout: "wide",
      },
      {
        src: "/projects/project-01/gallery-02.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-01/cover.jpg",
        alt: "Bolsas de café dispuestas en fila",
        layout: "half",
      },
    ],
    accent: "#3DBE7A",
    tools: ["Illustrator", "InDesign"],
  },
  {
    id: "p02",
    slug: "oatly",
    published: true,
    showCoverOnDetail: false,

    title: "Oatly",
    client: "Independiente",
    year: "2024",
    category: "Packaging",
    role: "Diseño de logo y packaging",
    summary: "Conjunto de diseño de packaging, logos y marcas alimenticias.",
    cover: "/projects/project-02/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [
      {
        src: "/projects/project-02/gallery-08.png",
        alt: "Logo principal sobre fondo crema",
        layout: "wide",
      },
      {
        src: "/projects/project-02/gallery-02.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-03.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-04.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-05.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-06.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-07.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-02/gallery-01.png",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
    ],
    accent: "#FF4D2E",
  },
  {
    id: "p03",
    slug: "serigrafia",
    showCoverOnDetail: false,
    published: true,
    title: "Franelas Serigrafeadas Variadas",
    client: "Grupo Kcheo",
    year: "2024",
    category: "Other",
    role: "Diseñadora para serigrafia de franelas",
    summary:
      "Algunos de mis trabajos en serigrafia para franelas con diversos diseños.",
    cover: "/projects/project-03/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [
      {
        src: "/projects/project-03/gallery-01.jpg",
        alt: "Logo principal sobre fondo crema",
        layout: "half",
      },
      {
        src: "/projects/project-03/gallery-02.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-03/gallery-03.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
    ],
    accent: "#7B5CFF",
  },
  {
    id: "p04",
    slug: "cabrart",
    published: true,
    title: "CabrArt",
    client: "Independiente",
    year: "2026",
    category: "Digital",
    role: "Diseño de identidad",
    summary:
      "Cabrart es una plataforma digital que fusiona un mapa ilustrado y navegable del estado Nueva Esparta con una agenda cultural dinámica.",
    cover: "/projects/project-04/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [
      {
        src: "/projects/project-04/gallery-02.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-04/gallery-03.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "half",
      },
      {
        src: "/projects/project-04/gallery-04.jpg",
        alt: "Detalle de una ilustración de helecho dibujada a mano",
        layout: "wide",
      },
    ],
    accent: "#D7FF3A",
  },
  {
    id: "p05",
    slug: "placeholder-five",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Packaging",
    role: "Diseño de packaging, ilustración",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-05/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#FF6B35",
  },
  {
    id: "p06",
    slug: "placeholder-six",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Digital",
    role: "Diseño UI, motion, dirección de arte",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-06/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#00D4AA",
  },
  {
    id: "p07",
    slug: "placeholder-seven",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Poster",
    role: "Diseño de poster, tipografía",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-07/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#FF2E63",
  },
  {
    id: "p08",
    slug: "placeholder-eight",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Identity",
    role: "Identidad de marca, logo, tipografía",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-08/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#FFBE0B",
  },
  {
    id: "p09",
    slug: "placeholder-nine",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Editorial",
    role: "Diseño de layout, tipografía, dirección de arte",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-09/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#3A86FF",
  },
  {
    id: "p10",
    slug: "placeholder-ten",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Packaging",
    role: "Diseño de packaging, ilustración",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-10/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#8338EC",
  },
  {
    id: "p11",
    slug: "placeholder-eleven",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Digital",
    role: "Diseño UI, motion, dirección de arte",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-11/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#FB5607",
  },
  {
    id: "p12",
    slug: "placeholder-twelve",
    published: false,
    title: "Título del proyecto",
    client: "Nombre del cliente",
    year: "2026",
    category: "Other",
    role: "Diseño, dirección de arte",
    summary: "Una o dos frases que describan el proyecto.",
    cover: "/projects/project-12/cover.jpg",
    coverAlt: "Describe la imagen de portada para lectores de pantalla",
    gallery: [],
    accent: "#2EC4B6",
  },
];

export const visibleProjects = projects.filter((p) => p.published);
