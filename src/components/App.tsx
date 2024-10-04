import Footer from "./Footer"
import PriceCheck from "./price_check/PriceCheck"

function App() {

  return (
      <div className="backgroundContainer">
        <div className="bodyContainer">
          <h1 className="websiteTitle">GW2 Legendary Price Check</h1>
          <PriceCheck></PriceCheck>
        </div>
        <Footer></Footer>
      </div>
  )
}

export default App
