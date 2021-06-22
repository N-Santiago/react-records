import React from 'react'
import AlbumInput from '../components/AlbumInput'
import Albums from '../components/Albums'

class AlbumsContainer extends React.Component {

    render() {
        return (
            <div>
                < AlbumInput />
                < Albums albums={this.props.category && this.props.category.albums} />
            </div>
        )
    }
}

export default AlbumsContainer