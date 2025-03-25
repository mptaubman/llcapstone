import { Link } from "react-router-dom";

function HomeHeader(){
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p className="subsection">We are a family owned restaurant and have been serving the community for over 50 years.
                        Featuring fresh mediterranean family style dishes, with upbeat modern atmosphere.
                    </p>
                    <br />
                    <Link className="action-button" to="/BookingPage">Reserve A Table</Link>
                </section>
                <section className="hero-img">
                    <img src={require('../../../assets/hero.jpg')}
                    alt="Little Lemon Restaurant food dish"
                    className="cta_pic"></img>
                </section>
            </article>
        </header>
    )
}
export default HomeHeader;