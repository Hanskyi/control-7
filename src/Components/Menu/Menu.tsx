import React from 'react';
import {IItems} from "../../types";
import Product from "./Product";

interface IProps {
    items: IItems[];
    onAddItem: (id: string) => void;
}

const Menu: React.FC<IProps> = ({items, onAddItem}) => {
    return (
        <div className="menu">
            {items.map(item => {
                return <Product key={item.id} item={item} onAddItem={() => onAddItem(item.id)}/>
            })}
        </div>
    );
};

export default Menu;