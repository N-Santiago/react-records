import React from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions/fetchCategories'
import { Route } from 'react-router-dom'
import Categories from '../components/Categories'
import Category from '../components/Category'

class CategoriesContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <div>
                <Route exact path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories}/>}/>
                <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>}/>
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