import React from 'react';
import style from './Card.css';

const Card = ({title, created, description, params}) => {
  return (
    <div className={style.card}>
      <div className={style.title}>
        {title}
      </div>
      <div className={style.attrs}>
        <div className={style.attrGroup}>
          <span className={style.attr}>
            {'Dodano:'}
            {' '}
            {created}
          </span>
        </div>
        <div className={style.attrGroup}>
          {
            params.map(
              ([key, value]) => <span key={key} className={style.attr}>
                {key}
                {':'}
                {' '}
                {value}
              </span>
            )
          }
        </div>
      </div>
      <div className={style.descr}>
        {description}
      </div>
    </div>
  );
};

export default Card;
