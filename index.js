import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import Car from './components/car';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/car/:id" component={Car}></Route>
      </div>
    </BrowserRouter>
</Provider>
, document.querySelector('.container'));
