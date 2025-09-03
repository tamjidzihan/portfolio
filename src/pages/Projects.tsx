import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Calendar, Users, Star, Code, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, projectStats } from '@/data';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };



  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of projects that showcase my technical skills, creativity, and problem-solving approach
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {projectStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                      <CardContent className="pt-6">
                        <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deep dive into my most significant and impactful projects
              </p>
            </div>

            <div className="space-y-16">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm"
                      >
                        <div className="aspect-video">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Project Tabs */}
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="results">Results</TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-primary mb-1">Duration</h4>
                            <p className="text-sm text-muted-foreground">{project.duration}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-primary mb-1">Team</h4>
                            <p className="text-sm text-muted-foreground">{project.team}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Key Challenges</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {project.challenges.map((challenge, i) => (
                              <li key={i}>• {challenge}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>

                      <TabsContent value="tech" className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Frontend</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.frontend.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Backend</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.backend.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Tools & Others</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.tools.map((tech) => (
                              <Badge key={tech} variant="default" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="features" className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="results" className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </TabsContent>
                    </Tabs>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="group">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          View Live Project
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Other Notable Projects</h2>
              <p className="text-muted-foreground">
                Additional projects that demonstrate my versatility and growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <div className="aspect-video">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant={project.status === 'Live' ? 'default' : 'secondary'}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.shortDescription}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {project.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {project.team}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {[...project.technologies.frontend.slice(0, 3), ...project.technologies.backend.slice(0, 2)].map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.frontend.length + project.technologies.backend.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.frontend.length + project.technologies.backend.length - 5} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies I Work With */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technologies I Work With</h2>
              <p className="text-muted-foreground">
                A comprehensive overview of my technical toolkit
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Python", "Django", "FastAPI", "Express.js"],
                  color: "from-green-500 to-emerald-500"
                },
                {
                  category: "Database",
                  technologies: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Prisma"],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  category: "Tools & Cloud",
                  technologies: ["AWS", "Docker", "Git", "VS Code", "Postman"],
                  color: "from-orange-500 to-red-500"
                }
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-3">{tech.category}</h3>
                      <div className="space-y-2">
                        {tech.technologies.map((technology) => (
                          <div key={technology} className="text-sm text-muted-foreground">
                            {technology}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  I'm always excited about new opportunities and interesting projects. Whether you have a
                  specific idea in mind or just want to explore possibilities, let's start a conversation
                  and see how we can create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="mailto:tamjidzihan@gmail.com" className="flex items-center gap-2">
                      Start a Project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/resume" className="flex items-center gap-2">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;