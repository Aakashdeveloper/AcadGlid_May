import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

const App = () => {
    return(
        <div>
            <h1>This is first page</h1>
            <Header/>
        </div>
    ) 
}

ReactDOM.render(<App/>, document.getElementById('root'))




/*
class=> heavy bit late to load but more function
functionl => light and easy to load but less function
*/