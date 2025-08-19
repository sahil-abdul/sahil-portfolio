import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isShow, setIsShow] = useState(false);

  const show = () => {
    setIsShow(!isShow);
  };

  return (
    <header className="w-full lg:px-[5rem] lg:h-[5rem] md:h-[4rem] h-[3rem] flex justify-between items-center px-2.5 overflow-x-hidden">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1300"
      >
        <span className="lg:text-5xl md:text-4xl text-3xl tracking-wider font-bold">
          <span className="text-[#9f3877] ">S</span>ahil
        </span>
      </div>

      <nav
        className={`${
          !isShow ? "hidden" : ""
        } flex flex-col items-center gap-5 absolute right-0 top-12 p-5 transition-all h-[95%] backdrop-blur-lg duration-500 border-l border-[#9f3877] px-10`}
      >
        <a
          onClick={() => setIsShow(false)}
          href="#about"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          About
        </a>
        <a
          onClick={() => setIsShow(false)}
          href="#skill"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Skills
        </a>
        <a
          onClick={() => setIsShow(false)}
          href="#project"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Projects
        </a>
        <a
          onClick={() => setIsShow(false)}
          href="#Contact"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Contact
        </a>
        <a
          onClick={() => setIsShow(false)}
          href="#Certifications"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Certifications
        </a>
      </nav>

      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          href="#about"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          About
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
          href="#skill"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Skills
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          href="#project"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Projects
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2200"
          href="#Contact"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Contact
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2400"
          href="#Certifications"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          Certifications
        </a>
      </nav>
      <button
        data-aos="fade-down"
        className="md:hidden p-2 bg-[#9f387886] text-[#ff009d] border-[#9f3877]  rounded-2xl flex justify-center items-center "
        onClick={show}
      >
        {isShow ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}

export default Header;
