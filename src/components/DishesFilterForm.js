/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {categories} from  '../data/data';
import {setPizzaFilter, setPastaFilter, setDessertFilter, setTextFilter} from '../actions/filters';


export class DishesFilterForm extends React.Component {
    state = {
        activeLink : 'pizza'
    };
    handleCategoryChange = (e) => {
        const filter = e.target.text.toUpperCase();
        if (filter === 'PIZZA') {
            this.props.setPizzaFilter();
            this.setState({activeLink : 'pizza'});
        } else if (filter === 'PASTA') {
            this.setState({activeLink : 'pasta'});
            this.props.setPastaFilter()
        } else if (filter === 'DESSERTS') {
            this.setState({activeLink : 'desserts'});
            this.props.setDessertFilter();
        }
        this.props.setTextFilter('')
    };

    handleFilterTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    };

    render () {
        return (
            <div>
                <input type="text" onKeyDown={this.handleFilterTextChange}/>
                {categories.map((c,i) => {
                    return (
                        <a key={i} className={c.toLowerCase() === this.state.activeLink ? 'active-category' : ''} onClick={this.handleCategoryChange}>{c}</a>
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
        setDessertFilter : () => dispatch(setDessertFilter()),
        setTextFilter  : (text) => dispatch(setTextFilter(text))
    }
};


export default connect(undefined, mapDispatchToProps)(DishesFilterForm);