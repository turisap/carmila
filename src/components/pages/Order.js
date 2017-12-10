/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import DishItem from '../DishItem';

class Order extends React.Component {
    render () {
        return (
            this.props.orders.map((item, i) => {
                return (
                    <div key={i}>
                        <DishItem
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            amount={item.amount}
                        />
                    </div>
                )
            })
        )
    }
}

const mapStateToProps = (state) => ({
    orders : state.orders.items,
});

export default connect(mapStateToProps)(Order);



