import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HR Portal",
      description: "A comprehensive Human Resource management system built during internship",
      longDescription: "Developed a full-featured HR management portal during my internship that streamlines employee management, attendance tracking, and administrative tasks. The system includes employee onboarding, leave management, performance tracking, and reporting capabilities.",
      technologies: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "Employee Management System",
        "Attendance Tracking",
        "Leave Management",
        "Performance Analytics",
        "Admin Dashboard",
        "Role-based Access Control"
      ],
      category: "Web Application",
      timeline: "3 months",
    },
    {
      id: 2,
      title: "Emo Forensics",
      description: "Emotional analysis tool for forensic applications using machine learning",
      longDescription: "An innovative emotional analysis system designed for forensic applications. Uses machine learning algorithms to analyze emotional patterns and provide insights for investigative purposes. The system processes various data inputs to generate emotional profiles and behavioral analysis.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "OpenCV", "NumPy"],
      features: [
        "Emotion Recognition",
        "Behavioral Analysis",
        "Data Visualization",
        "Pattern Recognition",
        "Report Generation",
        "Real-time Processing"
      ],
      category: "AI/ML Project",
      timeline: "4 months",
    },
    {
      id: 3,
      title: "RouteMaster GO",
      description: "Intelligent route optimization system for efficient navigation and logistics",
      longDescription: "A smart route optimization application that helps users find the most efficient paths for travel and logistics. Implements advanced algorithms for real-time route calculation, traffic analysis, and cost optimization for both personal and commercial use.",
      technologies: ["Java", "Algorithms", "Data Structures", "APIs", "Mobile Development"],
      features: [
        "Route Optimization",
        "Real-time Navigation",
        "Traffic Analysis",
        "Cost Calculation",
        "Multi-stop Planning",
        "Offline Maps Support"
      ],
      category: "Mobile Application",
      timeline: "5 months",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through diverse projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 glass hover:glow-accent transition-all duration-300 h-full flex flex-col">
                <div className="flex-1">
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-primary hover:scale-105 transition-transform"
                    >
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl glass">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-primary">
                        {project.title}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div>
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="outline" className="ml-2">
                          {project.timeline}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:border-primary hover:scale-105 transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;