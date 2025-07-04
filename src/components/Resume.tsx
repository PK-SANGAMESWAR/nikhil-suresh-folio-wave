import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeData = {
    education: {
      degree: "B.Tech Computer Science Engineering",
      year: "2024",
      location: "Palakkad, Kerala"
    },
    experience: [
      {
        title: "Software Development Intern",
        company: "HR Portal Project",
        duration: "3 months",
        description: "Developed a comprehensive HR management system using Django and Python"
      }
    ],
    projects: [
      "HR Portal - Employee management system",
      "Emo Forensics - Emotional analysis for forensic applications", 
      "RouteMaster GO - Intelligent route optimization system"
    ],
    skills: [
      "Python", "Django", "JavaScript", "ReactJS", "Java", "C", 
      "MySQL", "HTML/CSS", "Git", "VS Code"
    ]
  };

  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = '/resume-nikhil-suresh.pdf';
    link.download = 'Nikhil_Suresh_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 glass glow-accent">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2 text-primary">Nikhil Suresh</h3>
              <p className="text-xl text-muted-foreground mb-4">Aspiring Full-Stack Developer</p>
              <div className="flex justify-center mb-6">
                <Button 
                  onClick={handleDownload}
                  className="bg-gradient-primary hover:scale-105 transition-transform glow-primary"
                >
                  Download PDF Resume
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
                  Education
                </h4>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <h5 className="font-semibold">{resumeData.education.degree}</h5>
                  <p className="text-muted-foreground">{resumeData.education.year}</p>
                  <p className="text-sm text-muted-foreground">{resumeData.education.location}</p>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
                  Experience
                </h4>
                <div className="space-y-3">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                      <h5 className="font-semibold">{exp.title}</h5>
                      <p className="text-sm text-primary">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-2">{exp.duration}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Projects */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
                  Key Projects
                </h4>
                <div className="space-y-2">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm">{project}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technical Skills */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-bold text-primary border-b border-primary/30 pb-2">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Ready to contribute to innovative projects and grow as a developer
              </p>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary/50 hover:border-primary hover:scale-105 transition-all"
              >
                Let's Connect
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;