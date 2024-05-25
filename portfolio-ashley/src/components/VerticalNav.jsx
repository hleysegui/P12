function VerticalNav({skills}) {
    
    return (
        <ul className="navbar__list">
            {skills.map((skill, index) => {
                <li className="navbar__li" key={`${skill}-${index}`}>{skill}</li>
            })}
        </ul>
    )
}

export default VerticalNav  