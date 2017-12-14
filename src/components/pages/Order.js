/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import { TimePicker } from 'antd';
import moment from 'moment';
import DishItem from '../DishItem';
import {setPickupTime} from '../../actions/orders';

class Order extends React.Component {
    state = {
        inappropriateTimeError : undefined
    };

    onDateChange = (e) => {
        if (!e.isAfter(moment().add(1, 'hour'))) {
            this.setState({inappropriateTimeError : 'We need at least one hour to prepare you order'});
            this.props.setPickupTime(undefined);
            return;
        }
        this.setState({inappropriateTimeError : undefined});
        this.props.setPickupTime(e.format('Do MMM, HH:mm'));
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
                    {this.state.inappropriateTimeError && <p className="wrong-time-error">{this.state.inappropriateTimeError}</p>}
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

const mapDispatchToProps = (dispatch, props) => ({
    setPickupTime : (time) => dispatch(setPickupTime(time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);



