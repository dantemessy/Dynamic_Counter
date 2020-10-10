
import React from 'react';
import ReactDom from 'react-dom';

// components
import App from './app.js';

//context
import CounterProvider from "./contexts/counterContext.js";

class Main extends React.Component {

    render() {
        return (
            <CounterProvider>
                <App />
            </CounterProvider>
        )
    }
}


ReactDom.render(<Main />, document.getElementById('root'));