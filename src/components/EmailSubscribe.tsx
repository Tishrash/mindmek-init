import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BellIcon, CheckCircle2Icon } from 'lucide-react';

interface SuccessPopupProps {
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
    <div className="bg-gray-900 border border-[#00AEEF]/30 rounded-xl p-8 max-w-md w-full mx-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-[#00AEEF]" 
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${Math.random() * 5 + 3}s infinite`,
              animationDelay: `${Math.random() * 5}s`
            }} 
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4">
          <img src="/logo.png" alt="MindMek Logo" className="h-16 w-auto mx-auto" />
        </div>
        <CheckCircle2Icon className="w-16 h-16 text-[#00AEEF] mb-4" />
        <h3 className="text-2xl font-bold text-[#00AEEF] mb-2">Thank You!</h3>
        <p className="text-gray-300 mb-6">
          You've been successfully added to our waitlist. We'll notify you when we launch!
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#00AEEF] hover:bg-[#009ad3] text-white rounded-md font-medium transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export function EmailSubscribe() {
  const [buttonText, setButtonText] = useState('Notify Me');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  // Initialize EmailJS user ID once (ideally in app init)
  React.useEffect(() => {
    emailjs.init('j7gmW8fAmo3IbCZMs');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setButtonText('Sending...');

    const serviceID = 'default_service';
    const templateID = 'template_bq7fwpe';

    emailjs.sendForm(serviceID, templateID, e.currentTarget)
      .then(() => {
        setButtonText('Notify Me');
        setShowSuccess(true);
        setFormData({ name: '', email: '' });
        
        // Auto-close after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((err) => {
        setButtonText('Notify Me');
        alert('Error: ' + JSON.stringify(err));
      });
  };

  return (
   <div className="flex flex-col items-center justify-center w-full px-4 py-8">
  {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}

  <div className="w-half max-w-2xl">
    <p className="text-center text-gray-400 mb-4 text-sm sm:text-base">
      Be the first to know when we launch
    </p>

    <form
      id="form"
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row sm:items-center gap-3"
    >
      {/* Name input */}
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        className="w-half sm:w-3/3 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
        required
      />

      {/* Email input */}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        className="w-half sm:w-3/3 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
        required
      />

      {/* Submit button */}
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3  bg-[#00AEEF] text-white rounded-lg font-medium hover:bg-[#009ad3] transition-colors flex items-center justify-center whitespace-nowrap"
        disabled={buttonText === "Sending..."}
      >
        <BellIcon className="w-5 h-5 mr-2" />
        {buttonText}
      </button>
    </form>
  </div>
</div>
  );
}