import React from 'react'

const Albums = (props) => {
    return (
        <div>
            {props.albums && props.albums.map(album =>
                <div key={album.id}>
                    <p><img src={album.image} width={300} height={300} alt={'React Records'} /></p>
                    <h3>{album.title} by<br />
                    {album.artist}</h3>
                </div>
            )} 
        </div>
    )
}

export default Albums