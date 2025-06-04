import { Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies. React, Next.js, and modern frameworks.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "App Store Optimization"]
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Premium websites that convert visitors into customers with stunning design and functionality.",
      features: ["Custom Design", "CMS Integration", "E-commerce Ready"]
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Robust backend architectures and APIs that scale with your business growth.",
      features: ["API Development", "Database Design", "Microservices"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment strategies for maximum reliability and performance.",
      features: ["AWS/Azure", "DevOps", "Auto-scaling"]
    },
    {
      icon: Shield,
      title: "Security & Consulting",
      description: "Comprehensive security audits and technical consulting to protect your digital assets.",
      features: ["Security Audits", "Code Reviews", "Best Practices"]
    }
  ];

  // Animation variants for fade-in and scale-up
  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We master the technologies that power tomorrow's digital landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-black border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="bg-gray-900 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;