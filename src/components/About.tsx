import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
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
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  B.Tech CSE Graduate
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Fresh B.Tech Computer Science Engineering graduate from Palakkad, Kerala (2024). 
                  Passionate about full-stack development with a strong foundation in Python, Django, 
                  and modern web technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I love creating efficient, scalable solutions and am always eager to learn new 
                  technologies. My journey spans from building HR management systems to developing 
                  emotional analysis tools and route optimization applications.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  className="p-4 bg-secondary/50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-primary mb-2">🎓 Education</h4>
                  <p className="text-muted-foreground">B.Tech Computer Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Graduated 2024</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-secondary/50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-primary mb-2">📍 Location</h4>
                  <p className="text-muted-foreground">Palakkad, Kerala, India</p>
                </motion.div>

                <motion.div
                  className="p-4 bg-secondary/50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h4 className="font-semibold text-primary mb-2">💡 Interests</h4>
                  <p className="text-muted-foreground">Full-Stack Development, AI/ML, Web Technologies</p>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;