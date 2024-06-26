import { useEffect, useState } from "react"
import CardXp from "../CardXp"

function Experience() {

    const [ experience, setExperience ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ itemPerPage, setItemPerPage ] = useState(3)
    const totalPages = Math.ceil(experience.length / itemPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data/experience.json')
                const res = await response.json()
                setExperience(res)
            }catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const startIndex = (currentPage - 1) * itemPerPage
    const endIndex = startIndex + itemPerPage
    const displayItems = experience.slice(startIndex, endIndex)

    return (
        <section id="experience">
            <div className="container mt-4 pt-4">
                <h2 className="text-center">Expérience Professionnel</h2>
                <div className="card__container xp__card">
                  {displayItems.map((xp, index) => {
                    return (
                        <CardXp 
                            img={xp.logo_agency}
                            agency={xp.agency}
                            alt={xp.agency}
                            dateStart={xp.date_start}
                            dateEnd={xp.date_end}
                            mission={xp.mission}
                            occupation={xp.occupation}
                            key={index}
                        />)
                    })}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                        <a key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={pageNumber === currentPage ? "active" : ""}>
                        {pageNumber}</a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience