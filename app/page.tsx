import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import { ProjectCard } from "@/components/project-card";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Header } from "@/components/header";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NavLinkButton } from "@/components/nav-link-button";
import { SplashScreen } from "@/components/splash-screen";

const techStack = [
  "HTML5",
  "CSS3",
  "Sass",
  "Javascript",
  "TypeScript",
  "React",
  "React Native",
  "NextJS",
  "Next Auth",
  "Supabase",
  "Git",
  "Github",
  "Node JS",
  "Postgresql",
  "MySQL",
  "better Auth",
  "Express",
  "Fastify",
  "Prisma",
  "Tailwind css",
  "Shadcn ui",
  "UI",
  "UX",
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  slug?: string;
};

// const projects: Project[] = [
//   {
//     title: "DevBoard",
//     description:
//       "Dashboard completo para desenvolvedores com métricas de projetos, integração com GitHub e sistema de tarefas.",
//     tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
//     slug: "devboard",
//   },
//   {
//     title: "E-commerce Mobile",
//     description:
//       "Aplicativo de e-commerce desenvolvido em React Native com carrinho de compras e pagamentos integrados.",
//     tags: ["React Native", "TypeScript", "Node.js", "Stripe"],
//   },
//   {
//     title: "API de Gestão",
//     description:
//       "API REST robusta para gestão de usuários e produtos com autenticação JWT e documentação Swagger.",
//     tags: ["Node.js", "Fastify", "PostgreSQL", "Docker"],
//   },
// ];
const projects: Project[] = [
  {
    title: "Sistema de Calamidade Pública",
    description:
      "Plataforma completa para registro e gestão de ocorrências socioeconômicas em situações de calamidade. Inclui aplicativo mobile offline-first (React Native + Expo SQLite) e página web em React.js para visualização e análise, com sincronização no backend (Node.js + Prisma + PostgreSQL) e geração de relatórios em PDF.",
    tags: [
      "React.js",
      "React Native",
      "Expo SQLite",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
    ],
    slug: "sistema-calamidade",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Olá, eu sou <span className="text-primary">Rodrigo Sena</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Full-Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Desenvolvedor apaixonado por criar soluções web modernas e
            eficientes. Especializado em{" "}
            <strong>TypeScript, React, Next.js e Node.js</strong>, sempre
            buscando aprender novas tecnologias e entregar código de qualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLinkButton href="contact" size="lg" variant="default">
              <Mail className="mr-2 h-4 w-4" />
              Entrar em Contato
            </NavLinkButton>
            <NavLinkButton href="#" size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Baixar CV
            </NavLinkButton>
            <NavLinkButton href="projects" size="lg" variant="ghost">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Projetos
            </NavLinkButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/perfil.png"
                alt="Rodrigo Sena - Desenvolvedor Full-Stack"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sou estudante de Engenharia da Computação e desenvolvedor
                Full-Stack, atuando profissionalmente com tecnologias modernas
                como React, Next.js e Node.js. Tenho experiência em criar
                aplicações completas, do frontend ao backend, sempre com foco em
                qualidade e boas práticas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Além da formação acadêmica, já atuo no mercado como
                desenvolvedor, onde aplico diariamente meus conhecimentos para
                entregar soluções reais e de impacto. Busco sempre evoluir como
                profissional, aprendendo e compartilhando conhecimento ao longo
                da jornada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologias</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
          <div className="mx-auto max-w-4xl">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div> */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Experiência</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato comigo através dos canais abaixo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:joao.silva@email.com">
                <Mail className="mr-2 h-4 w-4" />
                rodrigo.sena1163@gmail.com
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://github.com/rodrigo1163"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link
                href="https://www.linkedin.com/in/rodrigosenadev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">© 2024 Rodrigo Sena</p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <SplashScreen>
      <HomePage />
    </SplashScreen>
  );
}
