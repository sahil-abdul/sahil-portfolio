import Button from "../components/Button";
import Project from "../components/Project";
import { NovaPath,WanderMate,PenCraft,SayMore } from "../components/ProjectInfo";

function Projects({fun}) {
 
  return (
    <>
      <div
        id="project"
        className="h-full w-full flex flex-col justify-evenly items-center pb-4 overflow-x-hidden"
      >
        <div className="flex flex-col justify-between items-center " data-aos="zoom-out-down">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            Featured Projects
          </h1>
          <div className="w-1/2 bg-[#9f3877] h-2 mt-4 rounded "></div>
        </div>
        <div className="flex w-full justify-start ml-1.5 md:justify-around gap-10 overflow-x-auto scrollbar-hide">
          <Project data={SayMore} />
          <Project data={NovaPath}/>
          <Project data={WanderMate} />
        </div>
        <Button fun = {fun}>View All Projects</Button>
      </div>



    </>
  );
}

export default Projects;
