import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Deployement from "../components/DeployementActivity";
import OurMainRoad from "../components/OurMainRoad";

import Team from '../components/Team'
import  Token from '../components/Token'
const Home = ()=>{
    return (
        <div>
            <Header/>
            <Banner/>
            <main className="">
                <About/>
                <Deployement />
                <OurMainRoad />
                <Token/>
                <Team/> 
            </main>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;