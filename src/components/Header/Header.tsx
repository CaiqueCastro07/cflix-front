import './Header.css';
import { ApiController } from "../../Api/Api"

function Header() {

    const refreshCatalogue = ():void=>{

        const api = new ApiController()

        api.refreshMoviesApi().then((res:boolean)=>{
            window.location.reload()
        }).catch((err)=>{
            window.location.reload()
        })
    }

    return (
        <header className="header">
            <div className="header-container">
                <div onClick={refreshCatalogue} className="logo-wrapper"><img className="logo-img" src={require("../../assets/logo.png")}></img></div>
            </div>
        </header>
    );
}

export default Header;
