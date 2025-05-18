import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', color: 'bg-cyan-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'Tailwind CSS', color: 'bg-teal-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg' },
    { name: 'HTML5', color: 'bg-orange-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg' },
    { name: 'CSS3', color: 'bg-blue-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg' },
    { name: 'Java', color: 'bg-red-600', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/java.svg' },
    { name: 'PHP', color: 'bg-purple-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg' },
    { name: 'MySQL', color: 'bg-blue-700', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'Firebase', color: 'bg-amber-500', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:scale-105 transition-transform duration-200`}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-6 h-6 rounded-full bg-white p-1"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;