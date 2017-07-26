import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reminders from './reducers';

const stores = createStore(reminders);

ReactDOM.render(
    <Provider store={stores}>
    <App />
    </Provider>,document.getElementById('root')
)