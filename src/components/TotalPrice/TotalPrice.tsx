import React from 'react';
import {Order} from "../../types";

interface Props {
    totalPrice: number;
}

const TotalPrice: React.FC<Props> = ({totalPrice}) => {
    return (
        <div className="yourOrder totalPrice">Total Price : {totalPrice} KGS</div>
    );
};

export default TotalPrice;