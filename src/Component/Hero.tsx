import heroImg from "../assets/banner-stack.png";

export const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="flex-1">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold">
            Build • Explore • Create
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal{" "}
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed mt-6">
            Explore frontend, backend, database, and development tools, compare
            your options, and build a technology stack that fits your next
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#technologies"
              className="brand-gradient text-white px-6 py-3 rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Development Stack Illustration"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
