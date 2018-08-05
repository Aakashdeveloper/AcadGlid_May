import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostDetail from './components/post_detail';

class App extends Component{
    render(){
        return(
            <div>
                <h1>This is  APP Routing</h1>
            </div>
        )
    }
}

ReactDOM.render(
        <BrowserRouter>
            <div>
                <header>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>                        
                        </button>
                        <a class="navbar-brand" href="#">AcadGild</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/posts">Posts</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                   
                    
                </header>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/posts" component={Posts}></Route>
                <Route path="/posts/:id" component={PostDetail}></Route>
                <Route path="/profile" component={Profile}></Route>
            </div>
        </BrowserRouter>
    , document.getElementById('root'));
