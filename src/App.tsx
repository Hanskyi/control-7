import React, {useState} from 'react';
import './App.css';
import drinks from './images/drinks.png';
import eat from './images/eat.png';
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
    const [total, setTotal] = useState(0)

    const onAddItem = (id: string) => {
        const selectedItem = items.find(item => item.id === id);

        if (selectedItem) {
            setBasket(prevState => {
                const itemIndex = prevState.findIndex(el => el.name === selectedItem.name);
                const copyBasket = [...prevState];

                if (itemIndex !== -1) {
                    copyBasket[itemIndex] = {
                        ...copyBasket[itemIndex],
                        count: copyBasket[itemIndex].count + 1,
                        price: copyBasket[itemIndex].price + selectedItem.price
                    };
                } else {
                    copyBasket.push({
                        ...selectedItem,
                        count: 1
                    });
                }

                const newTotal = copyBasket.reduce((acc, item) => acc + item.price, 0);
                setTotal(newTotal);

                return copyBasket;
            });
        }
    };

    const onRemoveItem = (id: string) => {
        setBasket(prevState => {
            const filterBasket = prevState.filter(item => item.id !== id);
            const newTotal = filterBasket.reduce((acc, item) => acc + item.price, 0);
            setTotal(newTotal);
            return filterBasket;
        });
    };

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
                                <button onClick={() => onRemoveItem(el.id)} className="button-basket-delete">X</button>
                            </div>
                        </div>
                    )
                })}
                <p>total: {total}</p>
            </div>
        </div>
    );
}

export default App;
