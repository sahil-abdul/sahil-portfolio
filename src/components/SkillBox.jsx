import Icon from "./Icon";
function SkillBox({ skills, head, children }) {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div
          data-aos="zoom-in"
          className="border border-[#9f3877] w-5/6 md:w-4/5  p-10 rounded-3xl overflow-hidden bg-black"
        >
          <div className=" hover:scale-110 transition-all duration-500">
            <div className="w-full h-1/4 text-center text-xl flex gap-5 justify-start items-center flex-wrap">
              {" "}
              <Icon>{children}</Icon> {head}
            </div>
            <div className="w-full flex flex-wrap justify-satrt items-center p-3 mt-3 ">
              {skills.map((skill) => (
                <div key={skill} className="w-1/2 p-1 text-[#b0b0b1]">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SkillBox;
