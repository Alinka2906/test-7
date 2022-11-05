import React, {useState} from 'react';
import './App.css';
import {Order} from '../types';
import burgerImage from '../assets/burger.jpeg';
import cheeseburgerImage from '../assets/cheeseburger.jpg';
import nuggetsImage from '../assets/nugg.jpg';
import teaImage from '../assets/tea.jpeg';
import coffeeImage from '../assets/coffee.jpeg';
import colaImage from '../assets/cola.jpeg';
import ItemsList from "../components/ItemsList/ItemsList";
import OrderItem from "../components/OrderItem/OrderItem";
import TotalPrice from "../components/TotalPrice/TotalPrice";


function App() {
    const items: Order [] = [
        {name: "Hamburger", price: 80, id: 1, image: burgerImage},
        {name: "Cheeseburger", price: 90, id: 2, image: cheeseburgerImage},
        {name: "Nuggets", price: 60, id: 3, image: nuggetsImage},
        {name: "Tea", price: 20, id: 4, image: teaImage},
        {name: "Coffee", price: 30, id: 5, image: coffeeImage},
        {name: "Cola", price: 35, id: 6, image: colaImage},
    ];

    const [orders, setOrders] = useState([
        {name: "Hamburger", price: 80, id: 1, quantity: 0, totalSum: 0},
        {name: "Cheeseburger", price: 90, id: 2, quantity: 0, totalSum: 0},
        {name: "Nuggets", price: 60, id: 3, quantity: 0, totalSum: 0},
        {name: "Tea", price: 20, id: 4, quantity: 0, totalSum: 0},
        {name: "Coffee", price: 30, id: 5, quantity: 0, totalSum: 0},
        {name: "Cola", price: 35, id: 6, quantity: 0, totalSum: 0},
    ]);

    const [totalPrice, setTotalPrice] = useState(
        {sum: 0},
    );

    const addItems = (id: number) => {
        const index = orders.findIndex(p => p.id === id);
        const itemsCopy = [...orders];
        const itemCopy = {...orders[index]};

        const totalPriceCopy = {...totalPrice};
        totalPriceCopy.sum += itemCopy.price;


        itemCopy.quantity += 1;
        itemCopy.totalSum = itemCopy.quantity * itemCopy.price;

        itemsCopy[index] = itemCopy;
        setTotalPrice(totalPriceCopy);
        setOrders(itemsCopy);
    }


    const removeOrder = (id: number) => {
        const index = orders.findIndex(p => p.id === id);
        const ordersCopy = [...orders];
        const newOrderCopy = {...ordersCopy[index]}
        const totalPriceCopy = {...totalPrice}
        totalPriceCopy.sum -= (newOrderCopy.price * newOrderCopy.quantity);
        newOrderCopy.quantity = 0;
        newOrderCopy.totalSum = 0;
        ordersCopy[index] = newOrderCopy;

        setOrders(ordersCopy);
        setTotalPrice(totalPriceCopy);
    };

    let ordersList: React.ReactNode = null;


    if (totalPrice.sum > 0 ) {
        let filteredOrders = orders.filter(order => order.quantity > 0);

        ordersList = (
            <div>
                <OrderItem filteredOrders={filteredOrders} removeOrder={removeOrder}/>
                <TotalPrice totalPrice={totalPrice.sum}/>
            </div>
        );
    } else {
        ordersList = (
            <div className="yourOrder">
                <div>Order is empty :(</div>
                <div>Please add some items!</div>
            </div>

        );
    }



    return (
        <div className="App">
            <div className="mainBlock">
                <div className="yourOrderList">
                    <p className="orderList-text">Order Details:</p>
                    {ordersList}
                </div>
                <ItemsList items={items} addItems={addItems}/>
            </div>

        </div>
    );
}

export default App;
