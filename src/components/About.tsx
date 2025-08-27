import { Code, Lightbulb, Palette, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Web Development",
      description: "Building responsive websites using modern HTML, CSS, and JavaScript"
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "React Development",
      description: "Creating interactive UIs with React.js and modern web frameworks"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      title: "Problem Solving",
      description: "Analytical thinking and creative approach to coding challenges"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Continuous Learning",
      description: "Actively learning new technologies and development best practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6 opacity-0 animate-fade-in-up animate-delayed-1">
              <div className="glass-card p-10 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Hi there! 👋
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm an aspiring Frontend Developer with a growing passion for creating engaging web experiences. 
                    Currently exploring the exciting world of web development, I'm focused on learning and implementing 
                    modern technologies to build user-friendly applications.
                  </p>
                  <p>
                    My journey began with a strong interest in web technologies, which led me to learn 
                    <strong className="text-primary"> HTML</strong>, <strong className="text-primary"> CSS</strong>, 
                    and <strong className="text-primary"> JavaScript</strong>. I'm currently expanding my skills with
                    <strong className="text-primary"> React.js</strong>, <strong className="text-primary"> Figma</strong> and modern development tools.
                  </p>
                  <p>
                    I'm enthusiastic about learning new technologies and best practices in web development. 
                    Each project is an opportunity to grow my skills and create something meaningful while 
                    focusing on clean, readable code.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats & Highlights */}
            <div className="space-y-6 opacity-0 animate-fade-in-up animate-delayed-2">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Learning Progress
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Personal Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                    <div className="text-sm text-muted-foreground">Web Applications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">2+</div>
                    <div className="text-sm text-muted-foreground">Hackathons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Hours of Learning</div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h4 className="font-semibold mb-4 text-foreground">Current Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Strengths */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title} 
                className="glass-card p-8 rounded-2xl text-center opacity-0 animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;