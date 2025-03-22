import Present from '../../assets/restauranfood.jpg'

function Heading() {
    return (
      <header className="reserve-table">
        <img
          className="header-reserve"
          src={Present}
          alt="Little Lemon Ingredients"
        ></img>
        <div className="reserve-header-text">
          <h1>Order Online</h1>
        </div>
      </header>
    );
  }
  export default Heading;