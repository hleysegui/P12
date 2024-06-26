import ProgressBar from "./ProgressBar"

function CardProject({titre, text, image, link, openModal, id, nbProject, description, name, github}) {
    return (
        <div className="card">
            <img className="card-img-top" src={image} />
            <div className="card-body">
                <h3 className="card-title">{titre}</h3>
                <div className="text-center">
                    <p>{text}</p>
                    {nbProject ?
                        <div className="progres-bar-project">
                            <p>Nombre de projets réalisés </p>
                            <ProgressBar nbProject={nbProject} />
                        </div>
                        : null
                    
                    }
                    <div className="portfolioContent-btn">
                        {link ? <a href={link} target="_blank" >Voir le site</a> : null }
                        { github ? <a href={github} target="_blank">Lien du projet</a> : null}

                     {openModal ? 
                        <button className="btn btn-success" onClick={(id) => openModal()}>En savoir plus</button>
                        : null } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProject