import React from 'react';
import ReactDOM from 'react-dom/client';
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import {store, Storage} from "./Redux/Store/store";
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import './index.css';

const options = {
    backlog: "gray"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={false} persistor={Storage}>
                <AlertProvider template={AlertTemplate} {...options}>
                    <App/>
                </AlertProvider>

            </PersistGate>
        </Provider>
    </React.StrictMode>
);
