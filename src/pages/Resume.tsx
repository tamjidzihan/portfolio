import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { resumeData } from '@/data';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

import { Document, Page, pdfjs } from "react-pdf";

import { useEffect, useRef, useState } from 'react';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();


const Resume = () => {
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


  const [width, setWidth] = useState(600); // default width
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Download my resume or view it online
            </p>
            <Button asChild size="lg" className="mb-8">
              <a href={resumeData.personalInfo.resume} target="_blank" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                &nbsp;Download PDF Resume
              </a>
            </Button>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{resumeData.personalInfo.name}</CardTitle>
                <CardDescription className="text-xl">{resumeData.personalInfo.title}</CardDescription>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:text-primary">
                      {resumeData.personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Linkedin className="h-4 w-4" />
                    <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      {resumeData.personalInfo.linkedin}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Github className="h-4 w-4" />
                    <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      {resumeData.personalInfo.github}
                    </a>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Career Objective */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Software Engineer with expertise in full-stack web development,
                  seeking to leverage my skills in React, TypeScript, Python, and modern cloud technologies
                  to build scalable and innovative software solutions. Committed to writing clean,
                  maintainable code and continuously learning new technologies to deliver exceptional user experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* PDF Viewer Placeholder */}
          <motion.div variants={itemVariants}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Resume Preview</CardTitle>
                <CardDescription>
                  View a live PDF version of my resume below
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div ref={containerRef} className="aspect-[8.5/11] border border-border rounded-lg overflow-hidden flex items-center justify-center">
                  <Document file={resumeData.personalInfo.resume}>
                    <Page pageNumber={1} width={width} />
                  </Document>
                </div>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Resume;