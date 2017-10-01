import React from 'react';
import { connect } from 'react-redux';

import Pager from '../components/Pager';
import { pagerSelector } from '../selectors';
import { navigatePage } from '../actions';

const PagerContainer = ({current, total, navigatePage}) => {
  if (current == null || total == null) { return null; }

  return <Pager
    current={current}
    total={total}
    onSelect={(id) => id !== current ? navigatePage(id) : null}
  />;
};

export default connect(
  pagerSelector,
  { navigatePage }
)(PagerContainer);
