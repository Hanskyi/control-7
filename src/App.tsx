import React, {useState} from 'react';
import './App.css';
import drinks from './images/drinks.png'
import eat from './images/eat.png'
import {nanoid} from "nanoid";

function App() {
    const [ items, setItems] = useState<IItems[]>([
        {id: nanoid(),name: 'Hamburger', price: 80, image: eat},
        {id: nanoid(),name: 'Cheeseburger', price: 90, image: eat},
        {id: nanoid(),name: 'Fries', price: 45, image: eat},
        {id: nanoid(),name: 'Coffee', price: 70, image: drinks},
        {id: nanoid(),name: 'Tea', price: 50, image: drinks},
        {id: nanoid(),name: 'Cola', price: 40, image: drinks},
    ]);

  return (
    <div className="container">
      <div className="menu">
          { items.map(item => {
              return(
                  <div id={item.id} className="menu-items">
                      <div className="menu-img">
                          <img src={item.image} alt="#" className="menu-image"/>
                      </div>
                      <div className="menu-info">
                          <p className="menu-name">{item.name}</p>
                          <p className="menu-price">Price: {item.price}</p>
                      </div>
                  </div>
              )
          })}


      </div>

      <div className="basket">
          <div className="basket-info">
              <p className="basket-name">caffe</p>
              <p className="basket-count">1</p>
              <p className="basket-total">100som</p>
              <div>
                  <button className="button-basket-delete">X</button>
              </div>
          </div>
      </div>


    </div>
  );
}

export default App;
