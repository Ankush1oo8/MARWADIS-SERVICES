import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "OffPay Offline Payment System",
      category: "FinTech Solution",
      description: "Secure offline payment processing system enabling transactions without internet connectivity using advanced encryption.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["Flutter", "Node.js", "Firebase", "USSD"],
      link: "https://github.com/Ankush1oo8/OFFPAY",
      github: "https://github.com/Ankush1oo8/OFFPAY"
    },
    {
      title: "Travel Posting Site",
      category: "Social Platform",
      description: "Community-driven travel platform where users share experiences, tips, and discover new destinations worldwide.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      tech: ["Next.js", "MongoDB", "AWS S3", "mongo DB"],
      link: "https://major-project-z4v3.onrender.com/listings",
      github: "https://github.com/Ankush1oo8/Project"
    },
    {
      title: "E-Commerce Medicine App",
      category: "Healthcare Platform",
      description: "Digital pharmacy platform with prescription management, medicine delivery, and telemedicine consultation features.",
      image: "https://www.letsnurture.com/wp-content/themes/letsnutrure/img/mobile-app-01.png",
      tech: ["Flutter", "Firebase", "mongo DB", "Firebase store"],
      link: "#",
      github: "#"
    }
  ];

  // Animation variants for fade-in upwards
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2, // Stagger each card by 0.2s
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing our latest work across industries and technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-800 hover:border-gray-600"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-gray-600 text-black hover:bg-white hover:text-black flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-gray-600 text-black hover:bg-white hover:text-black flex-1"
                      disabled
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Work in Progress
                    </Button>
                  )}
                  {project.github !== "#" ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-gray-400 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-gray-400 hover:text-white"
                      disabled
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* See More Projects Card */}
          <motion.div
            custom={projects.length}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center justify-center p-8 text-center min-h-[400px]"
          >
            <div className="bg-gray-700 p-4 rounded-full mb-6 group-hover:bg-gray-600 transition-colors">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-black">See More Projects</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Discover our complete portfolio of innovative solutions and successful client implementations.
            </p>
            <a href="/projects">
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-black"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;