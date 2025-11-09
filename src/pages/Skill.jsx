import SkillBox from "../components/SkillBox";
import WebhookIcon from '@mui/icons-material/Webhook';
import PsychologyIcon from '@mui/icons-material/Psychology';

function Skill() {
  const fullStack = ["Next.js","React.js","Node.js","Mongodb","Express.js","Tailwind CSS","Bootstrap","JavaScript"]
  const program = ["Java","C++","C","Sql","Mongodb","JavaScript"]
  return (
    <>
      <div id="skill" className="h-full w-full flex flex-col justify-evenly items-center bg-[#1d1d1f] mt-10 mb-10 overflow-x-hidden">
        <div className="flex flex-col justify-between items-center " data-aos="zoom-out-down">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
            My Skills
          </h1>
          <div className="w-1/2 bg-[#9f3877] h-2 mt-4 rounded"></div>
        </div>
        <div className="flex w-full justify-around gap-10 flex-col lg:flex-row">

        <SkillBox skills = {fullStack} head= {"Full Stack Development"} ><WebhookIcon/> </SkillBox>
        <SkillBox skills = {program} head= {"Programming Skills"}><PsychologyIcon/> </SkillBox>
        </div>
      </div>
    </>
  );
}
export default Skill;





