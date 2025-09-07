import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { TechBadge } from "@/components/tech-badge";

const techStack = [
  "Next.js",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
  "shadcn/ui",
];

const features = [
  {
    title: "Dashboard de Métricas",
    description:
      "Visualização em tempo real de estatísticas de projetos, commits e produtividade.",
  },
  {
    title: "Integração GitHub",
    description:
      "Sincronização automática com repositórios do GitHub para tracking de atividades.",
  },
  {
    title: "Sistema de Tarefas",
    description:
      "Gerenciamento completo de tarefas com status, prioridades e deadlines.",
  },
  {
    title: "Relatórios Personalizados",
    description:
      "Geração de relatórios detalhados sobre performance e progresso dos projetos.",
  },
  {
    title: "Interface Responsiva",
    description:
      "Design adaptável para desktop, tablet e mobile com tema claro/escuro.",
  },
  {
    title: "Autenticação Segura",
    description: "Sistema de login robusto com JWT e proteção de rotas.",
  },
];

export default function DevBoardProject() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar aos Projetos
          </Link>
        </Button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">DevBoard</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Dashboard completo para desenvolvedores com métricas de projetos,
            integração com GitHub e sistema de tarefas avançado.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Demo
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Código Fonte
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Visão Geral</h2>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              O DevBoard é uma aplicação web moderna desenvolvida para ajudar
              desenvolvedores a monitorar e gerenciar seus projetos de forma
              eficiente. A plataforma oferece uma interface intuitiva para
              acompanhar métricas de desenvolvimento, integrar com repositórios
              do GitHub e organizar tarefas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O projeto foi desenvolvido com foco em performance, usabilidade e
              escalabilidade, utilizando as mais modernas tecnologias do
              ecossistema React e Node.js. A arquitetura foi pensada para ser
              facilmente extensível e manutenível.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Funcionalidades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src="/modern-dashboard-interface-with-charts-and-metrics.jpg"
                alt="DevBoard - Dashboard Principal"
                className="rounded-lg border shadow-sm w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                Dashboard principal com métricas em tempo real
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="/kanban-task-management.png"
                alt="DevBoard - Sistema de Tarefas"
                className="rounded-lg border shadow-sm w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                Sistema de gerenciamento de tarefas
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="/github-integration-dashboard-with-repository-stats.jpg"
                alt="DevBoard - Integração GitHub"
                className="rounded-lg border shadow-sm w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                Integração com GitHub e estatísticas de repositórios
              </p>
            </div>
            <div className="space-y-4">
              <img
                src="/responsive-mobile-interface-for-developer-dashboar.jpg"
                alt="DevBoard - Interface Mobile"
                className="rounded-lg border shadow-sm w-full"
              />
              <p className="text-sm text-muted-foreground text-center">
                Interface responsiva para dispositivos móveis
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Detalhes Técnicos</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Next.js 14 com App Router</li>
                    <li>• TypeScript para type safety</li>
                    <li>• Tailwind CSS para estilização</li>
                    <li>• shadcn/ui para componentes</li>
                    <li>• Recharts para visualizações</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• API Routes do Next.js</li>
                    <li>• Prisma ORM para banco de dados</li>
                    <li>• PostgreSQL como banco principal</li>
                    <li>• NextAuth.js para autenticação</li>
                    <li>• GitHub API para integração</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
