import './Movie.css';
import { useState } from "react"

function Movie(props: any) {

    const { data } = props || {}

    const [topPos, setTopPost] = useState(0)

    return (
        <div className="single-movie-container">
            <div style={{top:topPos+"%"}} onMouseEnter={()=>setTopPost(-100)} onMouseLeave={()=>setTopPost(0)} className="movie-exibition">
                <div className="img-wrapper"><img className="movie-img" src={data?.image} /></div>
                <div onClick={() => setTopPost(-200)} className="title-wrapper">
                    <p>{data?.title}</p>
                    <p>Original: {data?.original_title}</p>
                    <p>Title romanized: {data?.original_title_romanised}</p>
                    <p>Director: {data?.director}</p>
                    <p>Producer: {data?.producer}</p>
                    <p>Release date: {data?.release_date}</p>
                    <p>Running time: {data?.running_time}</p>
                </div>
                <div onClick={()=>setTopPost(topPos-10)} className="description-wrapper">
                    {data?.description}
               </div>
            </div>
        </div>
    );
}

export default Movie;
