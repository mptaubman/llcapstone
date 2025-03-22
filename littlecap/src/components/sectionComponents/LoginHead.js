import rest_chef from '../../assets/rest_chef.jpg';

function LoginHead() {
    return (
        <header className='reserve-table'>
            <img
                className='header-reserve'
                src={rest_chef}
                alt="Little lemon ingrediants"></img>
                <div className='reserve-header-t'>
                    <h1>Login</h1>
                </div>
        </header>
    );
}
export default LoginHead;