
import React from 'react';
import ReactDom from 'react-dom';

// components
import App from './app.js';

class Main extends React.Component{

    render(){
        return (
            <App />
        )
    }
}


ReactDom.render(<Main />, document.getElementById('root'));