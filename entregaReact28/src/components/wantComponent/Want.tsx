import WantImg from "../../multimedia/logoWant.png"
import "./want.css"
export const Want = () => {
  return (
   <section id="container" className="flex w-5/5 items-center place-content-center m-10 px-20 max-w-8xl">
    <div className="">
      <h1 className="text-4xl font-black">Want anything to be easy with LaslesVPN.</h1>
      <p id="text" className="text-xs w-4/5 my-8">Provide a network for all your needs with ease and fun using<b>LaslesVPN</b>discover interesting features from us.</p>
      <button type="submit" id="button">Get Started!</button>
    </div>
    <div id="imgWant" > <img src={WantImg} alt=""  className="drop-shadow-2xl" /></div>
   </section>
  )
}
