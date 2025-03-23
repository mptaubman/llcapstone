import { Link } from "react-router-dom";

function Confirmation() {
    return(
        <header className="confirm-head">
            <img className="header-reserve"
            src={require("../../assets/rest_chef.jpg")}
            alt="Little lemon indgrediants" />
            <section className="reserve-confirm-text">
                <h1>Your reservation has been confirmed!</h1>
                <h4>A confirmation has been sen to your email.</h4>
                <h4>If you need to change your reservation</h4>
                <h4>please give us a call.</h4>
                <h4>Thank you for dining with us!</h4>
            </section>
        </header>
    );
}
export default Confirmation;