/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import DishItem from './../DishItem';
import visibleDishes from '../../selectors/visibleDishes';
import DishesFilterForm from '../DishesFilterForm';
import { connect } from 'react-redux';

const Dishes = (props) => {
    return (
        <div>
            <DishesFilterForm/>
            {props.dishes.map((d,i) => {
                return <DishItem title={d.title} price={d.price} key={i} description={d.description} />
            })};
        </div>
    )
};

const mapStateToProps = (state) => ({
    dishes : visibleDishes(state.filter.filterBy)
});

export default connect(mapStateToProps)(Dishes);