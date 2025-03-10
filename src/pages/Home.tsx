import Counter from '../components/Counter';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent pointer-events-none" />
      
      <h1 className="text-5xl font-bold mb-12 text-green-300 text-center
                     animate-[glow_3s_ease-in-out_infinite] tracking-tight">
        This is a Setup boilerplate code for React + TS + Vite app
        <br />
        <span className="text-3xl block mt-4 text-green-400/90">made by AARAV SAGAR</span>
      </h1>
      
      <div className="logo-container flex items-center gap-6 mb-16">
        <img 
          src="https://vitejs.dev/logo.svg" 
          alt="Vite" 
          className="h-20 animate-[float_3s_ease-in-out_infinite]" 
        />
        <span className="text-5xl text-green-400">+</span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" 
          alt="TypeScript" 
          className="h-20 animate-[float_3s_ease-in-out_infinite] delay-100" 
        />
        <span className="text-5xl text-green-400">+</span>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
          alt="React" 
          className="h-20 animate-[float_3s_ease-in-out_infinite] delay-200" 
        />
      </div>

      <div className="mb-12">
        <Counter />
      </div>

      <SocialLinks />
    </div>
  );
};

export default Home;