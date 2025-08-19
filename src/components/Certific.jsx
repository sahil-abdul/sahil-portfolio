function Certific() {
  return (
    <div
      id="Certifications"
      className="min-h-full w-full flex items-center flex-col gap-4 justify-around lg:justify-evenly mt-10 bg-[#1d1d1f] overflow-x-hidden"
    >
      <div className="flex flex-col justify-between items-center " data-aos="zoom-out-down">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-center">
          Certifications & Skills
        </h1>
        <div className="w-1/2 bg-[#9f3877] h-2 mt-4 rounded "></div>
      </div>
      <div className=" w-3/4 lg:w-1/2 my-5 rounded-2xl flex border border-[#9f3877] gap-6 flex-wrap p-2 bg-black" data-aos="zoom-out-up">
        <div className="w-full md:w-3/6 p-3">
          {" "}
          <h1 className="text-xl text-[#9f3877] font-bold tracking-wider">
            Certifications
          </h1>
          <ul className="list-disc marker:text-[#9f3877] flex flex-col gap-6 mt-3 p-5 ">
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  full stack Development Certificate
                </span>
                <p className=" text-[#909090] text-sm">
                  Dhister - Aug 2023
                </p>
              </div>
            </li>
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Web Development Certificate
                </span>
                <p className=" text-[#909090] text-sm">
                  Sololearn - oct 2023
                </p>
              </div>
            </li>
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Understanding Prompt Engineering
                </span>
                <p className=" text-[#909090] text-sm">
                  DataCamp - 2024
                </p>
              </div>
            </li>
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Prompt Design
                </span>
                <p className=" text-[#909090] text-sm">
                  Feb 2025
                </p>
              </div>
            </li>

          </ul>
        </div>
        <div className="w-full md:flex-1 p-3">
          {" "}
          <h1 className="text-xl text-[#9f3877] font-bold tracking-wider">
            Additional Skills
          </h1>
          <ul className="list-disc marker:text-[#9f3877] flex flex-col gap-4 mt-3 p-5">


            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Soft Skills: Team Collaboration, Project Management
                </span>
                <p className=" text-[#909090] text-sm">
                  Personal Experience
                </p>
              </div>
            </li>
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Core Competencies: Problem-Solving, Analytical Thinking
                </span>
                <p className=" text-[#909090] text-sm">
                  Professional Development
                </p>
              </div>
            </li>
            <li className="hover:bg-[#1d1d1f] p-2 rounded-2xl transition-all">
              <div>
                <span className="text-[#e7e6e6]">
                  Sports Leadership: Cricket
                </span>
                <p className=" text-[#909090] text-sm">
                  Self-Developed
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Certific;
