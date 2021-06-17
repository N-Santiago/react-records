import React from 'react'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/fetchCategories';

class Categories extends React.Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                {this.props.categories.map((category) => (
                    <div key={category.id}>
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};


export default connect(mapStateToProps, { fetchCategories })(Categories); 