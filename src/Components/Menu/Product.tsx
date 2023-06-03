import React from 'react';
import {IItems} from "../../types";

interface IProps {
    item:IItems;
    onAddItem: React.MouseEventHandler<HTMLDivElement>;
}
const Product: React.FC<IProps> = ({item,onAddItem}) => {
    return (
        <div id={item.id} onClick={onAddItem} className="menu-items">
            <div className="menu-img">
                <img src={item.image} alt="#" className="menu-image"/>
            </div>
            <div className="menu-info">
                <p className="menu-name">{item.name}</p>
                <p className="menu-price">Price: {item.price} som</p>
            </div>
        </div>
    );
};

export default Product;