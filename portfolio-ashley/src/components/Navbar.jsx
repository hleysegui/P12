function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg fixed-top navbar-dark navbarScroll">
            <div className="container">
                <a className="navbar-brand" href="#">Ashley SEGUI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#competences">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Expériences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contactez-moi</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar