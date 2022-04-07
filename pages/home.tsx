import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Activity from "../components/Activity";
import Deployement from "../components/DeployementActivity";
import OurMainRoad from "../components/OurMainRoad";

import Team from '../components/Team'
import Token from '../components/Token'
const Home = ()=>{
    return (
        <div>
            <Header/>
            <Banner/>
            <main>
           
            <About/>
            <Deployement />
            <OurMainRoad />
           
            <Token/>
            {/* <Activity/> */}
            <Team/>
            </main>
            
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;