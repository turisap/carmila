/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import { connect } from 'react-redux';
import DishItem from './../DishItem';
import visibleDishes from '../../selectors/visibleDishes';
import DishesFilterForm from '../DishesFilterForm';
import { addItem, removeItem, fillCredentials } from '../../actions/orders';


export class Dishes extends React.Component {
    handleAddButton = (item) => {
        this.props.addItemToOrder(item)
    };

    render(){
        return (
            <div>
                <DishesFilterForm/>
                {this.props.dishes.map((d,i) => {
                    return (
                        <div key={i}>
                            <DishItem
                                title={d.title}
                                price={d.price}
                                description={d.description}
                            />
                            <button onClick={() => this.handleAddButton(d)}>+</button>
                        </div>
                    )
                })};
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dishes : visibleDishes(state.filter.filterBy, state.filter.text)
});

const mapDispatchToProps = (dispatch, props) => ({
    addItemToOrder : (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);