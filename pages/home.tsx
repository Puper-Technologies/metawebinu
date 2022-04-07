import Banner from "../components/Banner";
import Deployement from "../components/DeployementActivity";
import Header from "../components/Header";
import OurMainRoad from "../components/OurMainRoad";

const Home = ()=>{
    return (
        <div>
            <Header/>
            <Banner/>
            <main>

                <Deployement />
                <OurMainRoad />
            </main>
        </div>
    )
}

export default Home;