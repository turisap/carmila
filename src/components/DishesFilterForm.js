/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {categories} from  '../data/data';
import {setPizzaFilter, setPastaFilter, setDessertFilter} from '../actions/filters';

class DishesFilterForm extends React.Component {
    handleCategoryChange = (e) => {
        if (e.target.text === 'PIZZA') {
            //console.log(e.target.text)
            this.props.setPizzaFilter()
        } else if (e.target.text === 'PASTA') {
            //console.log(e.target.text)
            this.props.setPastaFilter()
        } else if (e.target.text === 'DESSERTS') {
            //console.log(e.target.text)
            this.props.setDessertFilter();
        }
    };

    render () {
        return (
            <div>
                {categories.map((c,i) => {
                    return (
                        <a key={i} onClick={this.handleCategoryChange}>{c}</a>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzaFilter : () => dispatch(setPizzaFilter()),
        setPastaFilter : () => dispatch(setPastaFilter()),
        setDessertFilter : () => dispatch(setDessertFilter())
    }
};


export default connect(undefined, mapDispatchToProps)(DishesFilterForm);