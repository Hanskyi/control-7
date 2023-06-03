import React from 'react';
import deleteBtn from "../../images/delete.png";
import {IBasked} from "../../types";

interface IProps {
    onRemoveItem: React.MouseEventHandler<HTMLButtonElement>;
    el: IBasked;
}

const BasketProduct: React.FC<IProps> = ({el, onRemoveItem}) => {
    return (
        <div className="basket-info">
            <p className="basket-name">{el.name}:</p>
            <div className="basket-text">
                <p className="basket-count">x{el.count}</p>
                <p className="basket-total">{el.price} som</p>
            </div>
            <button onClick={onRemoveItem} className="button-basket-delete">
                <img className="delete-btn-img" src={deleteBtn} alt="#"/>
            </button>
        </div>
    );
};

export default BasketProduct;