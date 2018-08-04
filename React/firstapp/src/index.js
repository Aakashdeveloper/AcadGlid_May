import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))


/*
<img src/>
class=> heavy bit late to load but more function
functionl => light and easy to load but less function

const App = () => {
    return(
        <div>
            
            <Header/>
            <h1>This is first page</h1>
        </div>
    ) 
}
*/