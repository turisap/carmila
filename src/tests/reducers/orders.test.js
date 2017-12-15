/**
 * Created by HP on 15-Dec-17.
 *
 * Testing the order reducer function
 *
 */

import ordersReducer, {incrementSameItem} from '../../reducers/orders';
import order from '../fixtures/orders';

let fixOrder = {
    items : order,
    time : undefined,
    name : '',
    phone : ''
};

let fixState;

beforeEach(() => {
    fixState = {...fixOrder}
});


test('should set default state for orders', () => {
    const state = ordersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        items : [],
        time : undefined,
        name : '',
        phone : ''
    })
});

test('should increment an existing item in the order list', () => {
    const action = {
        type : 'ADD_ITEM',
        item : order[0]
    };
    const state = ordersReducer(fixOrder, action);
    expect(state).toEqual({
        name : '',
        phone : '',
        time : undefined,
        items : [
            {
                category: 'PIZZA',
                title: 'Cremeschnitte',
                price: 4,
                description : 'test description',
                amount : 1
            },
            {
                category: 'PASTA',
                title: 'Linguine',
                price: 5.5,
                description : 'test description',
                amount : undefined
            },
            {
                category: 'DESSERT',
                title: 'Margherita',
                price: 7,
                description : 'test description',
                amount : undefined
            }
        ]
    })
});

test('should add a new item to the order list', () => {
    const item = {
        category: 'PASTA',
        title: 'Kerfufflia',
        price: 5.5,
        description : 'test description',
        amount : undefined
    };
    const action = {
        type : 'ADD_ITEM',
        item
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        items : [...order, item],
        time : undefined,
        name : '',
        phone : ''
    })
});

test('should remove an item from order', () => {
    const action = {
        type : 'REMOVE_ITEM',
        title : 'Cremeschnitte'
    };
    const state = ordersReducer(fixState, action);
    expect(state).toEqual({
        items : [{
            category: 'PASTA',
            title: 'Linguine',
            price: 5.5,
            description : 'test description',
            amount : undefined
            },
            {
                category: 'DESSERT',
                title: 'Margherita',
                price: 7,
                description : 'test description',
                amount : undefined
            },],
        time  : undefined,
        name  : '',
        phone : ''
    })
});

test('should remove all same items from order', () => {
    const action = {
        type : 'REMOVE_ALL_SAME_ITEMS',
        title : 'Margherita'
    };
    console.log(order);
    const state = ordersReducer({
        items : order,
        time : undefined,
        name : '',
        phone : ''
    }, action);
    expect(state).toEqual({
        items : [
            {
                category: 'PIZZA',
                title: 'Cremeschnitte',
                price: 4,
                description : 'test description',
                amount : undefined
            },
            {
                category: 'PASTA',
                title: 'Linguine',
                price: 5.5,
                description : 'test description',
                amount : undefined
            },
        ],
        time  : undefined,
        name  : '',
        phone : ''
    })
});