import { Link } from "react-router-dom";

function HomeHeader(){
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned restaurant.</p>
                    <br />
                    <Link className="action-button" to="/BookingPage">Reserve a table</Link>
                </section>
                <section className="hero-img">
                    <img src={require('../../../assets/bruschetta.jpg')}
                    alt="Little Lemon Restaurant food dish"></img>
                </section>
            </article>
        </header>
    )
}
export default HomeHeader;