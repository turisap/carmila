/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';
import {removeItem, removeAllSameItems} from '../actions/orders';
import {connect} from 'react-redux';

const DishItem = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
        {props.amount && <p>Amount: {props.amount}</p>}
        {(props.orderPage && props.amount > 0) && (
            <div>
                <p onClick={() => props.removeItem(props.title)}>-</p>
                <p onClick={() => props.removeAllSameItems(props.title)}>Remove All</p>
            </div>
        )}
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
    removeItem : (title) => dispatch(removeItem(title)),
    removeAllSameItems : (title) => dispatch(removeAllSameItems(title))
});


export default connect(undefined, mapDispatchToProps)(DishItem);