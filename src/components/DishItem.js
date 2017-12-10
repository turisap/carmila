/**
 * Created by HP on 10-Dec-17.
 */
import React from 'react';

const DishItem = (props) => (
    <div>
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
    </div>
);

export default DishItem;