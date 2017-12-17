/**
 * Created by HP on 17-Dec-17.
 */

import React from 'react';
import DishItem from '../components/DishItem';

const getRowsOfDishes = (n,list, orderPage=false, addButton) => {
    let items = [...list];
    let chunks = [[]];
    let currentChunk = 0;
    items.forEach((item, i) =>{
        if (i !== 0 && (i % n === 0)) {
            chunks.push([]);
            currentChunk++;
        }
        chunks[currentChunk].push(item);
    });
    //console.log(chunks);
    return chunks.map(ch => {
        return (
            <div className="dishlist__chunkRow">
                {ch.map((d,i) => {
                    return (
                        <div key={i} className="dishItem">
                            <DishItem
                                title={d.title}
                                price={d.price}
                                description={d.description}
                                path={d.path}
                                amount={d.amount}
                                orderPage={orderPage}
                            />
                            <button className="btn btn-secondary" onClick={() => addButton(d)}>
                                Add to order
                            </button>
                        </div>
                    )
                })}
            </div>
        )
    });
};

export default getRowsOfDishes;