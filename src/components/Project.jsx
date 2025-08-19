import Button from "./Button";
import Icon from "./Icon";
import GitHubIcon from '@mui/icons-material/GitHub';

function Project({ data }) {
  return (
    <>
    <div  data-aos="flip-up">
      <div className="bg-[#1d1d1f] min-w-80 p-5 rounded-2xl border border-[#696969] scale-95 hover:scale-100 transition-all duration-500">
        <div className="bg-[#a4a4a4] rounded-2xl max-h-40">
          <img className = "max-h-40 w-full bg-cover" src={data.image} alt={data.title} />
        </div>
        <div className="mt-3 max-w-80">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <p className="mt-2 text-[#a4a4a4]">{data.content}</p>
          <div className="flex gap-3 w-full flex-wrap mt-2">
            {data.tech.map((lang) => (
              <div
                key={lang}
                className="p-1.5 border border-[#9f3877] rounded-2xl bg-[#9f387886] text-[#ff009d] "
              >
                {lang}
              </div>
            ))}
          </div>
            <a href={data.code}>
          <button className="flex items-center gap-2 mt-3 border p-3 rounded-xl bg-black text-xl border-[#696969] hover:scale-105 duration-200 transition-all">
             <GitHubIcon/> code
          </button>
         
            </a>
        </div>
      </div>

      </div>
    </>
  );
}

export default Project;
