

import { Form } from 'react-hook-form'
import './App.css'
import { ChooseYourPlan } from './components/chooseYourPlanComponent/ChooseYourPlan'
import Navbar from './components/layout/Navbar'
import { Rectangle } from './components/rectangleComponent/Rectangle'
import { Want } from './components/wantComponent/Want'
import { Choose } from './components/weprovideComponent/Choose'
import { Weprovide } from './components/weprovideComponent/Weprovide'
import ValidationForm from './components/Form/Form'
import { Global } from './components/globalComponent/Global'

export const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/";

function App() {


  return (

  <div>
    <Navbar/>
    <Want/>
    <Rectangle/>
    <Weprovide/>
    <Choose/>
    <ChooseYourPlan/>
    <Global/>
    <ValidationForm/>
  </div>
  
  )
}

export default App
