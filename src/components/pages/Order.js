/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import { TimePicker } from 'antd';
import moment from 'moment';
import DishItem from '../DishItem';
import {setPickupTime, fillCredentials} from '../../actions/orders';

class Order extends React.Component {
    state = {
        timeError : undefined,
        nameError : undefined,
        phoneError : undefined,
        name : undefined,
        phone : undefined
    };

    onDateChange = (e) => {
        if (!e.isAfter(moment().add(1, 'hour'))) {
            this.setState({timeError : 'We need at least one hour to prepare you order'});
            this.props.setPickupTime(undefined);
            return;
        }
        this.setState({timeError : undefined});
        this.props.setPickupTime(e.format('Do MMM, HH:mm'));
    };

    handleOrderPlacing = (e) => {
        e.preventDefault();
        if(!this.state.timeError && !this.state.nameError && !this.state.phoneError) {
            this.props.fillCredentials(this.state)
        }
    };

    onNameChange = (e) => {
        if (e.target.value.length <= 2){
            this.setState({nameError: 'Name should be at least two characters long'});
            return;
        }
        this.setState({nameError: ''});
        this.setState({name:e.target.value})
    };

    onPhoneChange = (e) => {
        if (!this.validatePhoneNumber(e.target.value)){
            this.setState({phoneError: 'Please enter a valid phone number'});
            return;
        }
        this.setState({phoneError: ''});
        this.setState({phone:e.target.value})
    };

    validatePhoneNumber = (phone) => {
        if (phone.length <= 2) return false;
        return true;
    };

    checkInputs = ()

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
                <form onSubmit={this.handleOrderPlacing}>
                    <input name="name" type="text" onChange={this.onNameChange}/>
                    <input name="phone" type="text" onChange={this.onPhoneChange}/>
                    {this.state.timeError && <p className="error">{this.state.timeError}</p>}
                    {this.state.phoneError && <p className="error">{this.state.phoneError}</p>}
                    {this.state.nameError && <p className="error">{this.state.nameError}</p>}
                    <TimePicker
                        defaultValue={moment().add(1, 'hour')}
                        format={'HH:mm'}
                        onChange={this.onDateChange}
                    />
                    <button href="#" id="placeOrder">Place Order</button>
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
    fillCredentials : (data) => dispatch(fillCredentials(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);



