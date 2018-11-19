/* eslint-disable import/prefer-default-export */
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { API_KEY } = publicRuntimeConfig;

const RequestType = {
  BATCH_STOCK_QUOTES: 'BATCH_STOCK_QUOTES',
  GLOBAL_QUOTE: 'GLOBAL_QUOTE',
  TIME_SERIES_DAILY: 'TIME_SERIES_DAILY',
};

const {
  BATCH_STOCK_QUOTES,
  GLOBAL_QUOTE,
  TIME_SERIES_DAILY,
} = RequestType;

const BASE_URL = 'https://www.alphavantage.co';

const AlphaVantageUrl = `${BASE_URL}/query?function=`;

/**
 * Global Quote - for dow jones
 * @param {string} symbol - single stock ticker string
 */
export const globalQuote = symbol =>
  `${AlphaVantageUrl}${GLOBAL_QUOTE}&symbol=${symbol}&apikey=${API_KEY}`;

/**
 * Batch Stock Request
 * @param {Array} symbols - array of stock tickers
 */
export const updateUrl = symbols =>
  `${AlphaVantageUrl}${BATCH_STOCK_QUOTES}&symbols=${symbols.toString()}&apikey=${API_KEY}`;

/**
 * Time Series - Daily
 * @param {string} ticker
 */
export const fetchTimeSeriesDaily = symbol =>
  `${AlphaVantageUrl}${TIME_SERIES_DAILY}&symbol=${symbol}&apikey=${API_KEY}`;
