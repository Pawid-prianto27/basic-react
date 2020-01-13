import React from 'react';

const Movies = (props) => {
    return (
        <div>
            {props.data.map((value, index) =>
                <li key={index}>Judul Film: {value.title} ({value.releaseYear})</li>
            )}
        </div>
    )
}

export default Movies;