
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Start Your Project
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Let's discuss how we can help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input 
                      type="text" 
                      className="bg-gray-800 border-gray-700 text-white focus:border-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input 
                      type="text" 
                      className="bg-gray-800 border-gray-700 text-white focus:border-gray-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input 
                    type="email" 
                    className="bg-gray-800 border-gray-700 text-white focus:border-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <select className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-gray-500 focus:outline-none">
                    <option>Web Application</option>
                    <option>Mobile App</option>
                    <option>Website Design</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your project</label>
                  <Textarea 
                    className="bg-gray-800 border-gray-700 text-white focus:border-gray-500 min-h-[120px]"
                    placeholder="Describe your project requirements, timeline, and goals..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-white text-black hover:bg-gray-200 group"
                  size="lg"
                >
                  Send Message 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get in touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We're here to help bring your ideas to life. Whether you need a complete digital solution 
                  or want to enhance your existing platform, our team is ready to deliver exceptional results.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email us</p>
                    <p className="text-gray-400">hello@elitesoftware.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Call us</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Visit us</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mt-8">
                <h4 className="text-lg font-semibold mb-3 text-white">Response Time</h4>
                <p className="text-gray-400 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent projects, 
                  please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
