import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">
            Rahul Berwal
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground max-w-md">
            Crafting beautiful digital experiences through thoughtful design and clean code.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-primary opacity-30"></div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Rahul Berwal.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="glass-card p-3 rounded-full hover:scale-110 transition-transform duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;