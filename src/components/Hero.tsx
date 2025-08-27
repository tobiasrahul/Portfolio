import heroImage from '@/assets/hero-illustration.jpg';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // The resume file should be in the public folder
    const resumeUrl = '/resume.pdf'; // or '/resume.docx' if you're using Word format
    
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Rahul_Berwal_Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl hero-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl hero-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-3xl hero-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8 opacity-0 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg font-medium animate-fade-in-up animate-delayed-1">
              Hello, I'm
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text animate-fade-in-up animate-delayed-2">
              Rahul Berwal
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-foreground animate-fade-in-up animate-delayed-3">
              UI/UX Designer & Frontend Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting beautiful, intuitive digital experiences that bridge the gap between design and development. 
            Passionate about creating user-centered solutions that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105"
              onClick={scrollToAbout}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl hero-float">
              <img
                src={heroImage}
                alt="Alex Morgan - UI/UX Designer"
                className="w-full h-auto max-w-md rounded-2xl shadow-strong"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl hero-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">UI</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl hero-float" style={{ animationDelay: '3s' }}>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;