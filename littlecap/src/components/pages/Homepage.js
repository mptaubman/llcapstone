import HomeHeader from "../sectionComponents/HomeElements/HomeHeader";
import Specials from "../sectionComponents/HomeElements/Specials";
import Testimonials from "../sectionComponents/HomeElements/Testimonials";
import AboutHero from "../sectionComponents/HomeElements/AboutHero";


function Homepage(){
    return(
        <>
        <HomeHeader/>
        <main>
            <Specials />
            <Testimonials />
            <AboutHero />
        </main>
        </>
    );
}
export default Homepage;