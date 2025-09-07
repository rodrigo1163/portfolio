import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TechBadge } from "./tech-badge";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  slug,
}: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <TechBadge key={tag} name={tag} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <span className="text-muted-foreground text-center w-full">
          Detalhes em breve...
        </span>
        {/* <Button asChild className="w-full">
          <Link href={slug ? `/projects/${slug}` : "#"}>Ver detalhes</Link>
        </Button> */}
      </CardFooter>
    </Card>
  );
}
