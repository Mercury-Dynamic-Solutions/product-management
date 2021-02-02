import React from "react"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import HomeScreen from "./screens/HomeScreen.js"
import FeatureScreen from "./screens/FeatureScreen.js"

const App = () => {
  return (
    <>
    <Header />
    <FeatureScreen />
    {/* <HomeScreen /> */}
    <Footer />
    </>
  );
}

export default App;
