import HeroImg from 'littlecap\src\assets';

function MenuHeader() {
    return (
        <header className='reserve-table'>
            <img
                className='header-reserve'
                src={HeroImg}
                alt="Little lemon ingrediants"></img>
                <div className='reserve-header-t'>
                    <h1>Menu</h1>
                </div>
        </header>
    );
}
export default MenuHeader;