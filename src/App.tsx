import React, {useState} from 'react';
import './App.css';
import drinks from './images/drinks.png'
import eat from './images/eat.png'
import {nanoid} from "nanoid";
import { IBasked, IItems} from "./types";

function App() {
    const [items, setItems] = useState<IItems[]>([
        {id: nanoid(), name: 'Hamburger', price: 80, image: eat},
        {id: nanoid(), name: 'Cheeseburger', price: 90, image: eat},
        {id: nanoid(), name: 'Fries', price: 45, image: eat},
        {id: nanoid(), name: 'Coffee', price: 70, image: drinks},
        {id: nanoid(), name: 'Tea', price: 50, image: drinks},
        {id: nanoid(), name: 'Cola', price: 40, image: drinks},
    ]);

    const [basket, setBasket] = useState<IBasked[]>([]);
    const [count, setCount] = useState(0)

    const onAddItem = (id: string) => {
        items.forEach(item => {
            if (id === item.id) {
                setBasket(prevState => {
                    const itemInBasket = prevState.find(basketEl => basketEl.name === item.name);
                    if (itemInBasket) {
                        return prevState.map(basketEl =>
                            basketEl.name === item.name
                                ? { ...basketEl, count: basketEl.count + 1, price: basketEl.price + item.price}
                                : basketEl
                        );
                    } else {
                        return [
                            ...prevState,
                            {
                                id: nanoid(),
                                name: item.name,
                                price: item.price,
                                count: 1
                            }
                        ];
                    }
                });
            }
        });
    };
    console.log(basket);
    return (
        <div className="container">
            <div className="menu">
                {items.map(item => {
                    return (
                        <div id={item.id} onClick={() => onAddItem(item.id)} className="menu-items">
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

                {basket.map(el => {
                    return (
                        <div className="basket-info">
                            <p className="basket-name">{el.name}</p>
                            <p className="basket-count">{el.count}</p>
                            <p className="basket-total">{el.price}</p>
                            <div>
                                <button className="button-basket-delete">X</button>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    );
}

export default App;
