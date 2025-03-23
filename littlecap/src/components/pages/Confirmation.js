import { Link } from "react-router-dom";

function Confirmation() {
    return(
        <header className="confirm-head">
            <img className="confirm-img"
            src="littlecap\src\assets"
            alt="Little lemon indgrediants" />
            <section className="reserve-head-text">
                <h1>Your reservation has been confirmed!</h1>
                <h4>A confirmation has been sen to your email.</h4>
                <h4>If you need to change your reservation</h4>
                <h4>please give us a call.</h4>
                <h4>Thank you for dining with us!</h4>
            </section>
            <section className="redirect-button">
                <a
                className="redirect-button"
                href="littlecap\src\assets"
                target="_blank"
                rel="noreferrer">Browse Menu</a>
            <Link className="redirect-button" to="/order">
                Order Online</Link>
            <Link className="redirect-button" to="/">
                Home Page</Link>
            </section>
        </header>
    );
}
export default Confirmation;