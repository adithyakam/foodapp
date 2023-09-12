import React, { useEffect, useState } from "react";
import "./MenuCategory.css";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

import Menu from "../Menu/Menu";

const MenuCategory = (props) => {
  const [iscategorydropdownopen, setiscategorydropdownopen] = useState(false);

  const { title, itemCards } = props.card.card;
  const { isveg } = props;

  const menuOpen = () => {
    setiscategorydropdownopen(!iscategorydropdownopen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => menuOpen()}
      >
        <h1 className="text-lg mb-1 mt-2">{title}</h1>
        {iscategorydropdownopen ? (
          <img src={up} className="w-4 h-4" />
        ) : (
          <img src={down} className="w-4 h-4" />
        )}
      </div>
      <div className="[&>*:nth-last-child(2)]:border-b-0">
        {itemCards?.map((menu) => {
          return (
            <Menu
              key={menu.card.info.id}
              info={menu.card.info}
              isopen={iscategorydropdownopen}
              vegonly={isveg}
            />
          );
        })}
        <div className="w-full h-5 border-b-8"></div>
      </div>
    </div>
  );
};

export default MenuCategory;
