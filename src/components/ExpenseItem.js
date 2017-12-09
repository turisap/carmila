/**
 * Created by HP on 01-Dec-17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, dispatch, id}) => (
    <div key={description}>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount}</p>
        {createdAt && <p>{createdAt}</p>}

    </div>
);

export default ExpenseListItem;
