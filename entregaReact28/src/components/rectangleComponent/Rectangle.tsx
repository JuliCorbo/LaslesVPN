import locationlogo from "../../multimedia/iconsRectangle/location.png"
import serverlogo from "../../multimedia/iconsRectangle/Server.png"
import userlogo from "../../multimedia/iconsRectangle/user.png"

export const Rectangle = () => {
  return (
  
  <section className="flex justify-evenly drop-shadow-2xl ">
    <div className="flex">
        <div>
            <img src={userlogo} alt="" />
        </div>
        <div>
            <h2 className="font-black">90+</h2>
            <p>Users</p>
        </div> 
        
    </div>
    <div className="flex">
        <div>
            <img src={locationlogo} alt="" />
        </div>
        <div>
            <h2 className="font-black">60+</h2>
            <p>Locations</p>
        </div> 
    </div>
    <div className="flex">
        <div>
            <img src={serverlogo} alt="" />
        </div>
        <div>
            <h2 className="font-black">50+</h2>
            <p>Servers</p>
        </div> 
    </div>
  </section>
  )
}
