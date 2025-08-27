import { Trophy, Award, Users, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Top 10 Finalist",
      event: "HackWithChandigarh 2023",
      description: "Developed an innovative healthcare platform that earned recognition among 500+ participants",
      date: "2023",
      category: "Hackathon"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Best UI/UX Design",
      event: "TechCrunch Disrupt Hackathon",
      description: "Won the design excellence award for creating an intuitive fintech application interface",
      date: "2023",
      category: "Design Award"
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Team Lead",
      event: "Google Solution Challenge",
      description: "Led a team of 4 developers to create a sustainability-focused mobile application",
      date: "2022",
      category: "Leadership"
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      title: "Innovation Award",
      event: "University Tech Fest",
      description: "Recognized for developing a groundbreaking AR-based learning platform",
      date: "2022",
      category: "Innovation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones in hackathons, competitions, and professional development
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <h4 className="text-primary font-medium mb-3">
                    {achievement.event}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;