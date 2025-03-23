import Grill from '../../assets/grill.jpg';

function MenuHeader() {
    return (
        <header className='reserve-table'>
            <img
                className='header-reserve'
                src={Grill}
                alt="Little lemon ingrediants"></img>
                <div className='reserve-header-text'>
                    <h1>Menu</h1>
                </div>
        </header>
    );
}
export default MenuHeader;