import { 
  Figma, 
  Palette, 
  Code2, 
  Smartphone, 
  Globe, 
  Database,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 95, icon: <Figma className="h-4 w-4" /> },
        { name: "Adobe XD", level: 90, icon: <Layers className="h-4 w-4" /> },
        { name: "Sketch", level: 85, icon: <Palette className="h-4 w-4" /> },
        { name: "Adobe Creative Suite", level: 88, icon: <Palette className="h-4 w-4" /> }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 92, icon: <Code2 className="h-4 w-4" /> },
        { name: "TypeScript", level: 88, icon: <Code2 className="h-4 w-4" /> },
        { name: "JavaScript", level: 95, icon: <Code2 className="h-4 w-4" /> },
        { name: "Tailwind CSS", level: 90, icon: <Code2 className="h-4 w-4" /> }
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 82, icon: <Database className="h-4 w-4" /> },
        { name: "Firebase", level: 85, icon: <Database className="h-4 w-4" /> },
        { name: "Git & GitHub", level: 90, icon: <Globe className="h-4 w-4" /> },
        { name: "MongoDB", level: 78, icon: <Database className="h-4 w-4" /> }
      ]
    },
    {
      title: "Mobile & Web",
      icon: <Smartphone className="h-6 w-6" />,
      skills: [
        { name: "Responsive Design", level: 95, icon: <Smartphone className="h-4 w-4" /> },
        { name: "React Native", level: 80, icon: <Smartphone className="h-4 w-4" /> },
        { name: "Progressive Web Apps", level: 85, icon: <Globe className="h-4 w-4" /> },
        { name: "Performance Optimization", level: 88, icon: <Zap className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-8 rounded-2xl opacity-0 animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-primary rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="space-y-2 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 glass-card p-8 rounded-2xl max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Additional Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center text-white">
                <Layers className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">UI/UX Design</h4>
              <p className="text-sm text-muted-foreground">User Research & Testing</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg mx-auto flex items-center justify-center text-foreground">
                <Code2 className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Best Practices & Testing</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Web Standards</h4>
              <p className="text-sm text-muted-foreground">Accessibility & SEO</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg mx-auto flex items-center justify-center text-foreground">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Performance</h4>
              <p className="text-sm text-muted-foreground">Optimization & Speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;