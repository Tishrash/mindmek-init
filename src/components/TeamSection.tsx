import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function TeamSection() {
  const teamMembers = [{
    name: 'Dr. Alex Morgan',
    role: 'Founder & CEO',
    bio: 'Neuroscience pioneer with 15+ years experience in brain-computer interfaces',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'Dr. Sarah Chen',
    role: 'Chief Science Officer',
    bio: 'PhD in Cognitive Neuroscience with expertise in AI and neural networks',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'Michael Rodriguez',
    role: 'CTO',
    bio: "Former lead engineer at Tesla's neural interface division",
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }, {
    name: 'Dr. Kira Patel',
    role: 'Head of Research',
    bio: 'Specialized in neural plasticity and cognitive enhancement technologies',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }];
  return <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        <span className="text-[#00AEEF]">Meet Our</span>{' '}
        <span className="text-gray-300">Team</span>
      </h2>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
        Our world-class team of scientists, engineers, and visionaries are
        dedicated to pushing the boundaries of neural technology
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map(member => <div key={member.name} className="bg-black bg-opacity-60 border border-gray-800 rounded-lg overflow-hidden hover:border-[#00AEEF] transition-colors group">
            <div className="aspect-w-1 aspect-h-1 relative">
              <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              {/* Social Icons */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href={member.social.twitter} className="bg-gray-900 p-2 rounded-full hover:bg-[#00AEEF] transition-colors">
                  <TwitterIcon className="w-4 h-4 text-white" />
                </a>
                <a href={member.social.linkedin} className="bg-gray-900 p-2 rounded-full hover:bg-[#00AEEF] transition-colors">
                  <LinkedinIcon className="w-4 h-4 text-white" />
                </a>
                <a href={member.social.github} className="bg-gray-900 p-2 rounded-full hover:bg-[#00AEEF] transition-colors">
                  <GithubIcon className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00AEEF] transition-colors">
                {member.name}
              </h3>
              <p className="text-[#00AEEF] text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </div>
          </div>)}
      </div>
      {/* Join the Team CTA */}
      <div className="mt-16 text-center bg-gray-900/50 p-8 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold mb-3 text-white">Join Our Team</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals who are passionate about
          revolutionizing the future of neural technology.
        </p>
        <a href="#" className="inline-flex items-center px-6 py-3 bg-transparent border border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-md transition-colors">
          View Open Positions
        </a>
      </div>
    </div>;
}