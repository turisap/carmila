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
                <section className="dishesFilterForm">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <DishesFilterForm/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="dishList">
                    <div className="container-fluid">
                        <div className="dishList__container">
                            {this.props.dishes.map((d,i) => {
                                return (
                                    <div>
                                        <div key={i} className="dishItem">
                                            <DishItem
                                                title={d.title}
                                                price={d.price}
                                                description={d.description}
                                                path={d.path}
                                            />
                                            <button onClick={() => this.handleAddButton(d)}>+</button>
                                        </div>
                                    </div>
                                )
                            })};
                        </div>
                    </div>
                </section>

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