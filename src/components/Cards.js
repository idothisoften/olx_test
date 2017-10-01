import React from 'react';
import style from './Cards.css';

import Card from './Card';

const Cards = ({data}) => {
  const cards = data.map(
    (obj) => <div key={obj.id} className={style.wrap}>
      <Card {...obj} />
    </div>
  );

  return (
    <div className={style.cards}>
      {cards}
    </div>
  );
};

export default Cards;
