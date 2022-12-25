import './App.css';
import About from './Components/About/About';
import Alert from './Components/Alert/Alert';
import CustomizePlan from './Components/CustomizePlan/CustomizePlan';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className='App'>
      <Alert/>
      <NavBar/>
      <Hero/>
      <About/>
      <Pricing/>
      <CustomizePlan/>
      <FAQ/>
      <Footer/>
      </div>
  );
}

export default App;
