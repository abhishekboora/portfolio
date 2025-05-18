function Skills() {
    const skills = ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Java', 'PHP', ' MySQL','Firebase' ];
  
    return (
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;