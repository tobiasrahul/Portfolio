import project1Image from '@/assets/project-1.png';
import project2Image from '@/assets/project-2.png';
import project3Image from '@/assets/project-3.png';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe, Monitor, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Glassy UI",
      description: "This open-source library features stunning React components designed with a captivating glassmorphism effect, perfect for giving your web applications a modern and sleek design.",
      image: project1Image,
      technologies: ["TypeScript", "CSS", "JavaScript", "HTML"],
      liveUrl: "https://glassy-ui-omega.vercel.app/",
      githubUrl: "https://github.com/tobiasrahul/glassy-ui",
      icon: <Monitor className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Pixicon",
      description: "Pixicon is a website that offers custom folder icons for Windows, allowing users to personalize their PC by changing the default folder icons to match their style preferences.",
      image: project2Image,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://pixicon.vercel.app/",
      githubUrl: "https://github.com/tobiasrahul/pixicon",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Globetrotter",
      description: "Globetrotter, a modern travel website. Using the power of HTML, CSS, and JavaScript, created a visually captivating and user-friendly experience that makes travelling exciting and effortless.",
      image: project3Image,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://globetrotter-two-chi.vercel.app/",
      githubUrl: "https://github.com/tobiasrahul/Globetrotter",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design and frontend development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
                    onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com/tobiasrahul', '_blank', 'noopener,noreferrer')}
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;