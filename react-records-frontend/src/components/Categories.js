import React from 'react'
import {Link} from 'react-router-dom'

const Categories = (props) => {

    return (
        <div>
            {props.categories.map((category) => (
                <div key={category.id}>
                    <h2><Link to={`/categories/${category.id}`}>{category.name}</Link></h2>
                </div>
            ))}
        </div>        
    )
}

export default Categories