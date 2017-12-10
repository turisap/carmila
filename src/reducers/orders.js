/**
 * Created by HP on 10-Dec-17.
 */

const orderDefaultReducerState = {
    items : [],
    name : '',
    email : ''
};

export default (state = orderDefaultReducerState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items : incrementSameItem(state.items, action.item)
            };
            break;
        case 'REMOVE_ITEM':
            return state.items.map(item => item.title !== action.title);
            break;
        case 'FILL_CREDENTIALS':
            return {
                ...state,
                name : action.data.name,
                email : action.data.email
            };
        default:
            return state;
    }
}

const incrementSameItem = (initialItems, additionalItem) => {
    if(initialItems.length !== 0) {
        let exist = false;
        initialItems.forEach(i => {
            if (i.title === additionalItem.title) {
                i.amount++;
                exist = true;
            }
        });
        return exist ? initialItems : [...initialItems, additionalItem];
    }
    return [additionalItem];
};