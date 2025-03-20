import HeroImg from "littlecap\src\assets";

function Heading() {
    return (
        <header className="reserve-table">
            <img 
            className="header-reserve"
            src={HeroImg}
            alt="Little Lemon Ingrediants"></img>
            <div className="reserve-header-t">
                <h1>About Us</h1>
            </div>
        </header>
    );
}
export default Heading