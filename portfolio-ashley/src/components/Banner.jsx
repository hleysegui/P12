import { useEffect, useState } from "react"
import arrow_left from '../assets/images/arrow_left.png'
import arrow_right from '../assets/images/arrow_right.png'

function Banner() {

    const [ data, setData ] = useState([])
    const [ index, setIndex ] = useState(0) 

    function prevBanner() { return index === 0 ? setIndex(data.length -1) : setIndex(index -1) }
    function nextBanner() { return index >= data.length -1 ? setIndex(0) : setIndex(index +1)}

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/data/banner.json')
                const res = await response.json()
                setData(res)
            } catch {
                console.log("error")
            }
        }
        fetchData()
    }, [])

    return (
       <section className="bgimage" id="home">
            <div className="arrow arrow_left">
			    <img src={arrow_left} onClick={prevBanner} alt="chevron gauche"/>
		    </div>
		    <div className="arrow arrow_right">
			    <img src={arrow_right} onClick={nextBanner} alt="chevron droit"/>
		    </div>
            {data.length > 1 ? (
                <div className="container-fluid">
                <div className='occupation'>
                    <span>Salut, moi c'est</span>
                    <p className="hero_name">Ashley segui</p>
                    <div className="hero-text">
                    <h1 className="hero_title">{data[index].title}<span className='hero_title-2'>{data[index].title2}</span></h1>
                    </div>
                    <div className='hero_short-description'>
                    <p className="hero_desc">{data[index].desc}</p>
                    </div>
                    <a href="#contact" type="button" className="btn btn-success">Discutons</a>
                </div>
                <div className='profile'>
                    <div className="profile-picture">
                        <img src={data[index].image} className="imageAboutPage" alt="ashley photo"/>
                    </div>
                    <div className='social-link'>
                        <a href="http://www.linkedin.com/in/ashley-segui-lubin-595275121" target="_blank"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/hleysegui" target="_blank"><i className="bi bi-github"></i></a>
                        <a href="https://wa.me/33659543524" target="_blank"><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div> 
            ): null}
        </section>
       


    )
}

export default Banner