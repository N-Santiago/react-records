import React from 'react'
import Category from './Category'

const Categories = (props) => {

    return (
        <div>
            {this.props.categories.map((category) => (
                <div key={category.id}><Category category={category}></Category></div>
            ))}
        </div>        
    )
}

export default Categories