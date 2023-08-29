import logo from "../../multimedia/logonNavbar.png";
import insta from "../../multimedia/footer/Instagram.png";
import face from "../../multimedia/footer/Facebook.png";
import twitter from "../../multimedia/footer/Twitter.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-neutral-200 to-white mt-20 p-5">
    <div className="md:flex md:justify-between md:ml-20 md:my-9">
  
      <div className="md:w-1/2">
        <div className="flex items-center my-4 md:my-9 md:ml-20">
          <img src={logo} alt="" className="w-8 h-8" />
          <p className="ml-2 text-lg">Lasles<span className="font-bold">VPN.</span></p>
        </div>
  
        <div>
          <p id="parrafo" className="md:w-2/3 text-xs my-4 md:my-9 md:ml-20 leading-6">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
        </div>
        <div className="md:ml-20 flex my-4 md:my-9">
          <img src={face} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={insta} alt="instagram" />
        </div>
      </div>
  
      <div className=" md:flex md:justify-evenly md:w-2/3">
        <div className="md:w-1/3">
          <p className="font-bold md:text-base my-4">Product</p>
          <div id="parrafo">
            <p className="md:text-base my-2">Download</p>
            <p className="md:text-base my-2">Pricing</p>
            <p className="md:text-base my-2">Locations</p>
            <p className="md:text-base my-2">Server</p>
            <p className="md:text-base my-2">Countries</p>
            <p className="md:text-base my-2">Blog</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <p className="font-bold md:text-base my-4">Engage</p>
          <div id="parrafo">
            <p className="md:text-base my-2">LaslesVPN ?</p>
            <p className="md:text-base my-2">FAQ</p>
            <p className="md:text-base my-2">Tutorials</p>
            <p className="md:text-base my-2">About Us</p>
            <p className="md:text-base my-2">Privacy Policy</p>
            <p className="md:text-base my-2">Term of Service</p>
          </div>
        </div>
        <div className="md:w-1/3">
          <p className="font-bold md:text-base my-4">Earn Money</p>
          <div id="parrafo">
            <p className="md:text-base my-2">Afiliate</p>
            <p className="md:text-base my-2">Become Partner</p>
          </div>
        </div>
      </div>
  
    </div>
  </footer>
  );
};
