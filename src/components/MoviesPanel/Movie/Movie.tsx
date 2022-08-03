import './Movie.css';
import { useState } from "react"

function Movie() {

    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className="single-movie-container">
            <div className={showDescription ? "movie-exibition maxroll" : "movie-exibition" }>
                <div className="img-wrapper"><img className="movie-img" /></div>
                <div onClick={()=>setShowDescription(true)}  className="title-wrapper"></div>
                <div onMouseLeave={()=>setShowDescription(false)} className="description-wrapper"></div>
            </div>
        </div>
    );
}

export default Movie;
