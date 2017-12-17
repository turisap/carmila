/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';
import {removeItem, removeAllSameItems} from '../actions/orders';
import {connect} from 'react-redux';

export const DishItem = (props) => (
    <div className="dishItem__content">
        <div className="dishItem__cropper">
            <img src={props.path} className="dishItem__img"/>
        </div>
        <p><span className="lead">Title:  </span>{props.title}</p>
        <p><span className="lead">Price:  </span>{props.price}</p>
        <p><span className="lead">Description:  </span>{props.description}</p>
        {(props.amount > 0) && <p><span className="lead">Amount:  </span>{props.amount}</p>}
        {(props.orderPage && props.amount > 0) && (
            <div>
                <p className="dishitem__removeone" onClick={() => props.removeItem(props.title)}>-</p>
                <p className="dishitem__removeall" onClick={() => props.removeAllSameItems(props.title)}>Remove All</p>
            </div>
        )}
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
    removeItem : (title) => dispatch(removeItem(title)),
    removeAllSameItems : (title) => dispatch(removeAllSameItems(title))
});


export default connect(undefined, mapDispatchToProps)(DishItem);