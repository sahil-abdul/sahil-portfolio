import Spline from "@splinetool/react-spline";
import Icon from "./Icon";
import Button from "./Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Main() {
  return (
    <>
      <div className="w-full lg:min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-4rem)] min-h-[calc(100vh-3rem)] flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-between lg:items-center md:flex-row overflow-x-hidden">
        <div
          className="w-full lg:w-1/2 p-3 lg:px-[5rem]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="text-2xl">Hello, i am </span>
          <div className="my-3 md:my-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-widest">
              <span className="text-[#9f3877]">Sahil</span> Abdul Y.
            </h1>
          </div>
          <div className="w-full my-3 md:my-4">
            <span className="text-2xl m-1 md:text-3xl">
              Full Satck developer{" "}
            </span>
          </div>
          <p className="text-gray-400 text-2xl md:text-3xl ">
            Delivering cutting-edge digital experiences through expert MERN
            stack development.
          </p>
          <div className="flex gap-5 items-center flex-wrap mt-3">
            <a href="#project">
              <Button>
                Projects <ArrowForwardIcon />{" "}
              </Button>
            </a>
            <a href="https://github.com/sahil-abdul">
              <button className="border border-gray-400 p-3 rounded-xl tracking-wide text-xl hover:scale-110 transition-all duration-500">
                GitHub
              </button>
            </a>
            <a
              href="/resume.pdf" 
              download="sahil-Resume.pdf" 
            >
            <button className="border border-gray-400 p-3 rounded-xl tracking-wide text-xl hover:scale-110 transition-all duration-500">
              download Resume <DownloadIcon />
            </button>
            </a>
          </div>

          <div className="flex gap-5 items-center flex-wrap mt-4">
            <a href="https://github.com/sahil-abdul">
              <Icon>
                <GitHubIcon />
              </Icon>
            </a>
            <a href="https://www.linkedin.com/in/sahil-abdul-yunus-255798351/">
              <Icon>
                <LinkedInIcon />
              </Icon>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center h-screen" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
          <Spline
           className="h-full"
            scene="https://prod.spline.design/H4YNWSh3WSN1Gm7O/scene.splinecode"
          />
        </div>
      </div>
    </>
  );
}

export default Main;
