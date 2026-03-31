import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center gap-8 px-8 py-3 bg-white/70 backdrop-blur-md border border-white/20 shadow-lg shadow-zinc-200/50 rounded-full">
        <a href="#" className="text-sm font-medium hover:text-blue-500 transition-colors">Start</a>
        <a href="#projekty" className="text-sm font-medium hover:text-blue-500 transition-colors">Projekty</a>
        <a href="#kontakt" className="text-sm font-medium hover:text-blue-500 transition-colors">Kontakt</a>
        
        {/* Mała kropka separatora */}
        <div className="w-1 h-1 bg-zinc-300 rounded-full" />
        
        <button className="text-sm font-semibold bg-zinc-900 text-white px-5 py-2 rounded-full hover:bg-zinc-700 transition-all">
          Resume
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;