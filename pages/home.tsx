import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import Activity from "../components/Activity";

const Home = ()=>{
    return (
        <div>
            <Header/>
            <Banner/>
            <main className="h-[100vh] ">
           
            <About/>
            <Activity/>
            </main>
            
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home;