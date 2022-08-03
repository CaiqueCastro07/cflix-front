import './Header.css';

function Header() {

    return (
        <header className="header">
            <div className="header-container">
                <div onClick={()=>window.location.reload()} className="logo-wrapper"><img className="logo-img" src={require("../../assets/logo.png")}></img></div>
            </div>
        </header>
    );
}

export default Header;
