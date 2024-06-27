import { useState, useEffect } from "react"
import Modal from "react-modal"
import Card from '../Card'
import Slider from "../Slider";



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root');

function Projet() {

    const [ projects, setProjects ] = useState([])
    const [ filter, setFilter ] = useState(projects)
    const [ modalIsOpen, setIsOpen ] = useState(false)
    const [ uniqueProject, setUniqueProject] = useState([])
    const [ projectPictures, setProjectPictures ] = useState([])

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

    let categorieProject = [...new Set(projects.map((project) => project.categorie))]

    const defaultProject = projects.filter(project => project.categorie === "Développement")

    const handleClick = (index) => {
        event.preventDefault()
        const cat = categorieProject[index]
        const filtered = projects.filter(project => project.categorie.includes(cat))
        setFilter(filtered)
    }

    function openModal(id) {
        const projectFind = projects.filter(project => project.id === id)
        setUniqueProject(projectFind[0])
        setProjectPictures(projectFind[0].images)
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
        
        <section id="portfolio">
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Project Modal"
            >

         { uniqueProject != null ?
            <>
                <div className="modal-header">
                    <h5 className="modal-title">{uniqueProject.name}</h5>
                </div>
                <div className="modal-body"> 
                    <Slider picture={projectPictures} alt={uniqueProject.name}/>
                   
                    <div className="modal-body__desc">
                        <p>Titre : {uniqueProject.title} </p>
                        <p>Catégorie : {uniqueProject.categorie} </p> 
                        <p>Qui sont il ? : {uniqueProject.text} </p> 
                        <p>Mission : {uniqueProject.mission} </p> 
                        <p>Compétences acquises : {uniqueProject.competences} </p> 
                        {uniqueProject.link ? <p>Lien du projet : <a href={uniqueProject.link}>{uniqueProject.link}</a></p> : null }
                        {uniqueProject?.github ? <p>Lien du Github : <a href={uniqueProject.github}>{uniqueProject.github}</a></p> : null }
                         

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
                </div>
            </> : null }
            </Modal>
            <h2 className="text-center">Mes projets</h2>
            <div className="filtered__project">
                <ul className="filtered__project-item">
                    {
                        categorieProject.map((cat, indexProject) => {
                            return (
                                <li key={indexProject} data-index={indexProject}><button className="btn btn-success" onClick={() => handleClick(indexProject)}>{cat}</button></li>
                            )
                        })
                    }   
                </ul>
            </div>
            <div className="container mt-3 portfolio__content" id="modal">
                {
                    filter.length <= 0 ? 
                    defaultProject.map((p, index) => {
                        return (
                            <Card
                                key={p.id}
                                title={p.name}
                                img={p.images[0]}
                                text={p.text}
                                link={p.link}
                                openModal={() => openModal(p.id)}
                                github={p.github}
                            />
                        )
                    }): filter.map((projet, indexProjet) => {
                        return (
                            <>
                                <Card
                                    key={indexProjet}
                                    title={projet.name}
                                    img={projet.images[0]}
                                    text={projet.text}
                                    link={projet.link}
                                    openModal={() => openModal(projet.id)}
                                    github={projet.github}
                                />
                                
                            </>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}

export default Projet