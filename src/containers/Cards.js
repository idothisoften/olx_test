import React from 'react';
import { connect } from 'react-redux';

import Cards from '../components/Cards';
import { cardsSelector } from '../selectors';

const CardsContainer = ({loading, data}) => {
  if (data.length === 0 && loading) { return 'Loading'; }
  return <Cards data={data} />;
};

export default connect(
  cardsSelector
)(CardsContainer);
