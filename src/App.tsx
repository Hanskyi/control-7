import React, {useState} from 'react';
import {nanoid} from "nanoid";
import drinks from './images/drinks.png';
import eat from './images/eat.png';
import {IBasked, IItems} from "./types";
import './App.css';
import './Components/Basket/basket.css';
import './Components/Menu/menu.css';
import Menu from "./Components/Menu/Menu";
import BasketList from "./Components/Basket/BasketList";

const items: IItems[] = [
    {id: nanoid(), name: 'Hamburger', price: 80, image: eat},
    {id: nanoid(), name: 'Cheeseburger', price: 90, image: eat},
    {id: nanoid(), name: 'Fries', price: 45, image: eat},
    {id: nanoid(), name: 'Coffee', price: 70, image: drinks},
    {id: nanoid(), name: 'Tea', price: 50, image: drinks},
    {id: nanoid(), name: 'Cola', price: 40, image: drinks},
];
function App() {
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
           <Menu items = {items} onAddItem ={onAddItem}/>
            <div className="basket">
            <BasketList basket={basket} onRemoveItem = {onRemoveItem} />
                <p className="total">total: {total}</p>
            </div>
        </div>
    );
}

export default App;
