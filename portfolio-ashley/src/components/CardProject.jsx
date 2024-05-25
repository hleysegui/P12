function CardProject({titre, text, image, link}) {
    return (
        <div className="card portfolioContent">
            <img className="card-img-top" src={image} />
            <div className="card-body">
                <h3 className="card-title">{titre}</h3>
                {/* <h4 className="card-text">{text}</h4> */}
                <div className="text-center">
                    <a href={link} className="btn btn-success">Lien</a>
                </div>
            </div>
        </div>
    )
}

export default CardProject