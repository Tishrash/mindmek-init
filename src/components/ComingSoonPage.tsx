import { useState } from 'react';
import { BellIcon } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { EmailSubscribe } from './EmailSubscribe';
import { FeatureHighlight } from './FeatureHighlight';
import { HowItWorksSection } from './HowItWorksSection';
//import { TeamSection } from './TeamSection';
import { FaqSection } from './FaqSection';
import { BrainCircuitIcon, CogIcon, ActivityIcon, RocketIcon, GlobeIcon, ShieldIcon, MenuIcon, XIcon, ChevronRightIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Launch date - set to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  return <main className="min-h-screen w-full bg-black text-white flex flex-col">
    {/* Header/Navigation */}
    <header className="w-full bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="MindMek Logo" className="h-10 w-auto" />
            <span className="ml-3 text-xl font-bold">
              <span className="text-[#00AEEF]">Mind</span>
              <span className="text-gray-300">Mek</span>
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-[#00AEEF] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-[#00AEEF] transition-colors">
              How It Works
            </a>
            <a href="#team" className="text-gray-300 hover:text-[#00AEEF] transition-colors">
              Our Team
            </a>
            <a href="#faq" className="text-gray-300 hover:text-[#00AEEF] transition-colors">
              FAQ
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a href="#" className="px-4 py-2 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md transition-colors">
              Get Notified
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-gray-900 border-t border-gray-800">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00AEEF] hover:bg-gray-800 rounded-md" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00AEEF] hover:bg-gray-800 rounded-md" onClick={() => setIsMenuOpen(false)}>
            How It Works
          </a>
          <a href="#team" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00AEEF] hover:bg-gray-800 rounded-md" onClick={() => setIsMenuOpen(false)}>
            Our Team
          </a>
          <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-[#00AEEF] hover:bg-gray-800 rounded-md" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </a>
          <a href="#notify" className="block px-3 py-2 text-base font-medium text-white bg-[#00AEEF] hover:bg-[#009ad3] rounded-md mt-4" onClick={() => setIsMenuOpen(false)}>
            Get Notified
          </a>
        </div>
      </div>}
    </header>

    {/* Hero Section */}
    <div className="relative w-full flex flex-col items-center justify-center py-16 px-4 md:py-24">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => <div key={i} className="absolute rounded-full bg-blue-500/10" style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `pulse ${Math.random() * 5 + 3}s infinite`,
            animationDelay: `${Math.random() * 5}s`
          }} />)}
        </div>
      </div>
      {/* Logo */}
      <div className="mb-8 relative z-10">
        <img src="/image-2560x1664_2.png" alt="MindMek Logo" className="w-40 md:w-48 h-auto" />
      </div>
      {/* Coming Soon Text */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center relative z-10">
        <span className="text-[#00AEEF]">Coming</span>{' '}
        <span className="text-gray-300">Soon</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl text-center relative z-10">
        The future of cognitive engineering and AI-powered solutions
      </p>
      {/* Countdown Timer */}
      <div className="mb-12 relative z-10">
        <CountdownTimer targetDate={launchDate} />
      </div>
      {/* Email Subscription */}
      <div id="notify" className="w-full max-w-md relative z-10">
        <EmailSubscribe />
      </div>
    </div>

    {/* Features Section */}
    <div id="features" className="w-full bg-gray-900/50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          <span className="text-[#00AEEF]">Pioneering</span>{' '}
          <span className="text-gray-300">the Future</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
          MindMek is at the forefront of neural technology, combining
          cutting-edge AI with advanced cognitive engineering to create
          solutions that enhance human potential.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureHighlight icon={<BrainCircuitIcon className="w-8 h-8 text-[#00AEEF]" />} title="Neural Integration" description="Advanced brain-computer interfaces designed to enhance cognitive capabilities" />
          <FeatureHighlight icon={<ActivityIcon className="w-8 h-8 text-[#00AEEF]" />} title="Cognitive Analytics" description="Real-time monitoring and analysis of brain activity patterns" />
          <FeatureHighlight icon={<CogIcon className="w-8 h-8 text-[#00AEEF]" />} title="AI-Powered Solutions" description="Intelligent systems that adapt and learn from neural feedback" />
          <FeatureHighlight icon={<RocketIcon className="w-8 h-8 text-[#00AEEF]" />} title="Performance Optimization" description="Tools to enhance mental clarity, focus and cognitive efficiency" />
          <FeatureHighlight icon={<ShieldIcon className="w-8 h-8 text-[#00AEEF]" />} title="Secure Architecture" description="Enterprise-grade security protecting your most valuable data" />
          <FeatureHighlight icon={<GlobeIcon className="w-8 h-8 text-[#00AEEF]" />} title="Global Connectivity" description="Seamless integration across devices and platforms worldwide" />
        </div>
      </div>
    </div>

    {/* How It Works Section */}
    <div id="how-it-works" className="w-full bg-black py-16 px-4">
      <HowItWorksSection />
    </div>

    {/* Team Section 
      <div id="team" className="w-full bg-gray-900/30 py-16 px-4">
        <TeamSection />
      </div>*/}

    {/* FAQ Section */}
    <div id="faq" className="w-full bg-black py-16 px-4">
      <FaqSection />
    </div>

    {/* Pre-footer CTA */}
    <div className="w-full bg-[#00AEEF]/10 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="text-[#00AEEF]">Ready to</span>{' '}
          <span className="text-gray-300">Transform Your Future?</span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Be among the first to experience the revolutionary technology that
          will change how we interact with machines and enhance human
          potential.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="px-8 py-3 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md font-medium transition-colors inline-flex items-center justify-center">
            Get Early Access
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </a>
          <button className="px-8 py-3 bg-transparent border border-gray-600 hover:border-[#00AEEF] text-gray-300 hover:text-[#00AEEF] rounded-md font-medium transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="w-full bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="MindMek Logo" className="h-8 w-auto" />
              <span className="ml-2 text-lg font-bold">
                <span className="text-[#00AEEF]">Mind</span>
                <span className="text-gray-300">Mek</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Pioneering the future of neural technology and cognitive
              engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  How It Works
                </a>
              </li>
              {/* <li>
                  <a href="#team" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                    Our Team
                  </a>
                </li> */}
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-[#00AEEF] mr-3 mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 text-[#00AEEF] mr-3 mt-0.5" />
                <span className="text-gray-400">info@mindmek.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-[#00AEEF] mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and news
            </p>
            <a
              href="#"
              className="flex items-center px-4 py-2 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md transition-colors"
            >
              <BellIcon className="w-5 h-5 mr-2" />
              Subscribe
            </a>

          </div>
        </div>
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2023 MindMek. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#00AEEF] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00AEEF] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00AEEF] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>

    <style>{`
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.7;
    }
  }
`}</style>
  </main>;
}