import Icon from "./Icon";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { Link } from "@react-email/components";

function Contact() {
  return (
    <div
      id="Contact"
      className="min-h-full w-full flex items-center flex-col gap-4 lg:justify-evenly mt-10 overflow-x-hidden"
    >
      <div
        className="flex flex-col justify-between items-center "
        data-aos="zoom-out-down"
      >
        <h1 className="text-4xl lg:text-5xl font-bold tracking-wider">
          Get in Touch
        </h1>
        <div className="w-1/2 bg-[#9f3877] h-2 mt-4 rounded "></div>
      </div>
      <div className=" w-full  rounded-2xl flex justify-around items-center gap-6 flex-wrap p-2.5 ">
        <div
          href="https://github.com/sahil-abdul"
          className="w-4/5 lg:w-1/5 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="w-full p-5 border rounded-2xl flex-wrap border-[#9f3877] bg-[#1d1d1f] flex items-center gap-3  hover:scale-110 transition-all duration-500">
            <Icon>
              <EmailIcon />
            </Icon>
            <div>
              <span className="font-bold text-xl">Email</span>
              <p className="w-full mt-1 text-[#a4a4a4] text-sm">sahilabdul264@gmail.com</p>
            </div>
          </div>
        </div>

        <a
          href="https://github.com/sahil-abdul"
          className="w-4/5 lg:w-1/5 "
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="w-full flex-wrap p-5 border rounded-2xl border-[#9f3877] bg-[#1d1d1f] flex items-center gap-3  hover:scale-110 transition-all duration-500">
            <Icon>
              <GitHubIcon />
            </Icon>
            <div>
              <span className="font-bold text-xl">Github</span>
              <p className="mt-1 text-[#a4a4a4]">github.com/sahil-abdul</p>
            </div>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/sahil-abdul-yunus-255798351/"
          className="w-4/5 lg:w-1/5 "
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="w-full flex-wrap p-5 border rounded-2xl border-[#9f3877] bg-[#1d1d1f] flex items-center gap-3  hover:scale-110 transition-all duration-500">
            <Icon>
              <LinkedInIcon />
            </Icon>
            <div>
              <span className="font-bold text-xl">Linked In</span>
              <p className="mt-1 text-[#a4a4a4]">sahil abdul yunus</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
