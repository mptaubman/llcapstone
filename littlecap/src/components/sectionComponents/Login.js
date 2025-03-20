import HeroImg from 'littlecap\src\assets';

function Login() {
    return (
        <header className='reserve-table'>
            <img
                className='header-reserve'
                src={HeroImg}
                alt="Little lemon ingrediants"></img>
                <div className='reserve-header-t'>
                    <h1>Login</h1>
                </div>
        </header>
    );
}
export default Login;