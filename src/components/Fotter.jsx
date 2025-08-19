import Icon from "./Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Fotter() {
  return (
    <>
      <footer className="w-full bg-[#1d1d1f] py-12 border-t border-t-[#a4a4a4] flex flex-col justify-around items-center text-[#ead6e2] text-center overflow-x-hidden">
        <p>© 2025 Sahil Abdul | Designed & Built with ❤️</p>
        <div className="mt-1.5 flex gap-3">
          <a href="https://www.linkedin.com/in/sahil-abdul-yunus-255798351/">
            <Icon>
              <LinkedInIcon />
            </Icon>
          </a>
          <a href="https://github.com/sahil-abdul">
            <Icon>
              <GitHubIcon />
            </Icon>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Fotter;
