import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import { store,persistor } from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import App from './App'
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <App/>
            </BrowserRouter>
    </PersistGate>
    </Provider > ,
   document.querySelector('#root'))


