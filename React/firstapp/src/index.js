import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import JSON from './db.json';
import NewsList from './components/news_list';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            news:JSON,
            filteredData:JSON
        }
    }
    filteredNews(keyword){
        console.log("coming in filter>>>>"+keyword)

        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        })

        this.setState({filteredData:filtered})
    }

    render(){
        return(
            <div>
                <Header newsSearch={keyword=>this.filteredNews(keyword)}/>
                <NewsList news={this.state.filteredData}/>
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

filter 
indexof
*/