import React from 'react'

const Albums = (props) => {
    return (
        <div>
            {props.albums && props.albums.map(album =>
                <div key={album.id}>
                    <h3>{album.title} by<br />
                    {album.artist}</h3>
                </div>
            )} 
        </div>
    )
}

export default Albums