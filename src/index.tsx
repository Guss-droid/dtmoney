import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de Website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 2000,
          createdAt: new Date(),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transaction', () => {
      return this.schema.all('transactions')
    })

    this.post('/transaction', (schema, req) => {
      const data = JSON.parse(req.requestBody)

      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);