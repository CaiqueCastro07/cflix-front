import "./Footer.css"

function Footer() {

    const scrollToTheTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="back-to-the-top" onClick={scrollToTheTop}>retornar ao topo</div>
            </div>
        </footer>
    )
}

export default Footer;
