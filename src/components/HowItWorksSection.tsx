import React from 'react';
import { BrainIcon, Cpu, Zap, Users } from 'lucide-react';
export function HowItWorksSection() {
  const steps = [{
    id: 1,
    title: 'Neural Mapping',
    description: 'Our advanced sensors map your unique neural patterns to create a personalized cognitive profile.',
    icon: <BrainIcon className="w-8 h-8 text-[#00AEEF]" />
  }, {
    id: 2,
    title: 'AI Processing',
    description: 'Our proprietary algorithms analyze your neural data to identify optimization opportunities.',
    icon: <Cpu className="w-8 h-8 text-[#00AEEF]" />
  }, {
    id: 3,
    title: 'Cognitive Enhancement',
    description: 'Targeted neural stimulation and feedback systems enhance your cognitive capabilities.',
    icon: <Zap className="w-8 h-8 text-[#00AEEF]" />
  }, {
    id: 4,
    title: 'Continuous Learning',
    description: 'The system evolves with you, constantly adapting to optimize performance.',
    icon: <Users className="w-8 h-8 text-[#00AEEF]" />
  }];
  return <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        <span className="text-[#00AEEF]">How</span>{' '}
        <span className="text-gray-300">It Works</span>
      </h2>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
        Our revolutionary technology seamlessly integrates with your cognitive
        processes through a simple four-step approach
      </p>
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00AEEF]/0 via-[#00AEEF] to-[#00AEEF]/0 hidden md:block" style={{
        transform: 'translateX(-50%)'
      }}></div>
        <div className="space-y-12 md:space-y-0 relative">
          {steps.map((step, index) => <div key={step.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-[#00AEEF] flex items-center justify-center relative z-10">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-black font-bold">
                    {step.id}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <a href="#notify" className="inline-flex items-center px-6 py-3 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md transition-colors">
          Join the Waitlist
        </a>
      </div>
    </div>;
}