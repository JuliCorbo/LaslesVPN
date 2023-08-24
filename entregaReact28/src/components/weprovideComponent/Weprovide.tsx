import weprovide from "../../multimedia/weprovide.png"
import "./weprovide.css"

export const Weprovide = () => {
  return (
    <div id="containerWe" className="flex flex-col md:flex-row items-center place-content-center m-5 md:m-10 px-5 md:px-20 max-w-8xl">
        <div className="md:w-1/2">
            <img id="imgWe" className="w-full drop-shadow-2xl" src={weprovide} alt="" />
        </div>
        <div id="weProvideh2" className="md:w-1/2 w-full md:items-center md:place-content-center m-5 md:px-15">
            <h2 className="text-2xl md:text-3xl font-black my-10">We Provide Many Features You Can Use</h2>
            <p className="text-sm md:text-xs my-9">You can explore the features that we provide with fun and have their own functions each feature.</p>
            <p className="text-sm md:text-xs my-9">✅ Powerfull online protection.</p>
            <p className="text-sm md:text-xs my-9">✅ Internet without borders.</p>
            <p className="text-sm md:text-xs my-9">✅ Supercharged VPN.</p>
            <p className="text-sm md:text-xs my-9">✅ No specific time limits.</p>
        </div>
    </div>
  );
};

