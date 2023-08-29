
import './App.css'
import { ChooseYourPlan } from './components/chooseYourPlanComponent/ChooseYourPlan'
import Navbar from './components/layout/Navbar'
import { Rectangle } from './components/rectangleComponent/Rectangle'
import { Want } from './components/wantComponent/Want'
import { Weprovide } from './components/weprovideComponent/Weprovide'
import ValidationForm from './components/Form/Form'
import { Global } from './components/globalComponent/Global'
import Carousel from './components/CarouselComponent/Carousel'
import { Footer } from './components/layout/Footer'


export const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/";

function App() {


  return (

  <div>
    <Navbar/>
    <Want/>
    <Rectangle/>
    <Weprovide/>
    <ChooseYourPlan/>
    <Global/>
    <Carousel/>
    <ValidationForm/>
    <Footer/>
  </div>
  
  )
}

export default App
