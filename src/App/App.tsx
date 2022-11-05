import React, {useState} from 'react';
import './App.css';
import {Order} from '../../src/types';
import burgerImage from '../assets/burger.jpeg';
import cheeseburgerImage from '../assets/cheeseburger.jpg';
import nuggetsImage from '../assets/nugg.jpg';
import teaImage from '../assets/tea.jpeg';
import coffeeImage from '../assets/coffee.jpeg';
import colaImage from '../assets/cola.jpeg';


function App() {
  const description: Order [] = [
    {name: "Hamburger", price: 180, id: 1, image: burgerImage},
    {name: "Cheeseburger", price: 180, id: 1, image: cheeseburgerImage},
    {name: "Nuggets", price: 180, id: 1, image: nuggetsImage},
    {name: "Tea", price: 180, id: 1, image: teaImage},
    {name: "Coffee", price: 180, id: 1, image: coffeeImage},
    {name: "Cola", price: 180, id: 1, image: colaImage},
  ];

  const [orders, setOrders] = useState([]);


  return (
    <div className="App">
      <div className="mainBlock">
        <div className="yourOrderList"></div>
        <div className="orderList">
          <p className="orderList-text">Order Details:</p>
          {description.map(item => (
            <div className="desc" key={item.id}>
              <button>
                <div className="items">
                  <img className="paint" src={item.image}/>
                  <div className="item">{item.name}</div>
                  <div className="item">{item.price}</div>
                </div>
              </button>
            </div>

          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
