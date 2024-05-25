
import Card from './Card'
import { useState } from 'react'
import { useEffect } from 'react'

function About() {

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

    const handleClick = (index) => {
        event.preventDefault()
        const filtered = skills.filter(skill => skills[index].titre_menu.includes(skill.titre_menu))
        setFilteredSkills(filtered)
    }

    return (
        
        <section id="about">
            <div className="container mt-4 pt-4">
                <h2 className="text-center">A propos</h2>
                <div className="row mt-4">
                    <div className="col-lg-3">
                        <ul>
                            {skills.map((t, indexSkills) => {
                                return (
                                    <li key={indexSkills} data-index={indexSkills}><a href='' onClick={() => handleClick(indexSkills)}>{t.titre_menu}</a></li>
                                )
                            })} 
                        </ul>
                    </div>
                    <div className="scroll__box col-lg-9">
                        <div className="card__container">
                            {
                                filteredSkills.length <= 0 ? 
                                defaultSkills.map((item,i) => {
                                    return (
                                        item.skills.map((s,i) => {
                                            return(
                                                <Card 
                                                    key={i} 
                                                    alt={s.description}
                                                    name={s.skill}
                                                    description={s.description}
                                                />
                                            )
                                        })
                                    )   
                                })
                                :filteredSkills.map((item, index) => {
                                    return (
                                        item.skills.map((s, i) => {
                                            return (<Card 
                                                key={i} 
                                                alt={s.description}
                                                name={s.skill}
                                                description={s.description}
                                            />) 
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

export default About