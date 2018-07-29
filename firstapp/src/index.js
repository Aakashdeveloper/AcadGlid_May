import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'

const App = () => {
    return( 
            <div>
                <Header/>
            </div>)
}

ReactDOM.render(<App/>,document.getElementById('root'))





/*function add(a,b){
    return a+b
}

var add = (a,b) => { return a+b }

functional=> light weight less functinality

class based=> bit hevay but more functionlity
State
Props

let
var
const

rendering=> MAin component
export=> uslitiesed in main

jsx

*/