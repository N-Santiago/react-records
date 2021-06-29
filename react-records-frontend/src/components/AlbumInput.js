import React from 'react'
import { connect } from 'react-redux'
import { addAlbum } from '../actions/addAlbum';

class AlbumInput extends React.Component {
    state = {
        title: '',
        artist: '',
        album_image: '',
        genre: '',
        description: '',
        category_id: '1',
        condition: 'Sealed',
        price: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAlbum(this.state, this.props.history);
        this.setState({
            title: '',
            artist: '',
            album_image: '',
            genre: '',
            description: '',
            category_id: '',
            condition: '',
            price: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Enter New Album</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Title:</label>
                    <input type="text" placeholder='Title' value={this.state.title} name='title' onChange={this.handleChange} /><br /><br />
                    <label>Artist:</label>
                    <input type="text" placeholder='Artist' value={this.state.artist} name='artist' onChange={this.handleChange} /><br /><br />
                    <label>Image:</label>
                    <input type='file' placeholder='Image' value={this.state.album_image} name='album_image' onChange={this.handleChange} enctype="multipart/form-data" /><br /><br />
                    <label>Genre:</label>
                    <input type='text' placeholder='Genre' value={this.state.genre} name='genre' onChange={this.handleChange} /><br /><br />
                    <label>Description:</label>
                    <input type="text" placeholder='Description' value={this.state.description} name='description' onChange={this.handleChange} /><br /><br />
                    <label>Category:</label>
                    <select name="category" value={this.state.category_id} name='category_id' onChange={this.handleChange}>
                        <option value="1">Vinyl</option>
                        <option value="2">CD</option>
                        <option value="3">Cassette</option>
                    </select>
                    <label>Condition:</label>
                    <select name="condition" value={this.state.condition} name='condition' onChange={this.handleChange}>
                        <option value="sealed">Sealed</option>
                        <option value="mint">Mint (M)</option>
                        <option value="near-mint">Near Mint (NM)</option>
                        <option value="excellent">Excellent (E)</option>
                        <option value="very-good-plus">Very Good + (VG+)</option>
                        <option value="very-good">Very Good (VG)</option>
                        <option value="good">Good (G)</option>
                        <option value="fair">Fair (F)</option>
                        <option value="poor">Poor (P)</option>          
                    </select>
                    <label>Price:</label>
                    <input type='number' placeholder='Price' value={this.state.price} name='price' onChange={this.handleChange} /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default connect(null, { addAlbum })(AlbumInput)