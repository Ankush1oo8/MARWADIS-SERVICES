import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-fade-in">
            MARWADIS
            <span className="block text-5xl md:text-7xl mt-2">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We craft premium digital experiences. From cutting-edge mobile applications to enterprise web solutions, 
            our team delivers software that defines the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 group transition-all duration-300 hover:scale-105"
              >
                View Our Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white hover:bg-white text-lg px-8 py-4 transition-all duration-300 hover:scale-105 text-zinc-950"
              >
                Start Your Project
              </Button>
            </a>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;