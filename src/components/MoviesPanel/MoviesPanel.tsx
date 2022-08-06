import Movie from './Movie/Movie';
import './MoviesPanel.css';
import { ApiController } from '../../Api/Api';
import { useState, useEffect } from 'react';

let pageLimit = 0;

function MoviesPanel(props: any) {

    const [films, setFilms] = useState([])

    console.log("Pagelimit", pageLimit)

    const api = new ApiController()

    const increasePageLimit = () => { pageLimit = films.length; return true }

    !films?.length && api.getFilmsApi(pageLimit, pageLimit + 9).then((arrayOfFilms: any) => {
        //@ts-ignore
        Array.isArray(arrayOfFilms) && arrayOfFilms.length && increasePageLimit() && setFilms([...films, ...arrayOfFilms])

    }).catch((err) => {

    })

    const scrolling_function = () => {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 30) {
            console.log("fetching more.........")

            increasePageLimit() && api.getFilmsApi(pageLimit, pageLimit + 9).then((arrayOfFilms: any) => {
                //@ts-ignore
                Array.isArray(arrayOfFilms) && arrayOfFilms.length && increasePageLimit() && setFilms([...films, ...arrayOfFilms])

            }).catch((err) => {

            })

            window.removeEventListener('scroll', scrolling_function)
        }
    }

    window.addEventListener('scroll', scrolling_function);

    return (
        <div className="movies-container">
            {films.map((e) => {
                //@ts-ignore
                return <Movie data={e}></Movie>
            })}
        </div>
    );
}

export default MoviesPanel;
