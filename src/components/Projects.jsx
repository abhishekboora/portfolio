import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Headphone Kart',
      description: 'A dynamic blog built with HTML and JavaScript.',
      link: 'https://github.com/abhishekboora/HeadphoneKart',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX80t1YPecnyMKEjyG3vxkRM96BOSoYZFdww&s',
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack application for managing employee data.',
      link: 'https://github.com/abhishekboora/Employee-Management',
      image: 'https://www.shutterstock.com/image-photo/two-happy-busy-middle-aged-260nw-2479065515.jpg',
    },
    {
      title: 'Login Page In PHP',
      description: 'This is a simple login page built using PHP.',
      link: 'https://github.com/abhishekboora/login-page-in-php',
      image: 'https://img.freepik.com/free-vector/website-user-login-page-template-design_1017-30786.jpg?semt=ais_hybrid&w=740',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;