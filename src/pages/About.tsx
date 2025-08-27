import { motion } from 'framer-motion';
import { Code, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { personalInfo, achievements, timeline, skills } from '@/data';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get to know the person behind the code - my journey, skills, and what drives my passion for technology
            </p>
          </motion.div>

          {/* Personal Info & Story */}
          <motion.div variants={itemVariants}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Personal Details */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      TI
                    </div>
                    Personal Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Full Name</h4>
                      <p className="text-muted-foreground">{personalInfo.fullName}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Location</h4>
                      <p className="text-muted-foreground">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.interests.map((interest) => (
                        <Badge key={interest} variant="outline">{interest}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.hobbies.map((hobby) => (
                        <Badge key={hobby} variant="secondary">{hobby}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* My Story */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">My Journey</CardTitle>
                  <CardDescription>From curiosity to expertise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    My journey into software development began with a simple curiosity about how websites work.
                    What started as tinkering with HTML and CSS quickly evolved into a deep passion for creating
                    digital solutions that solve real-world problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Over the years, I've had the privilege of working on diverse projects - from small business
                    websites to complex enterprise applications. Each project has taught me something new and
                    reinforced my belief that great software is built through continuous learning and collaboration.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or sharing knowledge with the developer community. I believe in the power of
                    technology to make the world a better place, one line of code at a time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Achievement Highlights */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Achievements & Highlights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones and accomplishments in my development journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                      <CardContent className="pt-6">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Professional Timeline</h2>
              <p className="text-muted-foreground">
                My growth and evolution as a software developer
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="default">{item.year}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Skills Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive overview of my technical skills and experience levels
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.category}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.category}</CardTitle>
                            <CardDescription>{category.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-xs text-muted-foreground ml-2">
                                  ({skill.experience})
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + skillIndex * 0.1
                              }}
                            >
                              <Progress value={skill.level} className="h-2" />
                            </motion.div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Philosophy & Values */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">My Development Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold">Clean Code</h3>
                    <p className="text-sm text-muted-foreground">
                      Writing code that is not just functional, but readable, maintainable, and elegant
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold">User-Centric</h3>
                    <p className="text-sm text-muted-foreground">
                      Every line of code should ultimately serve to create better user experiences
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold">Continuous Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Technology evolves rapidly, and so must we. Always learning, always growing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;