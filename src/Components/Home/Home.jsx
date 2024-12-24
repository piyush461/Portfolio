import { ReactTyped } from "react-typed";
import "../Home/Home.css";

const Home = () => {
  
  
  return (
    <div
      id="homeDiv"
      className="bg-slate-700 h-screen max-md:h-[70%] w-full flex md:justify-around items-start pt-20 max-md:pt-6 max-md:justify-end max-md:items-center max-md:gap-24 max-md:mt-10 md:flex-row max-md:flex-col-reverse">
        <div className="avatarDiv md:h-5/6 md:w-[40%] w-full h-auto">
        <div className="hidden h-3/6 w-full md:flex justify-center items-center">
          <img className="h-56 avatar" src="img\avatar (1).png" alt="" />
        </div>
        <div className="text-sm flex items-center justify-center md:h-[40vh] md:w-full w-full">
          <div className="md:text-2xl max-md:text-3xl font-semibold md:w-80 md:h-[80%] w-72 h-40 md:p-5 text-cyan-500">
            <h2>Hi, I&apos;m Piyush Kumar </h2>
            <h1>I am an enthausiast</h1>
            <h5 className="font-bold text-cyan-300">
              {" "}
              <ReactTyped
                strings={["Software Developer", "Web Developer"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar=" "
                showCursor={true}
              />
            </h5>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center photoDiv h-80 w-80 max-md:h-80 max-md:w-80">
        <img className="rounded-full " src="img\photo.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
