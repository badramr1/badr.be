import React from 'react';
import { Code, Server, Monitor } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Virtual Homelab",
      description: "Set up a virtual network including DHCP, DNS, and monitoring servers, router, and Ubuntu workstation. Implemented using Ansible, Vagrant, and VirtualBox for automated infrastructure management.",
      tech: ["Ansible", "Vagrant", "VirtualBox", "Ubuntu", "DHCP", "DNS"],
      icon: Server
    },
    {
      title: "Alhambra: The Dice Game",
      description: "Digital version of the board game developed in Java and JavaFX. Worked in a team of 5 to implement game mechanics and create an intuitive GUI for an engaging user experience.",
      tech: ["Java", "JavaFX", "Team Development", "GUI Design"],
      icon: Code
    },
    {
      title: "System Engineering Project",
      description: "Realized a fully automated network architecture in a team environment. Responsible for the Windows Server environment, ensuring seamless integration and optimal performance.",
      tech: ["Windows Server", "Network Architecture", "Automation", "Team Collaboration"],
      icon: Monitor
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            My <span className="text-white">Portfolio</span>
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 hover-lift group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 glass-subtle rounded-lg group-hover:bg-white/8 transition-all duration-300">
                    <IconComponent className="text-white/60" size={20} />
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed text-sm font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-white/50 font-medium border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;