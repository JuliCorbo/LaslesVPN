import weprovide from "../../multimedia/weprovide.png"
import "./weprovide.css"

export const Weprovide = () => {
  return (
<div id="containerWe" className="flex flex-col md:flex-row items-center place-content-center md:px-20 max-w-8xl bg-gradient-to-b from-neutral-50 to-white">
  <div className="md:w-1/2">
    <img id="imgWe" className="w-3/4 drop-shadow-2xl" src={weprovide} alt="" />
  </div>
  <div id="weProvideh2" className="w-full md:w-1/3 md:items-center md:place-content-center m-5 md:px-15 mt-20 text-center">
    <h2 className="text-2xl md:text-3xl font-black my-5 md:ml-6 md:mr-6 sm:ml-0 sm:mr-0">We Provide Many Features You Can Use</h2>
    <div id="weParrafo" className="mx-auto md:text-left">
      <p className="md:text-base my-4">You can explore the features that we provide with fun and have their own functions each feature.</p>
      <p className="md:text-base my-9">✅ Powerfull online protection.</p>
      <p className="md:text-base my-9">✅ Internet without borders.</p>
      <p className="md:text-base my-9">✅ Supercharged VPN.</p>
      <p className="md:text-base my-9">✅ No specific time limits.</p>
    </div>
  </div>
</div>
  );
};

