import profileImg from '../assets/profile.jpg'; // Import the image
import './Hero.css';

function Hero() {
  return (
    <section
      id="hero"
      className="py-12 md:py-20 text-center bg-radial-gradient animate-pulse-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
      <div className="container mx-auto relative z-10">
        <img
          src={profileImg} // Use imported image
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 transform hover:scale-105 transition-transform duration-300"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
          Abhishek Boora
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-100">
          Web Developer
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;