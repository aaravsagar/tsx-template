import React from 'react';
import { Gitlab, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-8">
      <a
        href="https://gitlab.com/aaravsagar"
        className="text-green-400 hover:text-green-300 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gitlab size={28} />
      </a>
      <a
        href="https://instagram.com/aaravsagar"
        className="text-green-400 hover:text-green-300 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={28} />
      </a>
      <a
        href="https://linkedin.com/in/aaravsagar"
        className="text-green-400 hover:text-green-300 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={28} />
      </a>
    </div>
  );
};

export default SocialLinks;