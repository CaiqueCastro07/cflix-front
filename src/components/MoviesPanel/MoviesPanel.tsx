import Movie from './Movie/Movie';
import './MoviesPanel.css';
import { ApiController } from '../../Api/Api';
import { useState, useEffect } from 'react';

let pageLimit = 0;

function MoviesPanel(props: any) {

    const [films, setFilms] = useState([])
    const [loader, setLoader] = useState(false)
    const [pageFinal, setPageFinal] = useState(false)

    const api = new ApiController()

    const increasePageLimit = () => { pageLimit = films.length; return true }

    !films?.length && api.getFilmsApi(pageLimit, pageLimit + 9).then((arrayOfFilms: any) => {
        //@ts-ignore
        Array.isArray(arrayOfFilms) && arrayOfFilms.length && increasePageLimit() && setFilms([...films, ...arrayOfFilms])

    }).catch((err) => {

    })

    const scrolling_function = () => {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 75) {

            console.log("fetching more.........")
            !pageFinal && setLoader(true)

            !pageFinal && increasePageLimit() && api.getFilmsApi(pageLimit, pageLimit + 9).then((arrayOfFilms: any) => {

                Array.isArray(arrayOfFilms) && arrayOfFilms.length < 9 && setPageFinal(true)
                //@ts-ignore
                Array.isArray(arrayOfFilms) && arrayOfFilms.length && increasePageLimit() && setFilms([...films, ...arrayOfFilms])
                setLoader(false)

            }).catch((err) => {
                setLoader(false)
            })

            window.removeEventListener('scroll', scrolling_function)
        }
    }

    window.addEventListener('scroll', scrolling_function);

    return (<>
        <div className="movies-container">
            {films.map((e) => {
                return <Movie data={e}></Movie>
            })}
        </div>
        {loader ? <div className='spinner rotate'></div> : <></>}
    </>
    );
}

export default MoviesPanel;
