import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Shield, 
  Cpu, 
  Globe,
  Award,
  Download
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useCreateMessage } from "@/hooks/use-messages";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Home() {
  const createMessage = useCreateMessage();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    createMessage.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  const skills = [
    "SQL Server", "Blockchain", "MetaMask", "HTML", "CSS", "JavaScript", 
    "React JS", "Python", "AWS", "Docker", "Jenkins", "Solidity", 
    "OpenCV", "MediaPipe", "Terraform"
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            <motion.div 
              className="flex-1 space-y-8 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/20 text-primary bg-primary/5 rounded-full">
                  Available for opportunities
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight">
                  Hi, I'm <br />
                  <span className="text-gradient">Vedant Gorule</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto md:mx-0">
                  AIML & Cybersecurity Enthusiast | Exploring GenAI | Full Stack Developer
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Button size="lg" className="rounded-full bg-gradient-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-2 hover:bg-secondary/50" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-muted-foreground">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/vedant-gorule" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:vedant.gorule@gmail.com" className="hover:text-foreground transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="flex-shrink-0 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-background shadow-2xl overflow-hidden relative z-10">
                <img 
                  src="/images/profile.jpeg" 
                  alt="Vedant Gorule"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces";
                  }}
                />
              </div>
              {/* Decorative circle behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full -z-10 blur-md opacity-50 translate-y-4 translate-x-4" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an AIML & Cybersecurity enthusiast and a Computer Engineering undergraduate at Nutan Maharashtra Institute of Engineering and Technology. 
              I have hands-on experience in web development, cloud computing, and secure application design. 
              Passionate about coding & building impactful solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-border flex-1" />
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px bg-border flex-1" />
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-display">Hexacon Infra Pvt. Ltd.</h3>
                    <p className="text-primary font-medium">Full Stack Developer Intern</p>
                  </div>
                  <Badge variant="secondary" className="w-fit text-sm py-1">Jan 2024 - Feb 2024</Badge>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Designed responsive web interfaces using HTML, CSS, JavaScript, and React JS.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Improved user engagement by 30% and load time by 20% through code optimization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>Optimized adaptive layouts increasing mobile traffic by 25%.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects exploring AI, Blockchain, and Cloud Architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="AI-Powered Document Q&A"
              description="RAG-based system using Python, FastAPI, LangChain, FAISS, and OpenAI API. Reduced search effort by 70% by enabling natural language queries on documents."
              tags={["Python", "FastAPI", "LangChain", "OpenAI"]}
              delay={0}
            />
            <ProjectCard 
              title="Terraform + AWS Infra"
              description="Automated 3-tier AWS infrastructure using Terraform, Jenkins CI/CD, and Docker. Streamlined secure deployments and infrastructure management."
              tags={["Terraform", "AWS", "Jenkins", "Docker"]}
              delay={0.1}
            />
            <ProjectCard 
              title="Pharma Supply Chain"
              description="Blockchain-based supply chain solution using Smart contracts and Solidity. Ensures transparency, traceability, and authenticity of pharmaceutical products."
              tags={["Blockchain", "Solidity", "Smart Contracts"]}
              delay={0.2}
            />
            <ProjectCard 
              title="AWS Serverless CRUD"
              description="Scalable CRUD platform utilizing AWS Lambda, DynamoDB, and API Gateway. Demonstrates serverless architecture principles and cost-efficiency."
              tags={["AWS Lambda", "DynamoDB", "API Gateway"]}
              delay={0.3}
            />
            <ProjectCard 
              title="AI Exercise Tracker"
              description="Computer vision tool powered by OpenCV, MediaPipe, and TensorFlow. Tracks exercise form and repetitions with 90%+ accuracy in real-time."
              tags={["OpenCV", "MediaPipe", "TensorFlow"]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
              <p className="text-muted-foreground">
                I'm constantly learning and expanding my tech stack. Here are the technologies I work with most frequently.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                  <Shield className="text-primary w-8 h-8" />
                  <span className="font-semibold text-sm">Cybersecurity</span>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                  <Cpu className="text-primary w-8 h-8" />
                  <span className="font-semibold text-sm">AI / ML</span>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                  <Globe className="text-primary w-8 h-8" />
                  <span className="font-semibold text-sm">Web Dev</span>
                </div>
                <div className="p-4 bg-secondary/50 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                  <Database className="text-primary w-8 h-8" />
                  <span className="font-semibold text-sm">Cloud</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-primary" />
                  Education
                </h3>
                <div className="border-l-2 border-primary/20 pl-6 py-2">
                  <h4 className="text-xl font-bold">Bachelor of Engineering in Computer Engineering</h4>
                  <p className="text-muted-foreground mt-1">Nutan Maharashtra Institute of Engineering and Technology</p>
                  <p className="text-sm font-medium text-primary mt-2">2021 - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-card rounded-2xl border shadow-xl overflow-hidden">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-display">Let's Connect</h2>
                <p className="text-primary-foreground/80 text-lg">
                  Have a project in mind or just want to chat about AI and Cybersecurity? I'd love to hear from you.
                </p>
                
                <div className="space-y-4 mt-8">
                  <a href="mailto:vedant.gorule@gmail.com" className="flex items-center gap-3 text-lg hover:underline underline-offset-4">
                    <Mail className="w-5 h-5" />
                    vedant.gorule@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/vedant-gorule" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:underline underline-offset-4">
                    <Linkedin className="w-5 h-5" />
                    linkedin.com/in/vedant-gorule
                  </a>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {/* Visual element or illustration could go here */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-background">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-12 bg-secondary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" type="email" {...field} className="h-12 bg-secondary/20" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            {...field} 
                            className="min-h-[150px] bg-secondary/20 resize-none" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-semibold shadow-lg shadow-primary/20"
                    disabled={createMessage.isPending}
                  >
                    {createMessage.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Vedant Gorule. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
