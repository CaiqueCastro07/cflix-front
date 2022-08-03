import './Movie.css';
import { useState } from "react"

function Movie(props:any) {

    const {data} = props || {}

    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className="single-movie-container">
            <div onMouseLeave={()=>setShowDescription(false)} className={showDescription ? "movie-exibition maxroll" : "movie-exibition" }>
                <div className="img-wrapper"><img className="movie-img" /></div>
                <div onClick={()=>setShowDescription(true)}  className="title-wrapper">{data?.title}</div>
                <div  className="description-wrapper">{data?.description}</div>
            </div>
        </div>
    );
}

export default Movie;
