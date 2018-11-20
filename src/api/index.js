/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { updateUrl, fetchTimeSeriesDaily } from './urls';

// test
export const updateList = tickers => axios.get(updateUrl(tickers.join(',')));

/**
 * Fetch time series for stock index
 * @param {string} ticker
 */
export const fetchIndex = ticker => axios.get(fetchTimeSeriesDaily(ticker));
