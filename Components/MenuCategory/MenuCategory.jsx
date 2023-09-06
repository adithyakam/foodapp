import React, { useEffect, useState } from "react";
import "./MenuCategory.css";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

import Menu from "../Menu/Menu";

const MenuCategory = (props) => {
  const [iscategorydropdownopen, setiscategorydropdownopen] = useState(true);

  const { title, itemCards } = props.card.card;
  const { isveg } = props;

  const menuOpen = () => {
    setiscategorydropdownopen(!iscategorydropdownopen);
  };

  return (
    <div className="menu-cat-container">
      <div className="menu-cat-titleCard" onClick={() => menuOpen()}>
        <h1 className="menu-cat-title">{title}</h1>
        {iscategorydropdownopen ? (
          <img src={up} className="rescardstar" />
        ) : (
          <img src={down} className="rescardstar" />
        )}
      </div>
      <div>
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
        <div className="menu-cat-divider"></div>
      </div>
    </div>
  );
};

export default MenuCategory;
