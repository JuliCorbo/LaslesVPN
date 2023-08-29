import globalimg from "../../multimedia/global/Huge Global.png";
import sponsorImg from "../../multimedia/global/Sponsored.png";

export const Global = () => {
  return (
    <div>
      <div className="grid justify-items-center text-center my-10 mt-20 p-7">
        <div className="w-full sm:w-2/5">
          <h2 className="text-4xl font-black my-5">
            Huge Global Network of Fast VPN
          </h2>
          <p id="parrafo">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center drop-shadow-2xl mt-20">
        <img src={globalimg} alt="" />
      </div>
      <div className="flex justify-center items-center drop-shadow-2xl">
        <img src={sponsorImg} alt="" />
      </div>
    </div>
  );
};
