/**
 * Created by HP on 10-Dec-17.
 */

/**
 * Adds an item to the items array
 * @param item
 */
export const addItem = (item) => ({
    type : 'ADD_ITEM',
    item,
});

/**
 * Removes an item from the items array
 * @param title
 */
export const removeItem = (title) => ({
    type : 'REMOVE_ITEM',
    title
});

/**
 * Fills state with user's credentials
 * @param data
 */
export const fillCredentials = (data) => ({
    type : 'FILL_CREDENTIALS',
    data
});