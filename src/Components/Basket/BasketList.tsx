import React from 'react';
import {IBasked} from "../../types";
import BasketProduct from "./BasketProduct";

interface IProps {
    basket: IBasked[];
    onRemoveItem: (id: string) => void;
}

const BasketList:React.FC<IProps> = ({basket,onRemoveItem}) => {
    return (
          <>
              {basket.map(el => {
                  return (
                     <BasketProduct el={el} onRemoveItem ={() => onRemoveItem(el.id)} />
                  )
              })}
          </>
    );
};

export default BasketList;