import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Desenvolvedor Front-End",
    company: "Enablers Solutions",
    period: "Abr 2025 - Presente",
    description:
      "Atuação no desenvolvimento de aplicações web modernas, com foco em interfaces responsivas e usabilidade. Utilização de tecnologias como React, Next.js e Node.js em projetos internos e externos.",
  },
  {
    title: "Estagiário de Desenvolvimento de Sistemas",
    company: "Mondial Eletrodomésticos",
    period: "Out 2024 - Abr 2025",
    description:
      "Desenvolvimento de sistemas informatizados para a produção e montagem automática. Experiência com PHP, React.js, Node.js e MySQLi em soluções corporativas.",
  },
  {
    title: "Estagiário de Suporte de Informática",
    company:
      "SEMASC - Secretaria Municipal da Mulher, Assistência Social e Cidadania",
    period: "Mar 2023 - Out 2024",
    description:
      "Suporte técnico a usuários presenciais e via acesso remoto. Responsável pela gestão do Active Directory, manutenção de infraestrutura de rede e formatação de computadores.",
  },
];

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="relative">
          {index !== experiences.length - 1 && (
            <div className="absolute left-4 top-12 w-0.5 h-16 bg-border" />
          )}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-3 h-3 rounded-full bg-primary-foreground" />
            </div>
            <Card className="flex-1">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{exp.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {exp.company} • {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
