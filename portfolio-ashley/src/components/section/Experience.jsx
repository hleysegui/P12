import { useEffect, useState } from "react"
import Card from "../Card"

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
                        <Card
                            img={xp.logo_agency}
                            title={xp.title}
                            alt={xp.title}
                            date={xp.date}
                            text={xp.text}
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