import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = {
    email: "nikhilsuresh.dev@gmail.com",
    phone: "+91 98765 43210",
    linkedin: "https://www.linkedin.com/in/nikhil-suresh-dev",
    location: "Palakkad, Kerala, India"
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Ready to start a conversation? I'm always open to discussing new opportunities, 
            collaborations, or just having a tech chat!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass glow-accent h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg cursor-pointer"
                  onClick={handleLinkedInClick}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">Connect with me</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg cursor-pointer"
                  onClick={handlePhoneClick}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl font-bold text-primary-foreground">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass glow-accent h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Quick Actions</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-primary rounded-lg text-center"
                >
                  <h4 className="text-xl font-bold text-primary-foreground mb-3">
                    Ready to Collaborate?
                  </h4>
                  <p className="text-primary-foreground/80 mb-4">
                    Let's discuss your next project or opportunity
                  </p>
                  <Button
                    onClick={handleEmailClick}
                    variant="secondary"
                    className="hover:scale-105 transition-transform"
                  >
                    Send Email
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-secondary/50 rounded-lg text-center"
                >
                  <h4 className="text-xl font-bold mb-3 text-primary">
                    Professional Network
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Connect with me on LinkedIn for updates and networking
                  </p>
                  <Button
                    onClick={handleLinkedInClick}
                    variant="outline"
                    className="border-primary/50 hover:border-primary hover:scale-105 transition-all"
                  >
                    View LinkedIn
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-secondary/50 rounded-lg text-center"
                >
                  <h4 className="text-xl font-bold mb-3 text-primary">
                    Download Resume
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Get a detailed overview of my skills and experience
                  </p>
                  <Button
                    onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                    variant="outline"
                    className="border-primary/50 hover:border-primary hover:scale-105 transition-all"
                  >
                    View Resume
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 glass">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Thank You for Visiting!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I appreciate you taking the time to learn about my work. Whether you're looking 
              for a dedicated developer, have a project in mind, or just want to connect, 
              I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleEmailClick}
                className="bg-gradient-primary hover:scale-105 transition-transform glow-primary"
              >
                Start a Conversation
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                variant="outline"
                className="border-primary/50 hover:border-primary hover:scale-105 transition-all"
              >
                Back to Top
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;