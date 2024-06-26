function CardXp({img, dateStart, dateEnd, agency, occupation, mission, alt, location}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={alt} />
            <div className="card-body">
                <div className="info-data"><span>{dateStart} - {dateEnd}</span></div>
                <h3 className="card-title">{agency}</h3>
                <span className="info-location">{location}</span>
                <h5 className="card-title">{occupation}</h5>
                <p className="card-text"> <b>Mission :</b> {mission}</p>
               {/*  <ul>
                    {array.map((s, index) => {
                        <li key={index}>{s.skills}</li>
                    })}
                </ul> */}
            </div>
        </div>
    )
}

export default CardXp