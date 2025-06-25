import Projects from './Projects';

const ProjectsSection = () => {
  return (
    <section className="relative py-24">
      <div className="mb-12 space-y-8 px-6 md:mb-0 xl:px-56">
        <h2 className="h2-bold">Projects</h2>
        <p className="regular-paragraph max-w-[835px]">
         I’ve worked on all kinds of things — frontend, backend, and things that crash in between.
Check out some of my latest builds that didn’t end in a stack trace.
        </p>
      </div>

      <Projects />

      <div className="projects-grid-pattern-bottom absolute bottom-0 -z-10 h-48 w-full" />
    </section>
  );
};
export default ProjectsSection;
