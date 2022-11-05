import React from 'react';
import {Order} from "../../types";

interface Props {
    filteredOrders: Order [];
    removeOrder: (id: number) => void;
}

const OrderItem: React.FC<Props> = ({filteredOrders, removeOrder}) => {
    return (
        <div className="yourOrder">
            {filteredOrders.map(item => (
                <div className="desc" key={item.id}>
                    <div className="items">
                        <div className="item">{item.name}</div>
                        <div className="item">{item.totalSum} KGS</div>
                        <div className="item">{item.quantity}</div>
                        <div className="item" onClick={() => removeOrder(item.id)}>X</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderItem;