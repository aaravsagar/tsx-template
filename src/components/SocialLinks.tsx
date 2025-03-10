import { Gitlab, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-8">
      <a
        href="https://github.com/aaravsagar"
        className="text-green-400 hover:text-green-300 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Gitlab size={28} />
      </a>
      <a
        href="https://instagram.com/aaravsagar29"
        className="text-green-400 hover:text-green-300 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={28} />
      </a>
      <a
        href="hhttps://www.linkedin.com/in/aarav-sagar-99a6422b8/"
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