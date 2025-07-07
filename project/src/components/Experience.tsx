import React from 'react';
import { Briefcase, Mail, Linkedin } from 'lucide-react';

const Experience: React.FC = () => {
  const workExperience = [
    {
      period: '2024 - Present',
      title: 'Control Room Operator',
      company: 'Ahold Delhaize - Distribution Center Ninove',
      location: 'Ninove, Belgium',
      responsibilities: [
        'Monitored SCADA systems to ensure efficient production processes and minimize downtime',
        'Prepared daily dashboard reports with analysis of factors impacting production efficiency',
        'Served as liaison between Delhaize and Dematic for technical and operational communication'
      ],
      skills: ['SCADA Systems', 'Process Monitoring', 'Data Analysis', 'Technical Communication']
    },
    {
      period: '2022 - 2024',
      title: 'Mechanization Operator',
      company: 'Ahold Delhaize - Distribution Center Ninove',
      location: 'Ninove, Belgium',
      responsibilities: [
        'Resolved malfunctions in production machines and conveyors',
        'Detected and reported technical irregularities to supervisors',
        'Contributed to smooth production processes through rapid intervention and follow-up of mechanical issues'
      ],
      skills: ['Troubleshooting', 'Mechanical Systems', 'Problem Solving', 'Process Optimization']
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Work <span className="text-white">Experience</span>
          </h1>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div key={index} className="glass rounded-2xl p-8 hover-lift group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-2 glass-subtle rounded-lg mr-4 group-hover:bg-white/8 transition-all duration-300">
                      <Briefcase className="text-white/60" size={20} />
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      {job.title}
                    </h3>
                  </div>
                  <p className="text-white/70 font-medium text-lg mb-4">{job.company}</p>
                </div>
                <div className="lg:ml-8">
                  <span className="inline-block bg-white/8 text-white/60 px-4 py-2 rounded-lg text-sm font-medium border border-white/10">
                    {job.period}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-medium text-white mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-white/60 flex items-start text-sm">
                        <div className="w-1 h-1 bg-white/40 rounded-full mr-3 mt-2"></div>
                        <span className="leading-relaxed font-light">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-white mb-4">
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/5 text-white/60 rounded-lg text-xs font-medium border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 hover-lift">
            <h3 className="text-2xl font-medium text-white mb-4">Ready for New Challenges</h3>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto text-sm font-light leading-relaxed">
              With hands-on experience in industrial automation and a strong educational background 
              in IT Infrastructure Engineering, I'm ready to take on new challenges and contribute 
              to innovative technology solutions.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/badramri/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-2 btn-secondary text-white px-6 py-3 rounded-lg font-medium text-sm hover-lift"
              >
                <Linkedin size={16} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;