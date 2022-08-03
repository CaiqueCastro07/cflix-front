import Movie from './Movie/Movie';
import './MoviesPanel.css';
import { filmes } from "../../data/data"

function MoviesPanel() {


    return (
        <div className="movies-container">
            {filmes.map((e) => {
                //@ts-ignore
                return <Movie data={e}></Movie>
            })}
        </div>
    );
}

export default MoviesPanel;
