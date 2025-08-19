import Icon from "./Icon";
import SchoolIcon from '@mui/icons-material/School';

function About() {
  return (
    <div
      id="about"
      className="min-h-full w-full flex items-center flex-col gap-4 justify-around lg:justify-evenly mt-10 overflow-x-hidden"
    >
      <div className="flex flex-col justify-between items-center "  data-aos="zoom-out-down">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider">
          About Me
        </h1>
        <div className="w-1/2 bg-[#9f3877] h-2 mt-4 rounded "></div>
      </div>
      <div className=" w-full  rounded-2xl flex justify-around items-center gap-6 flex-wrap p-2.5">
        <section className="w-full lg:w-1/3 p-1.5" data-aos="zoom-out-right">
          <p className="text-xl text-gray-300">
            I'm a passionate MERN Stack Developer with expertise in building
            modern, scalable web applications using MongoDB, Express.js, React,
            and Node.js.
          </p>
          <br />
          <p className="text-xl text-gray-300">
            My journey in tech has taken me through a wide range of
            projects—from dynamic, responsive front-end interfaces to robust
            back-end APIs. I enjoy solving complex problems, optimizing
            performance, and crafting intuitive, user-friendly digital
            experiences.
          </p>

          <div className="bg-black rounded-2xl p-1.5 mt-4 flex gap-1.5 items-center font-light border border-[#9f3877]">
            <Icon><SchoolIcon/></Icon>
            <div>
              Aspiring Full Stack Developer | Building real-world projects while
              pursuing a BCA at Sant gadge baga University, Amarawati.
            </div>
          </div>
        </section>
        <div data-aos="zoom-out-left" className="  h-50 md:h-60 lg:h-80 border border-[#9f3877] rounded-xl overflow-hidden ">
          <img className="h-full hover:scale-110 transition-all duration-500" src="/dev.jpg" alt="devImage" />
        </div>
      </div>
    </div>
  );
}

export { About };
