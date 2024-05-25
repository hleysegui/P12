function CardXp({img, dateStart, dateEnd, agency, occupation, mission, alt, location, array}) {
    return (
        <div className="card">
            <img className="card-img-top" src={img} alt={alt} />
            <div className="card-body">
                <span>{dateStart}-{dateEnd}</span>
                <h4 className="card-title">{agency}
                <span>{location}</span></h4>
                <h3 className="card-title">{occupation}</h3>
                <p className="card-text"> Mission : {mission}</p>
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