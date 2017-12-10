/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import { TimePicker } from 'antd';
import moment from 'moment';
import DishItem from '../DishItem';

class Order extends React.Component {
    state = {
        inAppropriateTimeError : ''
    };

    onDateChange = (e) => {
        console.log(e.isBefore(moment().add(30, ' minutes')))

    };
    render () {
        return (
            <div>
                {this.props.orders.map((item, i) => {
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
                })}
                <form>
                    <input name="name" type="text"/>
                    <input name="phone" type="text"/>
                    <TimePicker
                        defaultValue={moment().add(1, 'hour')}
                        format={'HH:mm'}
                        onChange={this.onDateChange}
                    />
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    orders : state.orders.items,
});

export default connect(mapStateToProps)(Order);



