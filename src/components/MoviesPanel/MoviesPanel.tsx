import Movie from './Movie/Movie';
import './MoviesPanel.css';

function MoviesPanel() {

    const movies = []

    for(let i = 0; i < 10;i++){
        movies.push(<Movie></Movie>)
    }

    return (
        <div className="movies-container">
            {movies}
        </div>
    );
}

export default MoviesPanel;
