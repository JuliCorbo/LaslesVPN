import globalimg from "../../multimedia/global/Huge Global.png"
import sponsorImg from "../../multimedia/global/Sponsored.png"

export const Global = () => {
  return (
    <div>
        <div className="grid justify-items-center my-10 p-7">
            <h2 className="text-4xl font-black my-5">Huge Global Network of Fast VPN</h2>
            <p> See LaslesVPN everywhere to make it easier for you when you move locations.</p>
        </div>
        <div className="flex justify-center items-center">
            <img src={globalimg} alt="" />
        </div>
        <div className="flex justify-center items-center">
            <img  src= {sponsorImg} alt="" />
        </div>
        

    </div>
  )
}
