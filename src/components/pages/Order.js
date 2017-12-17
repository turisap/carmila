/**
 * Created by HP on 09-Dec-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import { TimePicker } from 'antd';
import moment from 'moment';
import Link, {LinkedComponent} from 'valuelink';
import {Input} from 'valuelink/tags';
import getRowsOfDishes from '../../adapters/chunk';
import {setPickupTime, fillCredentials, removeItem} from '../../actions/orders';

export class Order extends LinkedComponent {
    state = {
        name : '',
        phone : '',
        timeError : undefined,
        submitted : false
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
        this.setState({submitted:true});
        if(!this.state.timeError) {
            this.props.fillCredentials(this.state)
        }
    };

    render () {
        const linked = this.linkAll();
        const nameLink = Link.state(this, 'name')
            .check(x => x, 'Name is required');
        const phoneLink = Link.state(this, 'phone')
            .check(x => x, 'Phone is required')
            .check(x => x.match(/^[0-9]*$/), 'Phone number should be valid');

        return (
            <div>
                {this.props.orders.items && getRowsOfDishes(3, this.props.orders.items, true)}
                {(this.props.orders.items && this.props.orders.items.length > 0) &&
                <form onSubmit={this.handleOrderPlacing}>
                    <FormInput valueLink={nameLink} submitted={this.state.submitted}/>
                    <FormInput valueLink={phoneLink} submitted={this.state.submitted}/>
                    <TimePicker
                        defaultValue={moment().add(1, 'hour')}
                        format={'HH:mm'}
                        onChange={this.onDateChange}
                    />
                    {(this.state.timeError && this.state.submitted) && <p>{this.state.timeError}</p>}
                    <button href="#" id="placeOrder"
                            type="submit"
                    >Place Order</button>
                </form>
                }
            </div>

        )
    }
}

const FormInput = ({...props}) => (
    <div>
        <Input {...props}/>
        <div className="error-placeholder">
            {(props.valueLink.error && props.submitted) && <p>{props.valueLink.error}</p>}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    orders : state.orders,
});

const mapDispatchToProps = (dispatch, props) => ({
    setPickupTime : (time) => dispatch(setPickupTime(time)),
    fillCredentials : (data) => dispatch(fillCredentials(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);




