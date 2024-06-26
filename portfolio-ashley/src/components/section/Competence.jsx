import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../Card'

function Competence() {

    const [ skills, setSkills ] = useState([])
    const [ filteredSkills, setFilteredSkills ] = useState(skills)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data/skills.json')
                const res = await response.json()
                setSkills(res)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const defaultSkills = skills.filter(skill => skill.titre_menu === "Langage de programmation")
    const [ isActive, setIsActive ] = useState(false)

    const initActive = (current) => {
        let listItemXp = document.querySelectorAll('li.list-group-item')
        listItemXp.forEach(element => {
            element.classList.remove("active")
        })
        current.classList.add("active")
    } 

    const handleClick = (index) => {
        event.preventDefault()
        const currentLi = document.getElementById(index)
        initActive(currentLi)
        const filtered = skills.filter(skill => skills[index].titre_menu.includes(skill.titre_menu))
        setFilteredSkills(filtered)
        
    }

    return (
        
        <section id="competences">
            <div className="container mt-4 pt-4">
                <h2 className="text-center">Compétences</h2>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <ul className="list-group">
                            {skills.map((t, indexSkills) => {
                                return (
                                    <a key={indexSkills} onClick={() => {handleClick(indexSkills)}}>
                                        <li className={indexSkills === 0 ? "list-group-item active" : "list-group-item" } id={indexSkills} data-index={indexSkills}>{t.titre_menu}</li>
                                    </a>
                                )
                            })} 
                        </ul>
                    </div>
                    <div className="scroll__box col-lg-9">
                        <div className="card__container competence__card">
                            {
                                filteredSkills.length <= 0 ? 
                                defaultSkills.map((item,i) => {
                                    return (    
                                        item.skills.map((s,i) => {
                                            return(
                                                <Card
                                                    key={i}
                                                    titre={s.skill}
                                                    image={s.icon}
                                                    text={s.description}
                                                    nbProject={s.nbProject}
                                                
                                                />
                                            )
                                        })
                                    )   
                                })
                                :filteredSkills.map((item, index) => {
                                    return (
                                        item.skills.map((s, i) => {
                                            return (
                                                <Card
                                                key={i}
                                                titre={s.skill}
                                                image={s.icon}
                                                text={s.description}
                                                nbProject={s.nbProject}
                                            
                                            />
                                        ) 
                                        })
                                    )
                                }) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        
    )
}

export default Competence