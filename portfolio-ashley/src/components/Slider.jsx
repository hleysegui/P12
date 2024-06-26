import { useState } from "react"
import  rightArrow from "../assets/images/arrow_right.png"
import leftArrow  from "../assets/images/arrow_left.png"


/**
 * Get an array with picture for create slider
 * @param {Array} propTypes picture 
 * @param {String} propTypes alt 
 * @returns {HTMLElement}
 */
function Slider({picture, alt}) {

    const[index, setIndex ] = useState(0) 

    function prevSlide() { return index === 0 ? setIndex(picture.length -1) : setIndex(index -1) }
    function nextSlide() { return index >= picture.length -1 ? setIndex(0) : setIndex(index +1)}

    return (
        <div className="slider">
            {picture.length > 1 ? (
                <div className="slider__content">
                    <div className="slider__count">
                        {index + 1}/{picture.length}
                    </div>
                    <div className="slider__button">
                        <img src={leftArrow} onClick={prevSlide} alt="prev-slide"/>
                        <img src={rightArrow} onClick={nextSlide} alt="next-slide" />
                    </div>
                </div>
            ) : null }
            <div className="slider__image">
                <img src={picture[index]} alt={ alt } className="" />
            </div>
        </div>
        
        
    )
} 

export default Slider