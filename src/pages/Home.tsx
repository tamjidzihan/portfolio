import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { quickFacts, stats, personalInfo, links, featuredprojects } from '@/data';
import AnimatedBackground from '@/components/common/AnimatedBackground';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{personalInfo.location}</span>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-6xl lg:text-7xl font-bold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="block text-foreground">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    {personalInfo.fullName}
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <h2 className="text-2xl sm:text-3xl font-semibold  text-muted-foreground">
                    {personalInfo.occupation}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {personalInfo.careerobjective}
                  </p>
                </motion.div>
              </div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {quickFacts.map((fact, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {fact}
                  </Badge>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="group">
                  <Link to="/projects" className="flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:tamjidzihan@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Get In Touch
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-4"
              >
                {links.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/50 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Content - Stats & Profile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Profile Card */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                      <img
                        src={personalInfo.profilepic}
                        alt={personalInfo.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold"> {personalInfo.fullName}</h3>
                      <p className="text-muted-foreground text-indigo-600 dark:text-indigo-400 "> {personalInfo.occupation}</p>
                    </div>
                    <Link to={'/resume'} className="flex justify-center gap-2">
                      <Badge variant="default">Available for Work</Badge>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                        <CardContent className="pt-6 pb-4">
                          <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Current Status */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Currently Working On
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Building <span className="font-medium">Byte-by-Byte</span>, a tech blog using Next.js, TypeScript & Tailwind</li>
                    <li>• Developing <span className="font-medium">Storefront</span>, an e-commerce backend with Django REST & PostgreSQL</li>
                    <li>• Freelance projects with React, Vite, TypeScript, and Firebase</li>
                    <li>• Exploring cloud deployment & CI/CD workflows (GitHub Actions, VPS hosting)</li>
                    <li>• Learning advanced system design & scalable backend patterns</li>
                  </ul>
                </CardContent>
              </Card>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredprojects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                      {project.image
                        ? <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        : <Code2 className="h-16 w-16 text-primary/40" />
                      }
                    </div>
                    <h3 className="font-semibold mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.type}</p>
                    <Badge variant="secondary" className="text-xs">{project.tech}</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;