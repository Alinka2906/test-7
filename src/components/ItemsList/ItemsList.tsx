import React from 'react';
import {Order} from "../../types";

interface Props {
    items: Order [];
    addItems: (id: number) => void;
}

const ItemList: React.FC<Props> = ({items, addItems}) => {
    return (
        <div className="orderList">
            <p className="orderList-text">Add in order:</p>
            <div className="orderList-items">
                {items.map(item => (
                    <div className="desc" key={item.id}>
                        <button onClick={() => addItems(item.id)}>
                            <div className="items">
                                <img className="paint" src={item.image} alt={item.image}/>
                                <div className="item">{item.name}</div>
                                <div className="item">{item.price}</div>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemList;