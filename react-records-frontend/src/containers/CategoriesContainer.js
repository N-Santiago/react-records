import React from 'react'
import { connect } from 'react-redux'
import Categories from '../components/Categories'
import { fetchCategories } from '../actions/fetchCategories'
import { Route } from 'react-router-dom'

class CategoriesContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <Route exact path='/categories' component={Categories} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer)
