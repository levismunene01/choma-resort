import { motion } from "framer-motion";
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At Luxury Restaurant, we are passionate about delivering world-class dining experiences. 
        From the freshest ingredients to the elegant presentation, every dish is crafted to delight your senses.
      </motion.p>

      {/* About Sections */}
      <div className="about-cards">
        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="Our Story"/>
          <h3>Our Story</h3>
          <p>Founded in 2020, our restaurant combines tradition with innovation to create unforgettable meals.</p>
        </motion.div>

        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Our Mission"/>
          <h3>Our Mission</h3>
          <p>To provide a premium dining experience that combines taste, presentation, and impeccable service.</p>
        </motion.div>

        <motion.div 
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9" alt="Our Values"/>
          <h3>Our Values</h3>
          <p>Fresh ingredients, attention to detail, sustainability, and customer satisfaction are at our core.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;