function About() {
    return (
        <div className="info"> 
            <div className="info__item">
                <span><i className='fas fa-portrait'></i> Age</span>
                <p>31 ans</p>
            </div>
            <div className="info__item">
                <span><i className='fas fa-map-marker-alt'></i> Adresse</span>
                <p>Valderies (81)</p>
            </div>
            <div className="info__item">
                <span><i className='fas fa-globe-europe'></i> Mobilité</span>
                <ul className="info__item-mobilite">
                    <li>Tarn</li>
                    <li>Aveyron</li>
                    <li>Aveyron</li>
                    <li>Tarn-et-G</li>
                    <li>Aude</li>
                    <li>Hérault</li>
                    <li>Lot</li>
                    <li>Gironde</li>
                    <li>Région parisienne</li>
                </ul>
            </div>
            <div className="info__item">
                <span><i className='fas fa-suitcase'></i> Type de poste</span>
                <ul className="info__item-poste">
                    <li>CDI</li>
                    <li>Freelance</li>
                    <li>Télétravail 2-3 j/s</li>
                </ul>
            </div>
        </div>
    )
}

export default About