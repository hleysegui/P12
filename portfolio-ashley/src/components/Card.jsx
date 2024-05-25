function Card({picture, name, description, alt}) {

    return(
        <div className="card__content">
            {/* <img src={picture} alt={alt} /> */}
            <div className="card__content-body">
                <p>{description}</p>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Card