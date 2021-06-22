import React from 'react'
import AlbumsContainer from '../containers/AlbumsContainer'

const Category = (props) => {

    let category = props.categories.filter(category => category.id == props.match.params.id)[0]

    return (
        <div>
            <h2>{category ? category.name : "We didn't find any category or maybe it doesn't exist yet."}</h2> 
            < AlbumsContainer category={category} />
        </div>
    )
}

export default Category