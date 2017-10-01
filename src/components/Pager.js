import React from 'react';
import style from './Pager.css';

const Pager = ({current, total, onSelect}) => {
  const pages = [];
  for (let i = 1; i <= total; i += 1) {
    pages.push(
      <div
        key={i} className={i === current? style.pageDisabled : style.page}
        onClick={() => onSelect(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className={style.pager}>
      <div className={style.pages}>
        {pages}
      </div>
      <div
        className={style.next}
        onClick={() => onSelect(Math.min(current + 1, total))}
      >
        Następna
      </div>
    </div>
  );
};

export default Pager;
