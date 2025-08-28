import {
  Code2,
  Database,
  Figma,
  Globe,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "React.js", level: 85, icon: <Code2 className="h-4 w-4" /> },
        { name: "JavaScript", level: 80, icon: <Code2 className="h-4 w-4" /> },
        { name: "HTML/CSS", level: 85, icon: <Code2 className="h-4 w-4" /> },
        { name: "TypeScript", level: 80, icon: <Code2 className="h-4 w-4" /> }
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 65, icon: <Database className="h-4 w-4" /> },
        { name: "Express.js", level: 60, icon: <Database className="h-4 w-4" /> },
        { name: "MongoDB", level: 60, icon: <Database className="h-4 w-4" /> },
        { name: "Git & GitHub", level: 95, icon: <Globe className="h-4 w-4" /> }
      ]
    },
    {
      title: "Development Tools",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 70, icon: <Figma className="h-4 w-4" /> },
        { name: "VS Code", level: 85, icon: <Code2 className="h-4 w-4" /> },
        { name: "Chrome DevTools", level: 75, icon: <Zap className="h-4 w-4" /> },
        { name: "Responsive Design", level: 80, icon: <Globe className="h-4 w-4" /> }
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
            My technical toolkit for web development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center text-white">
                <Code2 className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Clean Code</h4>
              <p className="text-sm text-muted-foreground">Best Practices</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center text-white">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Web Standards</h4>
              <p className="text-sm text-muted-foreground">Modern Development</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="font-medium text-foreground">Problem Solving</h4>
              <p className="text-sm text-muted-foreground">Analytical Thinking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;