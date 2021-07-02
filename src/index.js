import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/app/app'
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import BookStoreService from './services/bookstore-service';
import {BookstoreServiceProvider} from './components/bookstore-service-context/bookstore-service-context';
import store from './store';
import ErrorBoundry from './components/error-boundry/error-boundry';

const bookstoreService = new BookStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
,document.getElementById('root'));