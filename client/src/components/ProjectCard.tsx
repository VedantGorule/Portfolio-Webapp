import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link = "#", delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card className="h-full flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <CardHeader>
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                {title}
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight className="text-primary h-5 w-5" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="bg-primary/5 hover:bg-primary/10 text-primary-foreground/80 hover:text-primary border-transparent"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </a>
    </motion.div>
  );
}
