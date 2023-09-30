 
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/daisyNav/DaisyNav'

function App() {


  return (
    <>

      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <Phones></Phones>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

    </>
  )
}

export default App
