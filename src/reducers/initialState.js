/** All stocks are stored in 'stocks', which acts as a data store for other fields */
export default {
  // mock db of stock data, from API
  stocks: {
    BIO: {
      price: '',
      volume: '',
    },
    TSLA: {
      price: '',
      volume: '',
    },
  },
  // the stocks being watched
  watched: {
    BIO: true,
    TSLA: true,
  },
  // buys for each stock
  portfolio: {
    BIO: [
      {
        purchasePrice: 100,
        shares: 10,
      },
      {
        purchasePrice: 110,
        shares: 12,
      },
    ],
    TSLA: [
      {
        purchasePrice: 40,
        shares: 20,
      },
    ],
  },
};
