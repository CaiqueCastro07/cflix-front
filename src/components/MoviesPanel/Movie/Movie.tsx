import './Movie.css';
import { useState } from "react"

function Movie(props: any) {

    const { data } = props || {}

    const [topPos, setTopPos] = useState(0)

    return (
        <div key={data?.id} className="single-movie-container">
            <div style={{ top: topPos + "%" }} onMouseEnter={() => setTopPos(-100)} onMouseLeave={() => setTopPos(0)} className="movie-exibition">
                <div onClick={() => setTopPos(-100)} className="img-wrapper"><img className="movie-img" src={data?.image} /></div>
                <div onClick={() => setTopPos(-200)} className="title-wrapper">
                    <p>{data?.title}</p>
                    <p>Original: {data?.original_title}</p>
                    <p>Title romanized: {data?.original_title_romanised}</p>
                    <p>Director: {data?.director}</p>
                    <p>Producer: {data?.producer}</p>
                    <p>Release date: {data?.release_date}</p>
                    <p>Running time: {data?.running_time}</p>
                </div>
                <div onClick={() => setTopPos(topPos - 40)} onMouseLeave={() => setTopPos(0)} className="description-wrapper">
                    {data?.description}
                </div>
            </div>
        </div>
    );
}

export default Movie;
