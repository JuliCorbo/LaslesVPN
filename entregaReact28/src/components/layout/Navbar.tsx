import "./navbar.css";
import logo from "../../multimedia/logonNavbar.png";
import { Menu } from "@headlessui/react";



const Navbar = () => {
  return (
    <div className="items-center flex md:mx-20 md:flex-row justify-between  p-4 md:p-6">
      <div className="flex items-center">
        <img src={logo} alt="" className="" />
        <p className="ml-2 text-lg">
          Lasles<span className="font-bold">VPN</span>
        </p>
      </div>
      <div className="md:hidden">
        <Menu as="div" >
          <Menu.Button>⭕</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <p>About</p>
            </Menu.Item>
            <Menu.Item>
              <p>Features</p>
            </Menu.Item>
            <Menu.Item>
              <p>Pricing</p>
            </Menu.Item>
            <Menu.Item>
              <p>Testimonials</p>
            </Menu.Item>
            <Menu.Item>
              <p>Help</p>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div
        id="menuRoutes"
        className="hidden md:flex md:mt-4  md:w-2/5 flex-col md:flex-row justify-center items-center md:justify-evenly"
      >
        <p className="my-2 md:my-0">About</p>
        <p className="my-2 md:my-0">Features</p>
        <p className="my-2 md:my-0">Pricing</p>
        <p className="my-2 md:my-0">Testimonials</p>
        <p className="my-2 md:my-0">Help</p>
      </div>
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm md:text-base mb-2 md:mb-0 md:mr-2">Sign In</p>
        <p className="text-sm md:text-base border-2 border-red-600 rounded-lg px-4 py-1">
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default Navbar;
