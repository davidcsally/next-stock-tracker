/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { updateUrl } from './urls';

// test
export const updateList = tickers => axios.get(updateUrl(tickers.join(',')));

