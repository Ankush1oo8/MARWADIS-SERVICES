import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for staggered fade-in and slide-up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 variants={childVariants} className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            MARWADIS
            <span className="block text-5xl md:text-7xl mt-2">Solutions</span>
          </motion.h1>
          
          <motion.p variants={childVariants} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft premium digital experiences. From cutting-edge mobile applications to enterprise web solutions, 
            our team delivers software that defines the future.
          </motion.p>
          
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 group transition-all duration-300 hover:scale-105"
              >
                View Our Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white text-lg px-8 py-4 transition-all duration-300 hover:scale-105 text-zinc-950"
              >
                Start Your Project
              </Button>
            </a>
          </motion.div>
          
          {/* Feature Icons */}
          <motion.div variants={childVariants} className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Code className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-400">Web Apps</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-400">Mobile Apps</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-900 p-4 rounded-full mx-auto mb-3 w-16 h-16 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-gray-400">Websites</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;