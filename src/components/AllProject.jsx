import Icon from "./Icon";
import Project from "./Project";
import { NovaPath, WanderMate, PenCraft, Todo ,SayMore,MusicSchool} from "./ProjectInfo";
import CloseIcon from '@mui/icons-material/Close';

function AllProject({fun}) {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center p-6 flex-col">
        <div className="w-full flex justify-around items-center p-6">
          <div className="w-3/4">
            <span className="font-bold text-5xl">All Projects</span>
            <p className="text-[#a4a4a4]">
              Explore my complete portfolio of work
            </p>
          </div>
          <button onClick= {fun}>
            <Icon><CloseIcon/></Icon>
          </button>
        </div>

        <div className="flex w-full justify-center ml-1.5 md:justify-around gap-10 flex-wrap overflow-y-auto scrollbar-hide">
         <Project data={SayMore} />
          <Project data={NovaPath} />
          <Project data={WanderMate} />
          <Project data={PenCraft} />
          <Project data={MusicSchool} />
          <Project data={Todo} />
       
        </div>
      </div>
    </div>
  );
}
export default AllProject;

