import Mario_Adrian from "littlecap\src\assets\Mario_Adrian.jpg";

function Heading() {
    return (
        <header className="reserve-table">
            <img
            className="header-reserve"
            src={Mario_Adrian}
            alt="Little Lemon Ingrediants"></img>
            <div className="reserve-header-t">
                <h1>About Us</h1>
            </div>
        </header>
    );
}
export default Heading