/* eslint-disable import/prefer-default-export */
import KEY from './key';

const RequestType = {
  BATCH_STOCK_QUOTES: 'BATCH_STOCK_QUOTES',
};

const { BATCH_STOCK_QUOTES } = RequestType;
const BASE_URL = 'https://www.alphavantage.co';
const AlphaVantageUrl = `${BASE_URL}/query?function=${BATCH_STOCK_QUOTES}`;


export const updateUrl = symbols =>
  `${AlphaVantageUrl}&symbols=${symbols.toString()}&apikey=${KEY}`;
