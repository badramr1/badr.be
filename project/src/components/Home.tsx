import React from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          {/* Name and Picture Side by Side */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-12 space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-32 h-32 rounded-2xl overflow-hidden border border-white/10 animate-float flex-shrink-0">
              <img 
                src="/image.png" 
                alt="Badr Amri" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight">
                Badr <span className="text-white font-normal">Amri</span>
              </h1>
              <p className="text-xl text-white/60 font-light">
                Applied Information Technology Student
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
              Driven Applied Information Technology student with a passion for IT infrastructure, Linux, and automation. 
              Eager to learn, hands-on, and always looking for new tools and learning experiences in system 
              administration and virtualization.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => onNavigate('about')}
            className="group flex items-center justify-center space-x-3 btn-primary text-white px-8 py-3 rounded-lg font-medium hover-lift"
          >
            <span>About Me</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="group flex items-center justify-center space-x-3 btn-secondary text-white px-8 py-3 rounded-lg font-medium hover-lift"
          >
            <span>View Work</span>
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/badramr1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-white/40 hover:text-white/80 transition-all duration-300"
          >
            <div className="p-2 glass-subtle rounded-lg group-hover:bg-white/5 transition-all duration-300">
              <Github size={20} />
            </div>
            <span className="hidden sm:block text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/badramri/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 text-white/40 hover:text-white/80 transition-all duration-300"
          >
            <div className="p-2 glass-subtle rounded-lg group-hover:bg-white/5 transition-all duration-300">
              <Linkedin size={20} />
            </div>
            <span className="hidden sm:block text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;