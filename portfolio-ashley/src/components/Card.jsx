import ProgressBar from "./ProgressBar"

function CardProject({title, text, img, link, openModal, id, nbProject, description, name, github, date, occupation}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={title}/>
            <div className="card-body">
            <div className="info-data"><span>{date}</span></div>
                <h3 className="card-title">{title}</h3>
                {
                    occupation ? <h4 className="card-title">{occupation}</h4> : null
                }
                
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
                        {link ? <a href={link} target="_blank" >Voir le site / drive</a> : null }
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