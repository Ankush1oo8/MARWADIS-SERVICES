import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Team = () => {
  const teamMembers = [
    {
      name: "Ankush Chudiwal",
      role: "Lead Full-Stack Developer",
      bio: "2+ years building scalable web applications. Expert in React, Node.js, and cloud architecture.",
      image: "https://avatars.githubusercontent.com/u/154556772?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/ankush-chudiwal/",
        github: "https://github.com/ankush1oo8"
      }
    },
    {
      name: "Riddesh Kankariya",
      role: "Mobile Developer",
      bio: "Mobile app specialist with 1.5+ years experience. Worked on more than 20 projects.",
      image: "https://avatars.githubusercontent.com/u/147300781?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/riddesh-kankariya/",
        github: "https://github.com/Riddesh12"
      }
    },
    {
      name: "Sanyam Katariya",
      role: "DevOps & Cloud Engineer",
      bio: "Infrastructure expert specializing in AWS, Kubernetes, and CI/CD automation.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEZ_M3GxIPilA/profile-displayphoto-shrink_200_200/B4DZQxoifzHMAY-/0/1735999499023?e=1754524800&v=beta&t=7SwO076WWYiV-nY8m5SIusMdMWWIomD5QEwkcOdjTpo",
      social: {
        linkedin: "https://www.linkedin.com/in/sanyam-katariya-01a681259/",
        github: "https://github.com/sanyamj894"
      }
    }
  ];

  // Animation variants for fade-in upwards
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
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
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Elite developers and designers who turn complex challenges into elegant solutions
          </p>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 font-medium">
              🚀 Exciting News! Many new talented members are joining our team soon.
            </p>
            <p className="text-gray-400 mt-2">
              Stay tuned for updates as we expand our expertise and capabilities.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="relative mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-700 group-hover:border-gray-500 transition-colors"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-gray-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={member.social.linkedin} 
                  className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={member.social.github} 
                  className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;