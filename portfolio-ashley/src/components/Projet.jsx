import { useState, useEffect } from "react"
import CardProject from "./CardProject"

function Projet() {

    const [ projects, setProjects ] = useState([])
    const [ filter, setFilter ] = useState(projects)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data/project.json')
                const res = await response.json()
                setProjects(res)
            }catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const defaultProject = projects.filter(project => project.categorie === "Développement")

    const handleClick = (index) => {
        event.preventDefault()
        const filtered = projects.filter(project => project[index].categorie.includes(project.categorie))
        setFilter(filtered)
    }


    return (
        <section id="portfolio">
            <h2 className="text-center">Mes projets</h2>
            <div className="filtered__project">
                <ul className="filtered__project-item">
                    {projects.map((li, indexProject) => {
                        return (
                            <li key={li.categorie} data-index={indexProject}><button onClick={() => handleClick(indexProject)}>{li.categorie}</button></li>
                        )
                    })}
                </ul>
            </div>
            <div className="container mt-3 portfolio__content">
                {projects.map((p, index) => {
                    return (
                        <CardProject 
                            key={index}
                            titre={p.name}
                            image={p.images[0]}
                            text={p.text}
                            link={p.link}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Projet