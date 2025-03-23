function AboutHero(){
    return(
        <article className="about-us">
            <section className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="about-subtext">This is where the text describing the restaurant is going to go.
                    It should have an uplifting story perhaps. Or even focus on the type of food to find at the restaurant.
                    maybe it would be more beneficial to include any movements or communities they have served from their restaurant.
                    We could also just keep it simple by stating how long they have been chefs and the specialities in food.
                </p>
            </section>
            <section className="double-image">
                <img className="about_1"
                src={require('../../../assets/bruschetta.jpg')}
                alt="A dish from the Little Lemon Restaurant."></img>
                <img className="about_2"
                src={require('../../../assets/bruschetta.jpg')}
                alt="A dish from the Little Lemon Restaurant."></img>
            </section>
        </article>
    );
}

export default AboutHero;