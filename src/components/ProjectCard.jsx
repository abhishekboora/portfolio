function ProjectCard({ title, description, link, image }) {
    return (
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
        <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <a
          href={link}
          className="text-indigo-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    );
  }
  
  export default ProjectCard;