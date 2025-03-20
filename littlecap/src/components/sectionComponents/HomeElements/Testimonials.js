import TestCard from "./TestCard";
import CarouselPage from "./TestCarousel";

function Testimonials(){
    return(
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>


        <section className="testimonials-cards">
            <TestCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
            <TestCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."/>
            <TestCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture."/>
            <TestCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."/>
            <TestCard name="Jim Reynor" description="The food here really refreshed me after a late night shift at the local supply depot."/>
            <TestCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here."/>
            <TestCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place out at least once if they live in Chicago."/>
            <TestCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!"/>
        </section>

        <section className="testimonials-carousel">
            <CarouselPage />
        </section>
    </section>);
}

export default Testimonials;