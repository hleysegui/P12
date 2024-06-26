function CardXp({img, date, title, occupation, text, alt, location}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={alt} />
            <div className="card-body">
                <div className="info-data"><span>{date}</span></div>
                <h3 className="card-title">{title}</h3>
                <span className="info-location">{location}</span>
                <h4 className="card-title">{occupation}</h4>
                <p className="card-text"> <b>Mission :</b> {text}</p>
            </div>
        </div>
    )
}

export default CardXp