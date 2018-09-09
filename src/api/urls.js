/* eslint-disable import/prefer-default-export */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;

const RequestType = {
  BATCH_STOCK_QUOTES: 'BATCH_STOCK_QUOTES',
};

const { BATCH_STOCK_QUOTES } = RequestType;
const BASE_URL = 'https://www.alphavantage.co';
const AlphaVantageUrl = `${BASE_URL}/query?function=${BATCH_STOCK_QUOTES}`;


export const updateUrl = symbols =>
  `${AlphaVantageUrl}&symbols=${symbols.toString()}&apikey=${API_KEY}`;
