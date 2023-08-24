import"./navbar.css"
import logo from "../../multimedia/logonNavbar.png"

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-8 h-8" />
        <p className="ml-2 text-lg font-bold">
          Lasles<b>VPN.</b>
        </p>
      </div>
      <div
        id="menuRoutes"
        className="mt-4 md:mt-0 md:w-2/5 flex flex-col md:flex-row justify-center items-center md:justify-evenly"
      >
        <p className="my-2 md:my-0">About</p>
        <p className="my-2 md:my-0">Features</p>
        <p className="my-2 md:my-0">Pricing</p>
        <p className="my-2 md:my-0">Testimonials</p>
        <p className="my-2 md:my-0">Help</p>
      </div>
      <div className="mt-4 md:mt-0 flex justify-center items-center">
        <p className="text-sm md:text-base">Sign In</p>
        <p className="text-sm md:text-base border-2 border-red-600 rounded-lg px-4 py-1 ml-2">
          Sign Up
        </p>
      </div>
    </div>
  );
};


export default Navbar